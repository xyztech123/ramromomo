import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add class to lock scroll and hide scrollbar (desktop only, controlled via CSS)
    document.body.classList.add('is-loading');

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small extra delay so the sweeping exit animation finishes before showing scrollbar
      setTimeout(() => {
        document.body.classList.remove('is-loading');
      }, 1300);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('is-loading');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0d0705]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-2xl sm:text-3xl md:text-5xl text-caramel font-serif tracking-widest uppercase text-center px-4"
            >
              Art Cafe
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
