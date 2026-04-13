/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import Hls from 'hls.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const Logo = ({ className, size = "md" }: { className?: string, size?: "md" | "lg" }) => {
  const outerSize = size === "lg" ? "w-10 h-10" : "w-7 h-7";
  const innerSize = size === "lg" ? "w-5 h-5" : "w-3 h-3";
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div className={cn("relative flex items-center justify-center", outerSize)}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className={cn("absolute inset-0 border-2 border-foreground/20 rounded-full border-t-foreground/60", outerSize)} 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={cn("border border-foreground/60 rounded-full bg-foreground/5", innerSize)} 
        />
      </div>
      <span className={cn("font-bold tracking-tight neon-text-flow", size === "lg" ? "text-2xl" : "text-xl")}>
        Mindloop
      </span>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Use Cases", path: "/use-cases" }
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
                  "transition-colors",
                  location.pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[2]" />
      
      <div className="relative z-10 pt-28 md:pt-32 max-w-4xl mx-auto">
        <motion.div 
          {...fadeUp(0.2)}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/avatar${i}/100/100`}
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1 
          {...fadeUp(0.4)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.1] mb-6 neon-text-flow"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p 
          {...fadeUp(0.6)}
          className="text-lg md:text-xl text-hero-subtitle max-w-2xl mx-auto mb-12"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div 
          {...fadeUp(0.8)}
          className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center gap-2"
        >
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-transparent border-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/50 px-6 h-12"
          />
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/40 backdrop-blur-xl text-foreground rounded-full px-10 py-3 font-bold text-sm tracking-[0.2em] animate-neon-rgb border-2 transition-colors duration-300"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const SearchSection = () => {
  const platforms = [
    {
      name: "ChatGPT",
      icon: "https://picsum.photos/seed/chatgpt/200/200",
      description: "Conversational intelligence that reshaped how we interact with information."
    },
    {
      name: "Perplexity",
      icon: "https://picsum.photos/seed/perplexity/200/200",
      description: "The search engine that answers, providing direct clarity in a world of links."
    },
    {
      name: "Google AI",
      icon: "https://picsum.photos/seed/googleai/200/200",
      description: "Integrating depth and scale to redefine the boundaries of human knowledge."
    }
  ];

  return (
    <section className="relative pt-52 md:pt-64 pb-20 px-8 md:px-28 text-center overflow-hidden">
      {/* Animated Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <div className="relative z-10">
        <motion.h2 
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-8"
        >
          Search has <span className="font-serif italic font-normal">changed.</span> Have you?
        </motion.h2>
        <motion.p 
          {...fadeUp(0.4)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24"
        >
          The era of passive scrolling is over. We are entering a time where the quality of your input determines the depth of your output.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {platforms.map((p, i) => (
            <motion.div 
              key={p.name}
              {...fadeUp(0.6 + i * 0.1)}
              className="flex flex-col items-center"
            >
              <div className="w-[200px] h-[200px] mb-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <img src={p.icon} alt={p.name} className="w-full h-full object-contain rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-semibold text-base mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm max-w-[240px]">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          {...fadeUp(1)}
          className="text-muted-foreground text-sm"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  );
};

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
  isHighlighted: boolean;
  key?: any;
}

const Word = ({ word, progress, range, isHighlighted }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span 
      style={{ opacity }}
      className={cn(
        isHighlighted ? "text-foreground" : "text-hero-subtitle"
      )}
    >
      {word}
    </motion.span>
  );
};

const WordReveal = ({ text, className, start, end }: { text: string, className?: string, start: number, end: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");
  
  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <p className="flex flex-wrap gap-x-[0.3em] gap-y-0">
        {words.map((word, i) => {
          const wordStart = start + (i / words.length) * (end - start);
          const wordEnd = wordStart + (1 / words.length) * (end - start);
          
          const isHighlighted = ["curiosity", "meets", "clarity"].includes(word.replace(/[^a-zA-Z]/g, ""));
          
          return (
            <Word 
              key={i} 
              word={word} 
              progress={scrollYProgress} 
              range={[wordStart, wordEnd]} 
              isHighlighted={isHighlighted} 
            />
          );
        })}
      </p>
    </div>
  );
};

const MissionSection = () => {
  return (
    <section className="pt-0 pb-32 md:pb-44 px-8 md:px-28 flex flex-col items-center">
      <motion.div 
        {...fadeUp(0.2)}
        className="w-[800px] h-[800px] max-w-full aspect-square mb-24 overflow-hidden rounded-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
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
};

const SolutionSection = () => {
  const features = [
    { title: "Curated Feed", description: "A personalized stream of high-signal content, filtered for depth and relevance." },
    { title: "Writer Tools", description: "Powerful, minimal tools designed to help you focus on what matters: your ideas." },
    { title: "Community", description: "Connect with a global network of thinkers, creators, and lifelong learners." },
    { title: "Distribution", description: "Reach the right audience without the friction of traditional algorithms." }
  ];

  return (
    <section className="py-32 md:py-44 px-8 md:px-28 border-t border-border/30">
      <motion.div {...fadeUp(0.1)} className="mb-16">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-4">SOLUTION</span>
        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </h2>
      </motion.div>

      <motion.div 
        {...fadeUp(0.3)}
        className="w-full aspect-[3/1] mb-20 overflow-hidden rounded-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={f.title}
            {...fadeUp(0.5 + i * 0.1)}
            className="space-y-4"
          >
            <h3 className="font-semibold text-base">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 px-8 md:px-28 border-t border-border/30 overflow-hidden text-center flex flex-col items-center justify-center min-h-[60vh]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div {...fadeUp(0.2)} className="mb-8">
          <Logo className="scale-125" size="lg" />
        </motion.div>
        
        <motion.h2 
          {...fadeUp(0.4)}
          className="text-5xl md:text-7xl font-medium mb-6"
        >
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>
        
        <motion.p 
          {...fadeUp(0.6)}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-12"
        >
          Be part of a community that values depth over speed, and meaning over noise.
        </motion.p>
        
        <motion.div 
          {...fadeUp(0.8)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="bg-background/40 backdrop-blur-xl text-foreground border-2 animate-neon-rgb rounded-lg px-8 py-[14px] text-base font-bold tracking-tight hover:bg-background/80 transition-all duration-300"
          >
            Subscribe Now
          </Button>
          <Button size="lg" variant="outline" className="liquid-glass border-none text-foreground hover:bg-white/5 rounded-lg px-8 py-[14px] text-base font-bold tracking-tight">
            Start Writing
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/10 bg-background">
      <p className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </p>
      <div className="flex items-center gap-8 text-sm text-muted-foreground">
        {["Privacy", "Terms", "Contact"].map((item) => (
          <Link key={item} to="#" className="hover:text-foreground transition-colors">
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
};

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <SearchSection />
    <MissionSection />
    <SolutionSection />
    <CTASection />
  </motion.div>
);

const HowItWorksPage = () => {
  const steps = [
    { title: "Curate", description: "Our AI filters the noise, bringing you only the highest signal content tailored to your intellectual interests." },
    { title: "Write", description: "Use our distraction-free editor to turn your insights into beautiful newsletters that people actually want to read." },
    { title: "Connect", description: "Build a community around your ideas. Engage in deep conversations with your readers directly on the platform." },
    { title: "Grow", description: "Reach a global audience of thinkers and creators. Our distribution network ensures your voice is heard by the right people." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-8 md:px-28"
    >
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 neon-text-flow">How It Works</h1>
        <p className="text-xl text-muted-foreground">A seamless journey from curiosity to clarity. We've redesigned the workflow of digital consumption and creation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            {...fadeUp(0.2 + i * 0.1)}
            className="p-8 rounded-2xl liquid-glass border border-border/20"
          >
            <span className="text-4xl font-serif italic mb-6 block text-muted-foreground/40">0{i + 1}</span>
            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <CTASection />
    </motion.div>
  );
};

const PhilosophyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-8 md:px-28"
    >
      <div className="max-w-4xl mx-auto mb-32">
        <h1 className="text-5xl md:text-7xl font-medium mb-12 neon-text-flow">Our Philosophy</h1>
        <div className="space-y-12 text-xl md:text-2xl text-muted-foreground leading-relaxed">
          <p>We believe that in an age of infinite information, <span className="text-foreground italic">attention</span> is the most valuable currency. Yet, most platforms are designed to exploit it, not honor it.</p>
          <p>Mindloop is built on the principle of <span className="text-foreground">Depth over Speed</span>. We don't want you to scroll more; we want you to think more.</p>
          <p>Our goal is to create a digital environment that feels like a quiet library rather than a noisy marketplace. A place where the quality of an idea matters more than the speed of its delivery.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
        {[
          { title: "Intentionality", desc: "Every interaction should be deliberate, not impulsive." },
          { title: "Clarity", desc: "Removing friction to let the core message shine through." },
          { title: "Community", desc: "Building bridges between minds, not just numbers on a screen." }
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
};

const UseCasesPage = () => {
  const cases = [
    { title: "For Writers", desc: "Focus on your craft. We handle the distribution, the design, and the community building." },
    { title: "For Researchers", desc: "Curate your findings and share them with a community that values intellectual depth." },
    { title: "For Brands", desc: "Build authentic relationships with your audience through meaningful, long-form content." },
    { title: "For Learners", desc: "Find the best minds in any field and engage with their ideas in a focused environment." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-8 md:px-28"
    >
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-8 neon-text-flow">Use Cases</h1>
        <p className="text-xl text-muted-foreground">Mindloop is for anyone who believes that ideas deserve a better home than a fleeting social media feed.</p>
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
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
