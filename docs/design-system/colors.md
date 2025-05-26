# Color Usage Principles

## Color Palette

### Primary Colors

- **Primary Blue** (`--primary`): Used for primary actions and interactive elements
- **Accent** (`--accent`): Used for secondary actions and highlights
- **Accent Foreground** (`--accent-foreground`): Used for text and icons on accent backgrounds

### Gradient Colors

- **Gradient Start** (`--gradient-start`): Cyan-400 (hsl(191, 80%, 87%))
- **Gradient Middle** (`--gradient-middle`): Emerald-500 (hsl(161, 40%, 35%))
- **Gradient End** (`--gradient-end`): Emerald-400 (hsl(161, 40%, 40%))

## Color Usage Guidelines

### Interactive Elements

1. **Primary Actions**

   - Use `--primary` for primary buttons and links
   - Use `--accent` for secondary buttons and links
   - Use gradient colors sparingly for hero elements

2. **Hover States**
   - Use subtle color transitions (10-20% opacity)
   - Use gradient backgrounds for hero elements
   - Avoid using gradients for small interactive elements

### Text and Content

1. **Text Colors**

   - Use `--foreground` for main text
   - Use `--muted-foreground` for secondary text
   - Use `--accent-foreground` for text on accent backgrounds

2. **Background Colors**
   - Use `--background` for main content areas
   - Use `--gradient` for hero sections
   - Use `--accent` at 5-10% opacity for hover states

### Border Colors

- Use `--border` for all borders
- Use `--border-muted` for subtle dividers
- Avoid using accent colors for borders

### Accessibility

1. **Contrast**

   - Ensure text has at least 4.5:1 contrast ratio with background
   - Use `--accent-foreground` for text on accent backgrounds
   - Avoid using gradients for text

2. **Focus States**
   - Use `--accent` for focus outlines
   - Ensure focus states are visible and distinguishable

## Implementation Notes

### CSS Variables

- All colors should be defined as CSS variables in `variables.css`
- Use HSL values for consistent color manipulation
- Avoid using hardcoded hex values

### Tailwind Integration

- Use Tailwind color classes when possible
- Use CSS variables for custom colors
- Avoid mixing Tailwind classes with CSS variables when possible

### Best Practices

1. **Consistency**

   - Use the same color for similar actions
   - Maintain consistent contrast ratios
   - Use gradients consistently across the application

2. **Performance**

   - Use CSS variables for dynamic color changes
   - Avoid complex gradients for small elements
   - Use solid colors for interactive states

3. **Maintenance**
   - Document all color changes
   - Keep color usage consistent across components
   - Update documentation when colors are modified
