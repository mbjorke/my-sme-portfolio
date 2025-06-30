# Link Component

The `Link` component is a reusable, accessible, and styled link component that extends Next.js's built-in `Link` component with additional styling and accessibility features.

## Features

- Consistent styling across the application
- Built-in accessibility features
- Support for external links (opens in new tab with `rel="noopener noreferrer"`)
- Customizable variants for different use cases
- Seamless integration with Next.js routing

## Installation

The `Link` component is already included in the project. It's located at `src/components/ui/Link.tsx`.

## Usage

### Basic Usage

```tsx
import { Link } from '@/components/ui/Link';

// Internal link
<Link href="/about">About Us</Link>

// External link (automatically adds target="_blank" and rel="noopener noreferrer")
<Link href="https://example.com">External Link</Link>
```

### Variants

The `Link` component supports different visual variants:

```tsx
// Default variant (primary)
<Link href="/about" variant="default">Default Link</Link>

// Secondary variant
<Link href="/about" variant="secondary">Secondary Link</Link>

// Outline variant
<Link href="/about" variant="outline">Outline Link</Link>
// Ghost variant
<Link href="/about" variant="ghost">Ghost Link</Link>
```

### Sizes

```tsx
<Link href="/about" size="sm">Small Link</Link>
<Link href="/about" size="md">Medium Link (default)</Link>
<Link href="/about" size="lg">Large Link</Link>
```

### With Icons

```tsx
import { ExternalLink } from 'lucide-react';

<Link href="https://example.com" icon={<ExternalLink className="h-4 w-4" />}>
  Visit Example
</Link>;
```

## Props

| Prop            | Type                                    | Default     | Description                                   |
| --------------- | --------------------------------------- | ----------- | --------------------------------------------- | -------- | -------------------- | ---------------------------- |
| `variant`       | `'default'                              | 'secondary' | 'outline'                                     | 'ghost'` | `'default'`          | The visual style of the link |
| `size`          | `'sm'                                   | 'md'        | 'lg'`                                         | `'md'`   | The size of the link |
| `className`     | `string`                                | `''`        | Additional CSS classes                        |
| `icon`          | `React.ReactNode`                       | `null`      | Optional icon to display with the link        |
| `children`      | `React.ReactNode`                       | -           | Link content                                  |
| All other props | `React.ComponentProps<typeof NextLink>` | -           | All standard Next.js Link props are supported |

## Best Practices

1. **Use for Navigation**: Use the `Link` component for all internal navigation to benefit from Next.js's client-side navigation.
2. **External Links**: The component automatically detects external links and adds appropriate attributes.
3. **Accessibility**: Always provide meaningful link text that describes the link's destination.
4. **Icons**: Use icons to enhance usability, especially for external links.

## Accessibility

The `Link` component includes the following accessibility features:

- Proper contrast ratios for text and background colors
- Focus states for keyboard navigation
- `aria-label` support for icon-only links
- Automatic `rel="noopener noreferrer"` for external links

## Migration from Raw `<a>` Tags

Replace all instances of raw `<a>` tags with the `Link` component for consistency and to take advantage of its features.

**Before:**

```tsx
<a href="/about" className="text-blue-600 hover:underline">
  About
</a>
```

**After:**

```tsx
import { Link } from '@/components/ui/Link';

<Link href="/about">About</Link>;
```
