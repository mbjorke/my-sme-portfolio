'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';

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
    <section className="flex flex-col justify-center items-center py-20">
      <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 w-full max-w-md text-left rounded-2xl shadow bg-card"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-invalid={!!errors.name}
          />
          {errors.name && <div className="mt-1 text-xs text-red-600">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="px-3 py-2 w-full rounded-lg border text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
          />
          {errors.email && <div className="mt-1 text-xs text-red-600">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="px-3 py-2 w-full rounded-lg border text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
          />
          {errors.message && <div className="mt-1 text-xs text-red-600">{errors.message}</div>}
        </div>
        {/* Honeypot field for bots */}
        <div style={{ display: 'none' }}>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <Button type="submit" className="mt-2 w-full" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </Button>
        {status === 'success' && (
          <div className="text-center text-green-600">Thanks! Your message was sent.</div>
        )}
        {status === 'error' && (
          <div className="text-center text-red-600">Something went wrong. Please try again.</div>
        )}
      </form>
    </section>
  );
}
