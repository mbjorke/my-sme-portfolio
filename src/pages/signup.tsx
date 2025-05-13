import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async () => {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
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
