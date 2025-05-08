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
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
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
