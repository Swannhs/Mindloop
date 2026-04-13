import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { cn } from '@/lib/utils';
import { fadeUp } from '../../shared/animations/fadeUp';

interface WordProps {
  key?: any;
  word: string;
  progress: any;
  range: [number, number];
  isHighlighted: boolean;
}

function Word({ word, progress, range, isHighlighted }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return <motion.span style={{ opacity }} className={cn(isHighlighted ? 'text-foreground' : 'text-hero-subtitle')}>{word}</motion.span>;
}

function WordReveal({ text, className, start, end }: { text: string; className?: string; start: number; end: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <p className="flex flex-wrap gap-x-[0.3em] gap-y-0">
        {words.map((word, i) => {
          const wordStart = start + (i / words.length) * (end - start);
          const wordEnd = wordStart + (1 / words.length) * (end - start);
          const isHighlighted = ['curiosity', 'meets', 'clarity'].includes(word.replace(/[^a-zA-Z]/g, ''));

          return <Word key={i} word={word} progress={scrollYProgress} range={[wordStart, wordEnd]} isHighlighted={isHighlighted} />;
        })}
      </p>
    </div>
  );
}

export function MissionSection() {
  return (
    <section className="pt-0 pb-32 md:pb-44 px-8 md:px-28 flex flex-col items-center">
      <motion.div {...fadeUp(0.2)} className="w-[800px] h-[800px] max-w-full aspect-square mb-24 overflow-hidden rounded-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="max-w-5xl w-full space-y-20">
        <WordReveal
          text="We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight"
          start={0.1}
          end={0.5}
        />
        <WordReveal
          text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
          className="text-xl md:text-2xl lg:text-3xl font-medium"
          start={0.4}
          end={0.8}
        />
      </div>
    </section>
  );
}
