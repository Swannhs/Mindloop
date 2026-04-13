import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Logo } from '../shared/ui/Logo';

export function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Use Cases', path: '/use-cases' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="flex items-center gap-12">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navItems.map((item, i) => (
            <div key={item.name} className="flex items-center gap-4">
              <Link
                to={item.path}
                className={cn(
                  'transition-colors',
                  location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.name}
              </Link>
              {i < navItems.length - 1 && <span className="text-muted-foreground/30">•</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
          >
            <Icon size={18} />
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
