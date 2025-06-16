'use client';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'active:scale-[0.98] inline-flex items-center transition-colors duration-200 active:translate-y-0 justify-center whitespace-nowrap rounded-lg font-bold ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary button - Teal Blue
        primary: [
          'bg-teal-100 text-teal-950 shadow-sm',
          'hover:shadow-md hover:bg-teal-50 hover:text-teal-950',
          'active:bg-teal-50/90',
        ].join(' '),

        // Secondary button - Surf Teal
        secondary: [
          'bg-accent/10 text-accent-50 shadow-sm',
          'hover:shadow-md hover:bg-accent/20 hover:text-accent-foreground',
          'active:bg-accent/20',
        ].join(' '),

        // Outline button - For less prominent actions
        outline: [
          'border border-accent/10 border-accent/20 bg-background shadow-sm',
          'hover:border-accent/50',
          'active:bg-accent-600/20',
        ].join(' '),

        // Ghost button - For subtle actions
        ghost: [
          'hover:bg-secondary/10 hover:text-primary-foreground',
          'active:bg-secondary/20',
        ].join(' '),

        // Link button - For navigation
        link: [
          'text-primary-foreground underline-offset-4 hover:underline active:underline',
          'relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary-foreground',
          'after:transition-all after:duration-200 after:-translate-x-1/2',
          'hover:after:w-3/4 hover:no-underline',
          'active:bg-primary-600/20',
          'data-[state=active]:border-accent data-[state=active]:text-accent-50 data-[state=active]:bg-accent/10',
        ].join(' '),

        // Tab button - For tab navigation
        tab: [
          'relative rounded-none border-b-2 h-auto py-2 px-3',
          'border-transparent text-accent-50',
          'hover:bg-transparent hover:text-accent-50',
          'focus-visible:ring-0 focus-visible:ring-offset-0',
          'data-[state=active]:border-accent data-[state=active]:text-accent-50 data-[state=active]:bg-accent/10',
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
      variant: 'primary',
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
    { className, variant = 'primary', size = 'default', asChild = false, active, ...props },
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
      <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
