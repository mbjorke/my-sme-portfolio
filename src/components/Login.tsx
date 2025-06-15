'use client';
import React, { useState } from 'react';

import { signUp } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { user, error } = await signUp(email, password);
    if (error) {
      setStatus('error');
      console.error('Error logging in:', error);
    } else {
      setStatus('success');
      console.log('User logged in:', user);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Logging In...' : 'Log In'}
      </button>
      {status === 'success' && <div>Welcome back!</div>}
      {status === 'error' && <div>Login failed. Please try again.</div>}
    </form>
  );
};

export default Login;
