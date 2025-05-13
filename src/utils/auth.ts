import { supabase } from './supabase/client';

interface CustomAuthResponse {
  user?: any; // Replace 'any' with the actual user type if known
  error?: any; // Replace 'any' with the actual error type if known
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
