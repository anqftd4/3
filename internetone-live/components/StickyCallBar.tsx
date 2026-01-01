'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, X } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-40 hidden md:block"
        >
          <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600 shadow-lg">
            <div className="container">
              <div className="flex items-center justify-between py-3">
                {/* Left - Message */}
                <div className="flex items-center gap-4 text-white">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="font-semibold">Speak to a Specialist</p>
                    <p className="text-sm text-white/80 flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>

                {/* Center - Phone CTA */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-brand-600 font-bold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: {siteConfig.contact.phone}</span>
                </motion.a>

                {/* Right - Compliance + Close */}
                <div className="flex items-center gap-4">
                  <p className="text-xs text-white/70 max-w-[200px]">
                    Independent comparison service
                  </p>
                  <button
                    onClick={handleDismiss}
                    className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                    aria-label="Dismiss call bar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
