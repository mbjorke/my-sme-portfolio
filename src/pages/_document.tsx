import React from 'react';

import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import { siteConfig } from '@/config/siteConfig';

interface DocumentProps {
  locale?: string;
}

export default function Document({ locale = siteConfig.defaultLocale }: DocumentProps) {
  return (
    <Html lang={locale}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#010e14" />
        <meta
          name="description"
          content="Portfolio showcasing my work and expertise in web development and design"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="main-content">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const { locale } = ctx;

  return {
    ...initialProps,
    locale,
  };
};
