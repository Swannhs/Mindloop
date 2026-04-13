import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/10 bg-background">
      <p className="text-muted-foreground text-sm">© 2026 Mindloop. All rights reserved.</p>
      <div className="flex items-center gap-8 text-sm text-muted-foreground">
        {['Privacy', 'Terms', 'Contact'].map((item) => (
          <Link key={item} to="#" className="hover:text-foreground transition-colors">
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
}
