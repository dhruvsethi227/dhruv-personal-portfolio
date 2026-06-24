'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Ask AI', href: '/ask' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-panel bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lg text-accent font-bold tracking-wider hover:text-amber-300 transition-colors"
        >
          Dhruv Sethi
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-mono transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
