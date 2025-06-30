import { forwardRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { linkVariants } from '@/config/component-styles';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  showExternalIcon?: boolean;
  variant?: 'default' | 'primary' | 'muted';
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, showExternalIcon = false, variant = 'default', ...props }, ref) => {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    const baseStyles = linkVariants({ variant });

    return (
      <a ref={ref} href={href} className={cn(baseStyles, className)} {...externalProps} {...props}>
        {children}
        {(isExternal || showExternalIcon) && (
          <ExternalLink className="ml-1 h-3 w-3 flex-shrink-0" aria-hidden="true" />
        )}
      </a>
    );
  },
);

Link.displayName = 'Link';
