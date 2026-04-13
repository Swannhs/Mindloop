import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

import { Input } from '@/components/ui/input';
import avatar1 from '../../assets/media/avatar-1.jpg';
import avatar2 from '../../assets/media/avatar-2.jpg';
import avatar3 from '../../assets/media/avatar-3.jpg';
import heroBgVideo from '../../assets/media/hero-bg.mp4';
import { fadeUp } from '../../shared/animations/fadeUp';

const avatarImages = [avatar1, avatar2, avatar3];

export function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      try {
        await video.play();
      } catch {
        // Ignore autoplay rejections; the video will retry on canplay.
      }
    };

    const recoverPlayback = () => {
      if (document.hidden) return;
      const v = heroVideoRef.current;
      if (!v) return;

      const atEnd = Number.isFinite(v.duration) && v.duration > 0 && v.currentTime >= v.duration - 0.05;
      if (v.ended || atEnd) {
        v.currentTime = 0;
      }

      if (v.paused) {
        void v.play();
      }
    };

    void tryPlay();

    const watchdog = window.setInterval(recoverPlayback, 1200);
    video.addEventListener('pause', recoverPlayback);
    video.addEventListener('stalled', recoverPlayback);
    video.addEventListener('waiting', recoverPlayback);
    video.addEventListener('ended', recoverPlayback);
    document.addEventListener('visibilitychange', recoverPlayback);

    return () => {
      window.clearInterval(watchdog);
      video.removeEventListener('pause', recoverPlayback);
      video.removeEventListener('stalled', recoverPlayback);
      video.removeEventListener('waiting', recoverPlayback);
      video.removeEventListener('ended', recoverPlayback);
      document.removeEventListener('visibilitychange', recoverPlayback);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <video
        ref={heroVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => {
          const video = heroVideoRef.current;
          if (!video) return;
          void video.play();
        }}
        onLoadedData={() => {
          const video = heroVideoRef.current;
          if (!video) return;
          void video.play();
        }}
        onEnded={() => {
          const video = heroVideoRef.current;
          if (!video) return;
          video.currentTime = 0;
          void video.play();
        }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[2]" />

      <div className="relative z-10 pt-28 md:pt-32 max-w-4xl mx-auto">
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {avatarImages.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
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

        <motion.p {...fadeUp(0.6)} className="text-lg md:text-xl text-hero-subtitle max-w-2xl mx-auto mb-12">
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/50 px-6 h-12"
          />
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/40 backdrop-blur-xl text-foreground rounded-full px-10 py-3 font-bold text-sm tracking-[0.2em] animate-neon-rgb border-2 transition-colors duration-300"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
