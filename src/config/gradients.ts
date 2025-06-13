export type GradientVariant = keyof typeof gradientStyles;

export const gradientStyles = {
  primary: 'from-primary-900 via-primary-800 to-primary-700',
  secondary: 'from-primary-700 via-primary-600 to-primary-500',
  tertiary: 'from-primary-400 via-primary-300 to-primary-200',
  quaternary: 'from-accent-900 via-accent-700 to-accent-400',
  blueberry: 'from-purple-600 via-blue-800 to-blue-900',
  // Using the same gradient colors as defined in the Card component
  sunset: 'from-orange-500 via-pink-600 to-purple-700',
  transparent: 'transparent',
} as const;
