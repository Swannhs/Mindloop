import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Hls from 'hls.js';

import { Button } from '@/components/ui/button';
import { fadeUp } from '../../shared/animations/fadeUp';
import { Logo } from '../../shared/ui/Logo';

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

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
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div {...fadeUp(0.2)} className="mb-8">
          <Logo className="scale-125" size="lg" />
        </motion.div>

        <motion.h2 {...fadeUp(0.4)} className="text-5xl md:text-7xl font-medium mb-6">
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          Be part of a community that values depth over speed, and meaning over noise.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="min-w-[190px] rounded-xl px-9 py-[14px] text-base font-semibold tracking-[0.01em] border border-white/40 bg-white text-black shadow-[0_8px_28px_rgba(255,255,255,0.24)] hover:bg-zinc-100 hover:shadow-[0_10px_34px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Subscribe Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[190px] rounded-xl px-9 py-[14px] text-base font-semibold tracking-[0.01em] liquid-glass border border-white/25 bg-white/[0.06] text-foreground hover:bg-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300"
          >
            Start Writing
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
