import { motion } from 'motion/react';

import { fadeUp } from '../shared/animations/fadeUp';
import { CTASection } from '../sections/home/CTASection';

export function UseCasesPage() {
  const cases = [
    { title: 'For Writers', desc: 'Focus on your craft. We handle the distribution, the design, and the community building.' },
    {
      title: 'For Researchers',
      desc: 'Curate your findings and share them with a community that values intellectual depth.',
    },
    {
      title: 'For Brands',
      desc: 'Build authentic relationships with your audience through meaningful, long-form content.',
    },
    {
      title: 'For Learners',
      desc: 'Find the best minds in any field and engage with their ideas in a focused environment.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-8 md:px-28">
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 neon-text-flow">Use Cases</h1>
        <p className="text-xl text-muted-foreground">
          Mindloop is for anyone who believes that ideas deserve a better home than a fleeting social media feed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            {...fadeUp(0.2 + i * 0.1)}
            className="p-10 rounded-2xl bg-muted/30 border border-border/10 hover:border-border/40 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
            <p className="text-muted-foreground text-lg">{c.desc}</p>
          </motion.div>
        ))}
      </div>
      <CTASection />
    </motion.div>
  );
}
