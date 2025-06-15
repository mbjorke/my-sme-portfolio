export type GradientVariant = keyof typeof gradientStyles;

export const gradientStyles = {
  primary: 'from-primary-900 via-primary-800 to-primary-700',
  secondary: 'from-primary-700 via-primary-600 to-primary-500',
  transparent: 'transparent',
} as const;
