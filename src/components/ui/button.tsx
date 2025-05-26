'use client';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-bold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary button - Ocean Blue
        default: [
          'relative bg-primary/90 text-primary-foreground shadow-sm',
          'hover:shadow-md hover:scale-[1.02] hover:bg-primary',
          'active:translate-y-0 active:scale-[0.98]',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0',
          'hover:before:opacity-100 before:transition-opacity before:duration-300',
        ].join(' '),

        // Secondary button - Surf Teal
        secondary: [
          'bg-secondary/90 text-secondary-foreground shadow-sm',
          'hover:shadow-md hover:scale-[1.02] hover:bg-secondary',
          'active:translate-y-0 active:scale-[0.98]',
        ].join(' '),

        // Outline button - For less prominent actions
        outline: [
          'border border-input bg-background shadow-sm',
          'hover:border-primary/30 hover:scale-[1.02]',
          'active:bg-accent/70',
          'transition-colors duration-200',
        ].join(' '),

        // Ghost button - For subtle actions
        ghost: [
          'hover:bg-accent/50 hover:text-accent-foreground',
          'active:bg-accent/70',
          'transition-colors duration-200',
        ].join(' '),

        // Link button - For navigation
        link: [
          'text-primary underline-offset-4 hover:underline',
          'relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary',
          'after:transition-all after:duration-200 after:-translate-x-1/2',
          'hover:after:w-3/4 hover:no-underline',
        ].join(' '),
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-14 px-8 py-3.5 text-base',
        xl: 'h-16 px-10 py-4 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = {
  asChild?: boolean;
  href?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof VariantProps<typeof buttonVariants>>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(
            buttonVariants({ variant, size }),
            'inline-flex items-center justify-center',
            className
          )}
          ref={ref as any}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
