import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const steps = [
    {
      num: '01',
      title: 'Sourcing',
      desc: 'We partner directly with small-lot farmers who share our obsessive commitment to quality and sustainable practices.'
    },
    {
      num: '02',
      title: 'Roasting',
      desc: 'Our vintage cast-iron roasters carefully bring out the unique terroirs and natural sweetness of each bean.'
    },
    {
      num: '03',
      title: 'Brewing',
      desc: 'Every cup is pulled or poured with absolute precision, honoring the journey from seed to your hands.'
    }
  ];

  return (
    <section ref={containerRef} className="h-auto md:h-[300vh] bg-[#120a06] relative">
      <div className="md:sticky top-0 h-screen flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Title */}
        <div className="absolute top-24 md:top-16 left-0 w-full px-6 md:px-12 xl:px-0 xl:max-w-7xl xl:mx-auto z-10 pointer-events-none">
          <h2 className="text-sm text-caramel uppercase tracking-widest font-semibold mb-2">The Craft</h2>
          <h3 className="text-3xl md:text-5xl text-cream leading-tight">
            An uncompromising approach.
          </h3>
        </div>

        {/* Desktop: Scroll-jacking horizontal movement */}
        <motion.div style={{ x }} className="hidden md:flex h-full items-center w-[300vw]">
          {steps.map((step) => (
            <div key={step.num} className="w-screen flex items-center justify-center px-6 md:px-24">
              <div className="relative group max-w-xl">
                <div className="text-[12rem] md:text-[20rem] font-serif text-cream/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-16 h-px bg-caramel mb-8 transition-all duration-700" />
                <h4 className="text-4xl md:text-6xl text-cream font-serif mb-6">{step.title}</h4>
                <p className="text-offwhite/60 font-light leading-relaxed text-lg md:text-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile: Native CSS horizontal snapping (0 JS overhead) */}
        <div className="md:hidden flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar items-center pt-20">
          {steps.map((step) => (
            <div key={step.num} className="w-screen shrink-0 snap-center flex items-center justify-center px-6">
              <div className="relative group max-w-xl w-full">
                <div className="text-[10rem] font-serif text-cream/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="w-12 h-px bg-caramel mb-6" />
                <h4 className="text-3xl text-cream font-serif mb-4">{step.title}</h4>
                <p className="text-offwhite/60 font-light leading-relaxed text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
