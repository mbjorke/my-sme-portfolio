import { IChangeEvent } from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import React, { FormEvent } from 'react';
import Form from '@rjsf/core';

import { JSONSchema7 } from 'json-schema';
import validator from '@rjsf/validator-ajv8';
import { supabase } from '../lib/supabaseClient';

const schema: JSONSchema7 = {
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
  },
  required: ['username', 'email', 'password'],
};

const SignUp = () => {
  const handleSignup = async (data: IChangeEvent<any, RJSFSchema, any>, event: FormEvent<any>) => {
    const { email, password } = data.formData;

    const { data: userData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      const user = userData.user;
      console.log('User signed up:', user);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form schema={schema as JSONSchema7} validator={validator} onSubmit={handleSignup} />
    </div>
  );
};

export default SignUp;
