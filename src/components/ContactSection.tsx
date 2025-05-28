'use client';
import React, { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { Card } from './ui/card';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // Honeypot check
    if (form.website) return setStatus('error');
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        console.error('Error submitting form:', err.message);
      } else {
        console.error('An unknown error occurred');
      }
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 py-16 w-full md:py-24 lg:py-32 bg-background/80">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s build something meaningful together
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              Have a project in mind or want to discuss potential opportunities? I&apos;d love to
              hear from you.
            </p>
          </div>

          <Card
            variant="primary"
            className="grid grid-cols-1 gap-12 items-start p-10 lg:grid-cols-2"
          >
            <ContactForm
              form={form}
              status={status}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <ContactInfo />
          </Card>
        </div>
      </div>
    </section>
  );
}
