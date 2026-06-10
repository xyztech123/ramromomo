import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuItems';

const categories = ['steamed', 'pan-fried', 'specialty', 'drinks'] as const;

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('steamed');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-espresso border-t border-espresso/50 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-espresso to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-caramel uppercase tracking-widest font-semibold mb-4">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl text-cream">Curated Menu</h3>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-caramel text-espresso font-medium'
                  : 'bg-transparent text-cream/60 hover:text-cream border border-cream/20 hover:border-cream/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex gap-6"
              >
                {/* Image Placeholder/Real Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-sm relative bg-cream/5">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  )}
                  {!item.available && (
                    <div className="absolute inset-0 bg-espresso/80 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest text-caramel">Sold Out</span>
                    </div>
                  )}
                </div>

                <div className="grow flex flex-col justify-center">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl sm:text-2xl text-cream font-serif group-hover:text-caramel transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-caramel font-medium ml-4 shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full h-px border-b border-dashed border-cream/20 mb-3" />
                  <p className="text-offwhite/60 text-sm sm:text-base font-light mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {item.tag && (
                    <div className="self-start px-3 py-1 bg-cream/10 rounded-sm">
                      <span className="text-[10px] uppercase tracking-widest text-cream/90 font-medium">
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
