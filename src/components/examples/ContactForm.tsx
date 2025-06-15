'use client';

import React from 'react';

import { z } from 'zod';

import { Button } from '@/components/ui/Button';
import { Form, FormField } from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import { cn } from '@/lib/utils';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    console.log('Form submitted:', data);
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submission successful');
      setIsSuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
      <p className="text-muted-foreground text-center mb-6">
        Fill out the form below and we&apos;ll get back to you soon.
      </p>
      <Form onSubmit={onSubmit} schema={contactFormSchema} className="space-y-4">
        <FormField name="name" label="Name">
          {(field) => {
            // Ensure the value is always a string
            const safeField = {
              ...field,
              value: String(field.value || ''),
              onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => {
                if (field.onChange) {
                  field.onChange(typeof e === 'string' ? e : e.target.value);
                }
              },
            };
            return <Input {...safeField} placeholder="Your name" className="w-full" />;
          }}
        </FormField>

        <FormField name="email" label="Email">
          {(field) => {
            // Ensure the value is always a string
            const safeField = {
              ...field,
              value: String(field.value || ''),
              onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => {
                if (field.onChange) {
                  field.onChange(typeof e === 'string' ? e : e.target.value);
                }
              },
            };
            return (
              <Input
                {...safeField}
                type="email"
                placeholder="your.email@example.com"
                className="w-full"
              />
            );
          }}
        </FormField>

        <FormField name="message" label="Message">
          {(field) => {
            // Ensure the value is always a string
            const safeField = {
              ...field,
              value: typeof field.value === 'string' ? field.value : '',
              onChange: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => {
                if (field.onChange) {
                  if (typeof e === 'string') {
                    field.onChange(e);
                  } else {
                    field.onChange(e.target.value);
                  }
                }
              },
            };
            return <TextareaField {...safeField} placeholder="Your message here..." />;
          }}
        </FormField>

        <div className="pt-2">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {isSuccess && (
            <p className="mt-2 text-sm text-green-600 text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </Form>
    </div>
  );
}

// Custom Textarea component that works with react-hook-form
interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);
TextareaField.displayName = 'TextareaField';

export default ContactForm;
