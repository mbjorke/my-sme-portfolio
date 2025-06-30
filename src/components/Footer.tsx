import React from 'react';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Showcases</h2>
        <nav aria-label="Showcase navigation" className="flex flex-col gap-3 items-center">
          <Link
            href="/border-gradients"
            className="text-foreground hover:text-accent-600 dark:hover:text-accent-400 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded-sm px-2 py-1"
          >
            Border Gradient Showcase
          </Link>
          <Link
            href="/test-gradient"
            className="text-foreground hover:text-accent-600 dark:hover:text-accent-400 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded-sm px-2 py-1"
          >
            Card Gradient Color Picker Showcase
          </Link>
          <Link
            href="/design-system"
            className="text-foreground hover:text-accent-600 dark:hover:text-accent-400 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded-sm px-2 py-1"
          >
            Design System
          </Link>
          <Link
            href="/button-showcase"
            className="text-foreground hover:text-accent-600 dark:hover:text-accent-400 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded-sm px-2 py-1"
          >
            Button Showcase
          </Link>
          <Link
            href="/card-showcase"
            className="text-foreground hover:text-accent-600 dark:hover:text-accent-400 underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:rounded-sm px-2 py-1"
          >
            Card Component Showcase
          </Link>
        </nav>
      </div>
    </footer>
  );
}
