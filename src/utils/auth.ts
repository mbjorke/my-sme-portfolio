import { User } from '@supabase/supabase-js';

import { supabase } from './supabase/client';

interface CustomAuthResponse {
  user?: User | null;
  error?: { message: string } | null;
}

export const signUp = async (email: string, password: string): Promise<CustomAuthResponse> => {
  const authResponse = await supabase.auth.signUp({
    email,
    password,
  });
  const user = authResponse.data?.user || null;
  const error = authResponse.error || null;

  return { user, error };
};
