import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Login successful!',
        description: 'Welcome back to your career journey.',
      });
      // Reset form (in a real app, you would redirect to user dashboard)
      setLoginData({ email: '', password: '' });
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: 'Please make sure your passwords match.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate registration process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Registration successful!',
        description: 'Welcome to CareerPath! You can now log in to your account.',
      });
      // Reset form
      setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 justify-center items-center px-4 py-12">
        <div className="overflow-hidden w-full max-w-md rounded-xl shadow-lg">
          <div className="p-6 sm:p-8">
            <div className="mb-8 text-center">
              <Link href="/" className="inline-block">
                <h1 className="text-3xl font-bold gradient-text font-poppins">CareerPath</h1>
              </Link>
              <p className="mt-2 text-gray-600">Sign in to access counseling services</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password">Password</Label>
                      <Link
                        href="#"
                        className="text-sm text-counseling-purple hover:text-counseling-dark-purple"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      required
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white bg-counseling-purple hover:bg-counseling-dark-purple"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={registerData.name}
                      onChange={handleRegisterChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      required
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type="password"
                      required
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white bg-counseling-purple hover:bg-counseling-dark-purple"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-sm text-center text-gray-500">
              <span>By using our services, you agree to our </span>
              <Link href="#" className="text-counseling-purple hover:text-counseling-dark-purple">
                Terms of Service
              </Link>
              <span> and </span>
              <Link href="#" className="text-counseling-purple hover:text-counseling-dark-purple">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 text-center bg-gray-50">
        <Link href="/" className="text-gray-600 hover:text-counseling-purple">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
