import { motion } from 'motion/react';

import { CTASection } from '../sections/home/CTASection';
import { Hero } from '../sections/home/Hero';
import { MissionSection } from '../sections/home/MissionSection';
import { SearchSection } from '../sections/home/SearchSection';
import { SolutionSection } from '../sections/home/SolutionSection';

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
    </motion.div>
  );
}
