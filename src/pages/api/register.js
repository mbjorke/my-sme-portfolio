import { supabase } from '../../lib/supabaseClient'; // Adjust the path as necessary

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Create a new user
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    // Insert user into the users table
    const { data, error: insertError } = await supabase.from('users').insert([
      {
        customer_id: 1,
        email,
        password_hash: 'hashed_password',
        provider: 'email',
        provider_id: user.id,
      },
    ]);

    if (insertError) {
      return res.status(400).json({ message: insertError.message });
    }

    return res.status(201).json({ message: 'User registered successfully.', user });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
