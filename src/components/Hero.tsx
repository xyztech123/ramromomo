import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cafeInfo } from '../data/cafeInfo';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Crazy aesthetic scroll effects
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blurOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.2, // Wait for preloader
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const wordVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section ref={ref} className="relative h-[150vh] bg-espresso">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-espresso">
          <motion.div
            style={{
              scale: scaleBg,
              opacity: opacityBg,
              willChange: "transform, opacity"
            }}
            className="absolute inset-0 origin-center"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sharp Base Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')" }}
            />
            {/* Blurred Layer (fades in for hardware-accelerated blur effect on desktop) */}
            <motion.div
              style={{
                opacity: blurOpacity,
                willChange: "opacity",
                backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')"
              }}
              className="absolute inset-0 bg-cover bg-center blur-md scale-110 hidden md:block"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-b from-espresso/80 via-espresso/40 to-espresso pointer-events-none" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center"
          style={{ opacity: opacityText, y: yText, scale: scaleText }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-caramel font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6"
          >
            Welcome to
          </motion.h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-tight flex flex-col items-center text-center">
            {["The Country House", "Cafe"].map((word, idx) => (
              <span key={idx} className="overflow-hidden block py-1">
                <motion.span
                  className="block"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-cream/80 font-light mb-10 max-w-2xl mx-auto">
            {cafeInfo.tagline}
          </motion.p>
          <motion.div variants={itemVariants} className="pointer-events-auto mt-10">
            <a
              href="#menu"
              className="inline-block bg-caramel hover:bg-caramel/90 text-espresso px-10 py-4 rounded-full font-medium tracking-wide transition-all hover:scale-105"
            >
              Explore Menu
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-px h-16 bg-linear-to-b from-caramel to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
