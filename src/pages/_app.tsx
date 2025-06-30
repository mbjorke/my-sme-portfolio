import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Layout } from '@/components/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { AccessibilityTestWrapper } from '@/utils/a11y/AccessibilityTestWrapper';
import { siteConfig } from '@/config/siteConfig';
import '@/styles/globals.css';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is not defined');
  throw new Error('Supabase configuration is missing');
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;

  // Set the initial locale in the document
  useEffect(() => {
    document.documentElement.lang = locale || 'en';
  }, [locale]);

  // Get the current locale from the router
  const currentLocale = locale || siteConfig.defaultLocale;
  const isEnglish = currentLocale === 'en';

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#010e14" />
      </Head>
      <ThemeProvider>
        <LanguageProvider>
          <AccessibilityTestWrapper>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AccessibilityTestWrapper>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
