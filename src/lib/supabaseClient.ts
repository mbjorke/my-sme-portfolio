import { createClient } from '@supabase/supabase-js';

// Initialize with empty strings as fallback
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a mock client if environment variables are missing
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
      console.warn('Supabase URL or Anon Key is not configured');
    }
    // Return a mock client with no-op methods
    return {
      auth: {
        signIn: () => Promise.resolve({ error: 'Supabase not configured' }),
        signOut: () => Promise.resolve({ error: 'Supabase not configured' }),
        user: () => ({ data: { user: null } }),
      },
      from: () => ({
        select: () => Promise.resolve({ data: [], error: 'Supabase not configured' }),
        insert: () => Promise.resolve({ error: 'Supabase not configured' }),
        update: () => Promise.resolve({ error: 'Supabase not configured' }),
        delete: () => Promise.resolve({ error: 'Supabase not configured' }),
      }),
    } as any;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();
