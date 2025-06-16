'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/config/component-styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, active, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          active && 'ring-2 ring-offset-2 ring-ring',
          className,
        )}
        ref={ref}
        data-state={active ? 'active' : undefined}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
