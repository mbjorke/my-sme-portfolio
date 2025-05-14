import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-20 text-center">
      <h1 className="mb-4 text-xl font-bold">Showcases</h1>
      <div className="flex flex-col gap-2 items-center">
        <Link
          href="/border-gradients"
          className="underline transition-colors text-primary hover:text-fuchsia-500"
        >
          Border Gradient Showcase
        </Link>
        <Link
          href="/test-gradient"
          className="underline transition-colors text-primary hover:text-cyan-500"
        >
          Card Gradient Color Picker Showcase
        </Link>
        <Link
          href="/button-showcase"
          className="underline transition-colors text-primary hover:text-blue-500"
        >
          Button Showcase
        </Link>
        <Link
          href="/card-showcase"
          className="underline transition-colors text-primary hover:text-emerald-500"
        >
          Card Component Showcase
        </Link>
      </div>
    </footer>
  );
}
