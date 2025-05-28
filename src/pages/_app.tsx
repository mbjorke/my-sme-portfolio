import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { Layout } from '@/components/Layout';
import { useEffect } from 'react';
import Head from 'next/head';
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

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
