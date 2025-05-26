import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card';

export default function CardShowcase() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Card Components</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A collection of card components built with Radix UI and styled with our design system.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Primary Card */}
        <Card variant="primary" className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">Primary Card</CardTitle>
            <CardDescription className="text-blue-100/80">
              For primary actions and important content.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-blue-50/90">
              This card uses our primary gradient with a subtle hover effect.
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="text-xs text-blue-100/60">Hover to see the elevation effect</div>
          </CardFooter>
        </Card>

        {/* Secondary Card */}
        <Card variant="secondary" className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">Secondary Card</CardTitle>
            <CardDescription className="text-teal-100/80">
              For secondary actions and content.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-teal-50/90">
              This card uses our teal gradient with a border and stronger shadow.
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="text-xs text-teal-100/60">Hover to see the elevation effect</div>
          </CardFooter>
        </Card>
      </div>

      {/* Card Footer Documentation */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Card Footer</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">CardFooter</code> component
          is used to display actions, metadata, or additional information at the bottom of a card.
          It includes proper spacing and alignment by default.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
              <CardDescription>Example of a card with a footer section</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the main content area of the card. The footer will be positioned at the
                bottom.
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="text-sm text-muted-foreground">Footer content goes here</div>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Usage</h3>
            <div className="rounded-lg border bg-muted/50 p-6">
              <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm">
                {`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter className="border-t pt-4">
    <div>Footer content</div>
  </CardFooter>
</Card>`}
              </pre>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Props</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>
                  <code>className</code> - Optional. Additional CSS classes to apply
                </li>
                <li>
                  <code>children</code> - The content of the footer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-16 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Primary Card</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm">
                  {`<Card variant="primary">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Secondary Card</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm">
                  {`<Card variant="secondary">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
