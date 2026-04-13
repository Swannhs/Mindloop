import { motion } from 'motion/react';

import { fadeUp } from '../../shared/animations/fadeUp';

export function SearchSection() {
  const platforms = [
    {
      name: 'ChatGPT',
      icon: 'https://picsum.photos/seed/chatgpt/200/200',
      description: 'Conversational intelligence that reshaped how we interact with information.',
    },
    {
      name: 'Perplexity',
      icon: 'https://picsum.photos/seed/perplexity/200/200',
      description: 'The search engine that answers, providing direct clarity in a world of links.',
    },
    {
      name: 'Google AI',
      icon: 'https://picsum.photos/seed/googleai/200/200',
      description: 'Integrating depth and scale to redefine the boundaries of human knowledge.',
    },
  ];

  return (
    <section className="relative pt-52 md:pt-64 pb-20 px-8 md:px-28 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-8">
          Search has <span className="font-serif italic font-normal">changed.</span> Have you?
        </motion.h2>
        <motion.p {...fadeUp(0.4)} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24">
          The era of passive scrolling is over. We are entering a time where the quality of your input determines the depth of
          your output.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {platforms.map((p, i) => (
            <motion.div key={p.name} {...fadeUp(0.6 + i * 0.1)} className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] mb-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <img src={p.icon} alt={p.name} className="w-full h-full object-contain rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-semibold text-base mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm max-w-[240px]">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(1)} className="text-muted-foreground text-sm">
          If you do not answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  );
}
