import 'next';

declare module 'next' {
  interface NextApiRequest {
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
  }
}

declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/link';
  
  interface LinkProps extends Omit<NextLinkProps, 'locale'> {
    locale?: string | false;
  }
}

declare module 'next/router' {
  interface NextRouter {
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
  }
}
