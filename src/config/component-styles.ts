import { cva, type VariantProps } from 'class-variance-authority';

// Link variants
export const linkVariants = cva(
  'inline-flex items-center font-medium transition-colors hover:underline underline-offset-4',
  {
    variants: {
      variant: {
        default: ['text-foreground', 'hover:text-foreground/80'],
        primary: ['text-primary-50', 'hover:text-primary-500'],
        accent: ['text-accent-100', 'hover:text-accent-500'],
        muted: ['text-muted-foreground', 'hover:text-foreground'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type LinkVariant = VariantProps<typeof linkVariants>['variant'];
