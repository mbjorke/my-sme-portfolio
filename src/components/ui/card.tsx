import * as React from 'react';
import { cn } from '@/lib/utils';
import { gradientStyles } from '@/config/gradients';

type CardVariant = keyof typeof gradientStyles;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: CardVariant;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles =
      'rounded-xl transition-all duration-500 border border-accent/10 hover:border-accent/50';

    const variantStyles: Record<CardVariant, string> = {
      primary: ['bg-gradient-to-br', gradientStyles.primary, 'text-primary-foreground'].join(' '),

      secondary: ['bg-gradient-to-br', gradientStyles.secondary, 'text-primary-foreground'].join(
        ' ',
      ),

      transparent: ['bg-accent/10', 'text-white'].join(' '),
    };
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant as keyof typeof variantStyles] || variantStyles.primary,
          className,
        )}
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
      withBorder && 'border-t border-accent/10',
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, type CardVariant };
