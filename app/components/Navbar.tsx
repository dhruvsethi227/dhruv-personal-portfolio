'use client';

export default function Navbar() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'career-highlights', label: 'Career Highlights' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white font-medium"
        >
          Dhruv Sethi
        </a>
        <div className="flex items-center gap-6">
          {navItems
            .filter((item) => item.id !== 'home')
            .map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
