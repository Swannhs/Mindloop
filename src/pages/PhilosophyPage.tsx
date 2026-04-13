import { motion } from 'motion/react';

import { fadeUp } from '../shared/animations/fadeUp';
import { CTASection } from '../sections/home/CTASection';

export function PhilosophyPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-8 md:px-28">
      <div className="max-w-4xl mx-auto mb-32">
        <h1 className="text-5xl md:text-7xl font-medium mb-12 neon-text-flow">Our Philosophy</h1>
        <div className="space-y-12 text-xl md:text-2xl text-muted-foreground leading-relaxed">
          <p>
            We believe that in an age of infinite information, <span className="text-foreground italic">attention</span> is
            the most valuable currency. Yet, most platforms are designed to exploit it, not honor it.
          </p>
          <p>
            Mindloop is built on the principle of <span className="text-foreground">Depth over Speed</span>. We do not want
            you to scroll more; we want you to think more.
          </p>
          <p>
            Our goal is to create a digital environment that feels like a quiet library rather than a noisy marketplace. A
            place where the quality of an idea matters more than the speed of its delivery.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
        {[
          { title: 'Intentionality', desc: 'Every interaction should be deliberate, not impulsive.' },
          { title: 'Clarity', desc: 'Removing friction to let the core message shine through.' },
          { title: 'Community', desc: 'Building bridges between minds, not just numbers on a screen.' },
        ].map((item, i) => (
          <motion.div key={item.title} {...fadeUp(0.4 + i * 0.1)}>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <CTASection />
    </motion.div>
  );
}
