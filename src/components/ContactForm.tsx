'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';
import Input from './ui/Input';

interface ContactFormProps {
  form: {
    name: string;
    email: string;
    message: string;
    website: string;
  };
  status: 'idle' | 'success' | 'error' | 'loading';
  errors: { name?: string; email?: string; message?: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({
  form,
  status,
  errors,
  handleChange,
  handleSubmit,
}: ContactFormProps) {
  const { locale } = useLanguage();
  const t = siteConfig.translations[locale as keyof typeof siteConfig.translations].contact.form;

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-foreground">{t.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-left">
          <label htmlFor="name" className="block text-sm font-semibold text-foreground">
            {t.name} <span className="text-destructive-200">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-invalid={!!errors.name}
            placeholder={t.namePlaceholder}
          />
          {errors.name && (
            <p className="text-sm font-medium text-destructive-200">{t.validation.nameRequired}</p>
          )}
        </div>

        <div className="space-y-2 text-left">
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">
            {t.email} <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
            placeholder={t.emailPlaceholder}
          />
          {errors.email && (
            <p className="text-sm font-medium text-destructive">
              {errors.email.includes('valid')
                ? t.validation.invalidEmail
                : t.validation.emailRequired}
            </p>
          )}
        </div>

        <div className="space-y-2 text-left">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground">
            {t.message} <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
            aria-errormessage={errors.message ? 'message-error' : undefined}
            placeholder={t.messagePlaceholder}
            className="w-full px-3 py-2 text-base border rounded-md shadow-sm border-input bg-background text-foreground placeholder:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          />
          {errors.message && (
            <p className="text-sm font-medium text-destructive">{t.validation.messageRequired}</p>
          )}
        </div>

        {/* Honeypot field for bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">{t.honeypot}</label>
          <Input
            id="website"
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full" size="lg" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <svg className="mr-2 w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t.submitting}
              </>
            ) : (
              t.submit
            )}
          </Button>
        </div>

        {status === 'success' && (
          <div className="p-4 mt-4 bg-green-50 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 mt-4 bg-red-50 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">{t.error}</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
