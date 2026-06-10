import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const images = [
    { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', alt: 'Cafe interior', span: 'col-span-2 row-span-2', y: yFast },
    { src: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600', alt: 'Coffee beans', span: 'col-span-1 row-span-1', y: ySlow },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600', alt: 'Latte art', span: 'col-span-1 row-span-1', y: yFast },
    { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600', alt: 'Barista working', span: 'col-span-1 row-span-2', y: ySlow },
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', alt: 'Cafe seating', span: 'col-span-2 row-span-1', y: yFast },
  ];

  return (
    <section id="gallery" ref={containerRef} className="py-32 bg-espresso relative border-t border-espresso/50">
      <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm text-caramel uppercase tracking-widest font-semibold mb-4">Atmosphere</h2>
          <h3 className="text-4xl md:text-5xl text-cream">The Ambiance</h3>
        </motion.div>
        
        <motion.p 
          className="text-offwhite/60 font-light max-w-md text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          A space designed for connection, creativity, and calm. Immerse yourself in the warmth of our environment.
        </motion.p>
      </div>

      {/* Masonry Grid with Parallax */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{ y: image.y }}
              className={`relative overflow-hidden rounded-sm group ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
