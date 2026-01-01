'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg"
          style={{
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
          }}
          aria-label={`Call ${siteConfig.contact.phone}`}
        >
          {/* Pulse ring animation */}
          <motion.span
            className="absolute inset-0 rounded-full bg-brand-500"
            animate={{
              scale: [1, 1.4],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-brand-500"
            animate={{
              scale: [1, 1.4],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.5,
            }}
          />
          
          <Phone className="w-6 h-6 relative z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
