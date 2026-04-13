import { motion } from 'motion/react';

import solutionBgVideo from '../../assets/media/search-solution-bg.mp4';
import { fadeUp } from '../../shared/animations/fadeUp';

export function SolutionSection() {
  const features = [
    { title: 'Curated Feed', description: 'A personalized stream of high-signal content, filtered for depth and relevance.' },
    { title: 'Writer Tools', description: 'Powerful, minimal tools designed to help you focus on what matters: your ideas.' },
    { title: 'Community', description: 'Connect with a global network of thinkers, creators, and lifelong learners.' },
    { title: 'Distribution', description: 'Reach the right audience without the friction of traditional algorithms.' },
  ];

  return (
    <section className="py-32 md:py-44 px-8 md:px-28 border-t border-border/30">
      <motion.div {...fadeUp(0.1)} className="mb-16">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-4">SOLUTION</span>
        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </h2>
      </motion.div>

      <motion.div {...fadeUp(0.3)} className="w-full aspect-[3/1] mb-20 overflow-hidden rounded-2xl">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={solutionBgVideo} type="video/mp4" />
        </video>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div key={f.title} {...fadeUp(0.5 + i * 0.1)} className="space-y-4">
            <h3 className="font-semibold text-base">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
