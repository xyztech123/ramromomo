import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { cafeInfo } from '../data/cafeInfo';

export const InfoBar: React.FC = () => {
  return (
    <section className="bg-[#150d08] py-16 px-6 border-y border-espresso/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-espresso/80">
        
        {/* Address */}
        <motion.div 
          className="flex flex-col items-center text-center px-4 pt-8 md:pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MapPin className="text-caramel mb-4" size={28} strokeWidth={1.5} />
          <h4 className="text-cream font-serif text-xl mb-2">Visit Us</h4>
          <p className="text-offwhite/60 font-light text-sm max-w-[200px]">{cafeInfo.address}</p>
        </motion.div>

        {/* Hours */}
        <motion.div 
          className="flex flex-col items-center text-center px-4 pt-8 md:pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Clock className="text-caramel mb-4" size={28} strokeWidth={1.5} />
          <h4 className="text-cream font-serif text-xl mb-2">Hours</h4>
          <p className="text-offwhite/60 font-light text-sm mb-1">Mon - Fri: {cafeInfo.hours.weekdays}</p>
          <p className="text-offwhite/60 font-light text-sm">Sat - Sun: {cafeInfo.hours.weekends}</p>
        </motion.div>

        {/* Contact */}
        <motion.div 
          className="flex flex-col items-center text-center px-4 pt-8 md:pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Phone className="text-caramel mb-4" size={28} strokeWidth={1.5} />
          <h4 className="text-cream font-serif text-xl mb-2">Contact</h4>
          <p className="text-offwhite/60 font-light text-sm mb-4">{cafeInfo.phone}</p>
          <div className="flex gap-4">
            {cafeInfo.socials.instagram && (
              <a href={cafeInfo.socials.instagram} target="_blank" rel="noreferrer" className="text-cream/50 hover:text-caramel transition-colors">
                <InstagramIcon size={20} />
              </a>
            )}
            {cafeInfo.socials.facebook && (
              <a href={cafeInfo.socials.facebook} target="_blank" rel="noreferrer" className="text-cream/50 hover:text-caramel transition-colors">
                <FacebookIcon size={20} />
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
