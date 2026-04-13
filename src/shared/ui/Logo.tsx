import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export function Logo({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const outerSize = size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';
  const innerSize = size === 'lg' ? 'w-5 h-5' : 'w-3 h-3';

  return (
    <div className={cn('flex items-center gap-2 group', className)}>
      <div className={cn('relative flex items-center justify-center', outerSize)}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className={cn('absolute inset-0 border-2 border-foreground/20 rounded-full border-t-foreground/60', outerSize)}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={cn('border border-foreground/60 rounded-full bg-foreground/5', innerSize)}
        />
      </div>
      <span className={cn('font-bold tracking-tight neon-text-flow', size === 'lg' ? 'text-2xl' : 'text-xl')}>
        Mindloop
      </span>
    </div>
  );
}
