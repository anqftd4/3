'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Phone, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { cn, isValidZip } from '@/lib/utils';

interface ZipSearchModuleProps {
  variant?: 'hero' | 'inline' | 'card';
  className?: string;
}

export default function ZipSearchModule({ variant = 'card', className }: ZipSearchModuleProps) {
  const [zip, setZip] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isValidZip(zip)) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSearching(false);
    setShowResults(true);
  }, [zip]);

  const filteredPlans = siteConfig.samplePlans.slice(0, 4);

  const containerClasses = cn(
    variant === 'hero' && 'max-w-2xl mx-auto',
    variant === 'card' && 'card',
    className
  );

  return (
    <div className={containerClasses}>
      {variant === 'card' && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            Check Availability in Your Area
          </h3>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="Why we ask for ZIP code"
            >
              <Info className="w-5 h-5" />
            </button>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 top-full mt-2 w-64 p-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl z-10"
                >
                  <p className="font-semibold mb-1">Why we ask for your ZIP code</p>
                  <p className="text-slate-300">
                    Internet and TV availability varies by location. Your ZIP code helps us show you the providers and plans available in your specific area.
                  </p>
                  <div className="absolute right-4 -top-1.5 w-3 h-3 bg-slate-900 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <form onSubmit={handleSearch} className="relative">
        <div className={cn(
          'flex gap-2',
          variant === 'hero' ? 'flex-col sm:flex-row' : 'flex-row'
        )}>
          <div className="relative flex-grow">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, '').slice(0, 5));
                setError('');
                setShowResults(false);
              }}
              placeholder="Enter ZIP code"
              className={cn(
                'input pl-12',
                variant === 'hero' && 'py-4 text-lg',
                error && 'border-red-500 focus:ring-red-500'
              )}
              aria-label="ZIP code"
              aria-invalid={!!error}
              aria-describedby={error ? 'zip-error' : undefined}
              maxLength={5}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSearching}
            className={cn(
              'btn-primary whitespace-nowrap',
              variant === 'hero' && 'py-4 px-8 text-lg',
              isSearching && 'opacity-70 cursor-not-allowed'
            )}
          >
            {isSearching ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Search</span>
              </>
            )}
          </motion.button>
        </div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            id="zip-error"
            className="mt-2 text-sm text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.p>
        )}
      </form>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Top matches in your area ({zip})</span>
            </div>

            <div className="space-y-3">
              {filteredPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: siteConfig.providers.find(p => p.id === plan.providerSlug)?.color }}
                      />
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {plan.provider}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {plan.name} • Up to {plan.speed} Mbps
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900 dark:text-white">
                      ${plan.price}/mo*
                    </p>
                    <p className="text-xs text-slate-500">{plan.priceNote}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                <strong>Call to confirm availability & pricing in your area</strong>
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-call w-full justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>{siteConfig.contact.phone}</span>
              </motion.a>
            </div>

            <p className="mt-3 text-xs text-slate-500 text-center">
              *Pricing varies by address and is subject to change. Call for accurate quotes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
