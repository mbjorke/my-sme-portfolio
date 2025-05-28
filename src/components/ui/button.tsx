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
          'active:bg-accent/50',
        ].join(' '),

        // Secondary button - Surf Teal
        secondary: [
          'bg-secondary/90 text-secondary-foreground shadow-sm',
          'hover:shadow-md hover:scale-[1.02] hover:bg-secondary',
          'active:translate-y-0 active:scale-[0.98]',
          'active:bg-accent/70',
        ].join(' '),

        // Outline button - For less prominent actions
        outline: [
          'border border-primary/10 border-input bg-background shadow-sm',
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

        // Tab button - For tab navigation
        tab: [
          'relative rounded-none border-b-2 h-auto py-2 px-3',
          'border-transparent text-muted-foreground',
          'hover:bg-transparent hover:text-primary',
          'focus-visible:ring-0 focus-visible:ring-offset-0',
          'data-[state=active]:border-primary data-[state=active]:text-primary/90 data-[state=active]:bg-primary/10',
          'transition-colors duration-200',
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
  active?: boolean;
} & VariantProps<typeof buttonVariants> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof VariantProps<typeof buttonVariants>>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default', size = 'default', asChild = false, active, ...props },
    ref,
  ) => {
    if (asChild) {
      return (
        <Slot
          className={cn(
            buttonVariants({ variant, size }),
            'inline-flex justify-center items-center',
            className,
          )}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className, {
          'data-[state=active]': active,
        })}
        ref={ref}
        data-state={active ? 'active' : 'inactive'}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
