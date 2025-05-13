import { useState } from 'react';
import { signUp } from '../utils/auth';
import { Card } from './Card'; // Assuming you have a Card component
import Button from '@/components/ui/Button'; // Example path for ShadCN Button
import { Input } from '@/components/ui/Input'; // Example path for ShadCN Input

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { user, error } = await signUp(email, password);
    if (error) {
      setStatus('error');
      console.error('Error signing up:', error);
    } else {
      setStatus('success');
      console.log('User signed up:', user);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card>
        <h1 className="mb-4 text-xl font-bold">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
