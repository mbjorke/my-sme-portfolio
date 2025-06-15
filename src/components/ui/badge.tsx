import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Badge variants configuration using cva (Class Variance Authority)
 * Provides consistent styling for different badge variants
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-semibold',
  {
    variants: {
      variant: {
        // Primary badge - for primary actions and highlights
        primary:
          'bg-accent-100 text-accent-950 hover:bg-accent-50 hover:text-accent-950 border-transparent',
        // Secondary badge - for secondary information
        secondary:
          'bg-accent/10 text-accent-50 shadow-sm hover:shadow-md hover:bg-accent/20 hover:text-accent-foreground border-transparent',
        // Destructive badge - for errors and destructive actions
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent',
        // Outline badge - for subtle, bordered badges
        outline: 'border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
        // Success badge - for success states
        success: 'bg-success text-success-foreground hover:bg-success/80 border-transparent',
        // Warning badge - for warning states
        warning: 'bg-warning text-warning-foreground hover:bg-warning/80 border-transparent',
        // Info badge - for informational states
        info: 'bg-info text-info-foreground hover:bg-info/80 border-transparent',
      },
      size: {
        sm: 'h-5 text-xs px-2',
        default: 'h-6 text-xs px-2.5',
        lg: 'h-8 text-sm px-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

/**
 * Badge component for displaying status, labels, or tags
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="outline" size="sm">Draft</Badge>
 * <Badge variant="destructive">Attention</Badge>
 * ```
 */
function Badge({
  className,
  variant,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
