'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface PricingTooltipProps {
  price: string | number;
  className?: string;
  showLabel?: boolean;
}

export default function PricingTooltip({ 
  price, 
  className = '',
  showLabel = true 
}: PricingTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-flex items-center gap-1 ${className}`}>
      {showLabel && (
        <span className="text-xs text-foreground/50 uppercase tracking-wider">
          Example pricing
        </span>
      )}
      <span className="font-bold text-2xl">${price}</span>
      <span className="text-foreground/60 text-sm">/mo</span>
      
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="p-0.5 text-foreground/40 hover:text-foreground/60 transition-colors"
        aria-label="Pricing information"
      >
        <Info className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50"
          >
            <p>Pricing varies by address and eligibility.</p>
            <p className="text-white/70 mt-1">Call to confirm current rates.</p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple label component for marking example pricing
export function ExamplePricingLabel({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full ${className}`}>
      <Info className="w-3 h-3" />
      Example offer
    </span>
  );
}
