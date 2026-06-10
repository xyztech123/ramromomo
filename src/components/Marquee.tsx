import React from 'react';

export const Marquee: React.FC = () => {
  const text = "AUTHENTIC HIMALAYAN TASTE • HANDCRAFTED DAILY • STEAMED TO PERFECTION • THE BEST MOMOS IN TOWN • ";
  // Duplicate it to ensure seamless infinite scroll
  const repeatedText = Array(4).fill(text).join("");

  return (
    <div className="relative w-full overflow-hidden bg-caramel text-espresso py-6 sm:py-8 border-y border-espresso">
      {/* We use inline styles for the infinite animation to keep it self-contained */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
      <div className="flex whitespace-nowrap animate-marquee w-max">
        <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-widest px-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};
