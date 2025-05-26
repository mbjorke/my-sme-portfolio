import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

export default function CardShowcase() {
  return (
    <div className="flex flex-col gap-12 items-center px-4 py-16 min-h-screen bg-background">
      <h1 className="mb-8 text-4xl font-bold text-primary">Card Component Showcase</h1>
      <div className="grid grid-cols-1 gap-12 w-full max-w-4xl md:grid-cols-2">
        {/* Default Card */}
        <div className="transition-none">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>No gradient, standard border and shadow.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You can use this for standard content blocks.</p>
            </CardContent>
            <CardFooter>
              <span className="text-xs text-muted-foreground">Footer actions here</span>
            </CardFooter>
          </Card>
        </div>

        {/* Standard Card */}
        <Card>
          <CardHeader>
            <CardTitle>Standard Card</CardTitle>
            <CardDescription>
              A simple card with a clean design. <span className="text-emerald-500">Hover for shadow effect!</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Consistent with the design system.</p>
          </CardContent>
        </Card>

        {/* Card with Padding */}
        <Card className="p-2">
          <CardHeader>
            <CardTitle>Card with Padding</CardTitle>
            <CardDescription>
              Additional padding for more breathing room. <span className="text-emerald-500">Hover for shadow effect!</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Useful for content-heavy cards.</p>
          </CardContent>
        </Card>

        {/* Card with Rounded Corners */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Card with Rounded Corners</CardTitle>
            <CardDescription>
              Soft corners for a modern look. <span className="text-emerald-500">Hover for shadow effect!</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Customizable with Tailwind classes.</p>
          </CardContent>
        </Card>

        {/* Card with Shadow */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Card with Shadow</CardTitle>
            <CardDescription>
              Enhanced shadow for depth. <span className="text-emerald-500">Hover for shadow effect!</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Useful for emphasizing importance.</p>
          </CardContent>
        </Card>
        {/* Reveal Gradient on Hover */}
        <Card>
          <CardHeader>
            <CardTitle>Reveal Gradient on Hover</CardTitle>
            <CardDescription>
              Looks like a default card until hovered.{' '}
              <span className="text-emerald-500">
                Hover to reveal a thin gradient border (p-[2px]).
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is a popular interactive effect for modern UI cards.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
