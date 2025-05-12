import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-20 text-center">
      <h1 className="text-xl font-bold mb-4">Showcases</h1>
      <div className="flex flex-col items-center gap-2">
        <Link
          href="/border-gradients"
          className="text-primary underline hover:text-fuchsia-500 transition-colors"
        >
          Border Gradient Showcase
        </Link>
        <Link
          href="/test-gradient"
          className="text-primary underline hover:text-cyan-500 transition-colors"
        >
          Card Gradient Color Picker Showcase
        </Link>
      </div>
    </footer>
  );
}
