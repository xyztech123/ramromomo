import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-40 px-6 bg-espresso border-t border-espresso/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 md:gap-32">
        {/* Visual Side */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-4/5 md:aspect-square overflow-hidden rounded-sm relative">
            <motion.img 
              style={{ y: imgY, scale: 1.15 }}
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200" 
              alt="Pouring coffee" 
              className="w-full h-full object-cover origin-center"
            />
            <div className="absolute inset-0 bg-espresso/20 mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-caramel/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-sm text-caramel uppercase tracking-widest font-semibold mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl text-cream mb-8 leading-tight">
            More than just coffee. <br className="hidden md:block"/> A place to pause.
          </h3>
          <p className="text-offwhite/70 text-lg leading-relaxed mb-6 font-light">
            We believe that every cup tells a story. From the high-altitude farms where our beans are hand-picked, to the careful roasting process that brings out their unique flavor profiles.
          </p>
          <p className="text-offwhite/70 text-lg leading-relaxed mb-10 font-light">
            But more importantly, we believe in the moments created over coffee. Whether you're rushing to work, meeting an old friend, or getting lost in a good book, we're here to make that moment exceptional.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=300" 
            alt="Signature" 
            className="w-32 opacity-80 mix-blend-screen contrast-125 grayscale"
            style={{ filter: "brightness(2) invert(1)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
