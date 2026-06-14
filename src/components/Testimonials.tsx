import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-espresso relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Aesthetic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-caramel/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-caramel text-6xl font-serif leading-none block mb-6">"</span>
          <h3 className="text-3xl md:text-5xl text-cream font-serif leading-relaxed mb-10">
            Art Cafe doesn't just serve food. They serve an experience—an oasis of calm in the middle of a chaotic city.
          </h3>
          <p className="text-sm text-caramel uppercase tracking-widest font-semibold">
            — The Daily Cuppa
          </p>
        </motion.div>
      </div>
    </section>
  );
};
