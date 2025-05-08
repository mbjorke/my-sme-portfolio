import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { Layout } from '@/components/Layout';
import { useEffect } from 'react';
import '@/styles/globals.css';
import '@/styles/unocss.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;

  // Set the initial locale in the document
  useEffect(() => {
    document.documentElement.lang = locale || 'en';
  }, [locale]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
