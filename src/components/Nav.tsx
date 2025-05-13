import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

const Nav = () => {
  return (
    <nav className="hidden md:flex gap-6 text-sm font-medium">
      {Object.entries(siteConfig.translations.en.navLinks).map(([key, value]) => (
        <Link
          key={key}
          href={`#${key.toLowerCase()}`}
          className="hover:text-primary transition-colors"
        >
          {value}
        </Link>
      ))}
      <Link href="/signup" className="hover:text-primary transition-colors">
        Sign Up
      </Link>
    </nav>
  );
};

export default Nav;
