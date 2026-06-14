import React from 'react';
import { motion } from 'framer-motion';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-caramel uppercase tracking-widest font-semibold mb-4">Find Us</h2>
          <h3 className="text-4xl md:text-5xl text-cream">Our Neighborhood</h3>
        </motion.div>

        <motion.div
          className="w-full h-[500px] bg-[#1a1410] rounded-sm overflow-hidden relative border border-espresso/50 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* We use a stylized map placeholder for aesthetics, but an iframe could go here */}
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617544078868!2d-73.98782782410887!3d40.748440471388056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2) sepia(0.3) hue-rotate(340deg)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Location Map"
            />
          </div>

          {/* Overlay to enforce dark theme map feel without complex map APIs */}
          <div className="absolute inset-0 bg-espresso/40 pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-espresso p-6 rounded-sm shadow-2xl border border-caramel/20 text-center min-w-[250px]">
            <h4 className="text-cream font-serif text-2xl mb-2">CUP eBONG CAFE</h4>
            <p className="text-caramel text-sm uppercase tracking-widest">We are here</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
