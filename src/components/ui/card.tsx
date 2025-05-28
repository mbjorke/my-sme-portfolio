import * as React from 'react';
import { cn } from '@/lib/utils';

type CardVariant = 'primary' | 'secondary' | 'tertiary' | 'blueberry' | 'sunset' | 'transparent';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: CardVariant;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-500 hover:scale-[1.02]';

    const variantStyles = {
      primary: [
        'bg-gradient-to-br from-primary-800 to-primary-900',
        'text-primary-foreground',
        'border border-primary-600/50',
        'hover:border-primary-600/90',
      ].join(' '),

      secondary: [
        'bg-gradient-to-r from-primary-500 to-primary-600',
        'text-secondary-foreground',
        'border border-primary-400/60',
        'hover:border-primary-400/70',
      ].join(' '),

      tertiary: [
        'bg-gradient-to-r from-accent-500 to-primary-400',
        'text-accent-foreground',
        'border border-blue-900/90',
        'hover:border-blue-900/80',
      ].join(' '),

      sunset: [
        'bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700',
        'text-white',
        'border border-purple-900/70',
        'hover:border-purple-900/60',
      ].join(' '),

      blueberry: [
        'bg-gradient-to-r from-purple-600 via-blue-900 to-blue-950',
        'text-white',
        'border border-blue-900/60',
        'hover:border-blue-900/70',
      ].join(' '),

      transparent: [
        'bg-accent/10',
        'text-white',
        'border border-accent/5',
        'hover:border-accent/10',
      ].join(' '),
    };
    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant] || variantStyles.primary, className)}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-lg font-semibold tracking-tight leading-tight', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col gap-4 p-6 pt-4',
      withBorder &&
        'border-t border-primary/10 group-hover:border-primary/20 transition-colors duration-300',
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, type CardVariant };
