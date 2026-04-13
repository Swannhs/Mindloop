import { motion } from 'motion/react';

import { fadeUp } from '../shared/animations/fadeUp';
import { CTASection } from '../sections/home/CTASection';

export function HowItWorksPage() {
  const steps = [
    {
      title: 'Curate',
      description:
        'Our AI filters the noise, bringing you only the highest signal content tailored to your intellectual interests.',
    },
    {
      title: 'Write',
      description:
        'Use our distraction-free editor to turn your insights into beautiful newsletters that people actually want to read.',
    },
    {
      title: 'Connect',
      description:
        'Build a community around your ideas. Engage in deep conversations with your readers directly on the platform.',
    },
    {
      title: 'Grow',
      description:
        'Reach a global audience of thinkers and creators. Our distribution network ensures your voice is heard by the right people.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-8 md:px-28">
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 neon-text-flow">How It Works</h1>
        <p className="text-xl text-muted-foreground">
          A seamless journey from curiosity to clarity. We redesigned the workflow of digital consumption and creation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div key={step.title} {...fadeUp(0.2 + i * 0.1)} className="p-8 rounded-2xl liquid-glass border border-border/20">
            <span className="text-4xl font-serif italic mb-6 block text-muted-foreground/40">0{i + 1}</span>
            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <CTASection />
    </motion.div>
  );
}
