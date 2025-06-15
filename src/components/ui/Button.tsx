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
        // Primary button - High contrast for main actions
        primary: [
          'bg-accent-700 text-white shadow-sm',
          'hover:shadow-md hover:bg-accent-800 hover:text-white',
          'active:bg-accent-900',
          'focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          'dark:bg-accent-600 dark:hover:bg-accent-700 dark:active:bg-accent-800',
        ].join(' '),

        // Secondary button - For secondary actions
        secondary: [
          'bg-accent-100 text-accent-900 shadow-sm',
          'hover:shadow-md hover:bg-accent-200 hover:text-accent-950',
          'active:bg-accent-300',
          'focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          'dark:bg-accent-800/30 dark:text-accent-100 dark:hover:bg-accent-800/50 dark:hover:text-white',
        ].join(' '),

        // Outline button - For less prominent actions
        outline: [
          'border border-accent-300 bg-transparent text-accent-800 shadow-sm',
          'hover:border-accent-500 hover:bg-accent-50 hover:text-accent-800',
          'active:bg-accent-100',
          'focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          'dark:border-accent-600 dark:text-accent-100 dark:hover:bg-accent-800/30 dark:hover:text-accent-100',
        ].join(','),

        // Ghost button - For subtle actions
        ghost: [
          'text-accent-800 hover:bg-accent-100 hover:text-accent-800',
          'active:bg-accent-200',
          'focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          'dark:text-accent-100 dark:hover:bg-accent-800/30 dark:hover:text-accent-100',
        ].join(' '),

        // Link button - For navigation
        link: [
          'text-accent-800 underline-offset-4 hover:underline',
          'hover:text-accent-800',
          'focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded',
          'dark:text-accent-100 dark:hover:text-accent-100',
        ].join(' '),

        // Tab button - For tab navigation
        tab: [
          'relative rounded-none border-b-2 h-auto py-2 px-3',
          'border-transparent text-accent-100',
          'hover:border-accent-200 hover:text-white',
          'data-[state=active]:border-accent-100 data-[state=active]:text-white data-[state=active]:font-bold',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
          'dark:text-accent-200 dark:hover:text-white dark:data-[state=active]:text-white',
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
