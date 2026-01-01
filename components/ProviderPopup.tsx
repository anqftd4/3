'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { siteConfig, Provider } from '@/lib/siteConfig';

interface ProviderPopupProps {
  provider: Provider;
}

export default function ProviderPopup({ provider }: ProviderPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);
  const [dismissCount, setDismissCount] = useState(0);
  const [dontShowSession, setDontShowSession] = useState(false);
  const [isReappearing, setIsReappearing] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  // Check sessionStorage on mount
  useEffect(() => {
    const dontShow = sessionStorage.getItem(`popup-dontshow-${provider.id}`);
    const dismissed = sessionStorage.getItem(`popup-dismissed-${provider.id}`);
    
    if (dontShow === 'true') {
      setDontShowSession(true);
      setShowMinimized(true);
    } else if (dismissed) {
      const count = parseInt(dismissed, 10) || 0;
      setDismissCount(count);
      if (count >= 2) {
        setShowMinimized(true);
      } else {
        setIsOpen(true);
      }
    } else {
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, [provider.id]);

  const handleClose = useCallback(() => {
    const newCount = dismissCount + 1;
    setDismissCount(newCount);
    sessionStorage.setItem(`popup-dismissed-${provider.id}`, newCount.toString());
    setIsOpen(false);
    
    if (newCount >= 2) {
      setShowMinimized(true);
    }
  }, [dismissCount, provider.id]);

  // Reappear logic after first dismissal
  useEffect(() => {
    if (!isOpen && !dontShowSession && dismissCount === 1) {
      const timer = setTimeout(() => {
        setIsReappearing(true);
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, dontShowSession, dismissCount]);

  // Focus trapping and ESC key
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      setTimeout(() => modalRef.current?.focus(), 100);
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, handleClose]);

  const handleDontShowAgain = useCallback(() => {
    setDontShowSession(true);
    sessionStorage.setItem(`popup-dontshow-${provider.id}`, 'true');
    setIsOpen(false);
    setShowMinimized(true);
  }, [provider.id]);

  const handleMinimizedClick = useCallback(() => {
    if (!dontShowSession) {
      setIsReappearing(true);
      setIsOpen(true);
      setShowMinimized(false);
    }
  }, [dontShowSession]);

  // Animation variants
  const backdropVariants: Variants = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  } : {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
  };

  // Different animation for reappearing vs first load
  const modalVariants: Variants = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  } : isReappearing ? {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 28,
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      transition: { duration: 0.2 },
    },
  } : {
    hidden: { opacity: 0, scale: 0.85, y: 25 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 380,
        damping: 32,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: 15,
      transition: { duration: 0.18 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }
    },
  };

  // Floating particles component (very subtle)
  const FloatingParticles = () => {
    if (prefersReducedMotion) return null;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: provider.color,
              opacity: 0.2,
              left: `${20 + i * 15}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            {/* Backdrop with blur */}
            <motion.div 
              className="absolute inset-0 bg-black/55"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(8px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.35 }}
            />
            
            {/* Subtle noise texture */}
            <div 
              className="absolute inset-0 opacity-[0.018] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
              className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden outline-none"
              style={{
                boxShadow: `0 0 80px ${provider.color}35, 0 25px 50px -12px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {/* Animated gradient border */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 rounded-2xl p-[1.5px] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${provider.color}50, transparent 40%, ${provider.colorLight}50, transparent 60%, ${provider.color}50)`,
                    backgroundSize: '250% 250%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}

              {/* Inner container */}
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl m-[1.5px] overflow-hidden">
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${provider.color}, transparent 55%)`,
                  }}
                />

                {/* Floating particles */}
                <FloatingParticles />

                {/* Noise grain */}
                <div 
                  className="absolute inset-0 opacity-[0.012] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Provider badge/chip */}
                  <motion.div
                    variants={childVariants}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: `${provider.color}15`,
                      color: provider.color,
                      border: `1px solid ${provider.color}25`,
                    }}
                  >
                    {provider.name}
                  </motion.div>

                  {/* Phone icon with pulse */}
                  <motion.div
                    variants={childVariants}
                    className="relative inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                    }}
                  >
                    {/* Pulse rings */}
                    {!prefersReducedMotion && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${provider.color}` }}
                          animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${provider.color}` }}
                          animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                        />
                      </>
                    )}
                    <Phone className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    variants={childVariants}
                    id="popup-title"
                    className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2"
                  >
                    Connect with a {provider.name} Specialist
                  </motion.h2>

                  {/* Short supporting text */}
                  <motion.p 
                    variants={childVariants}
                    className="text-sm text-slate-600 dark:text-slate-400 mb-5"
                  >
                    Call to compare options and confirm availability at your address.
                  </motion.p>

                  {/* Phone number display */}
                  <motion.div
                    variants={childVariants}
                    className="mb-4"
                  >
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-2xl font-bold"
                      style={{ color: provider.color }}
                    >
                      {!prefersReducedMotion && (
                        <motion.span
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Phone className="w-5 h-5" />
                        </motion.span>
                      )}
                      {prefersReducedMotion && <Phone className="w-5 h-5" />}
                      {siteConfig.contact.phone}
                    </a>
                  </motion.div>

                  {/* Primary CTA - Call Now */}
                  <motion.a
                    variants={childVariants}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="relative flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-white overflow-hidden group"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                    }}
                  >
                    {/* Glow effect */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          boxShadow: [
                            `0 0 15px ${provider.color}30, inset 0 0 15px ${provider.color}15`,
                            `0 0 30px ${provider.color}50, inset 0 0 25px ${provider.color}25`,
                            `0 0 15px ${provider.color}30, inset 0 0 15px ${provider.color}15`,
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    
                    {/* Shimmer sweep */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 opacity-25"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                          transform: 'skewX(-20deg)',
                        }}
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                      />
                    )}

                    {/* Ripple on press */}
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span 
                        className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-25 transition-opacity"
                        style={{ background: 'radial-gradient(circle, white 10%, transparent 70%)' }}
                      />
                    </span>
                    
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </motion.a>

                  {/* Hours and email */}
                  <motion.div 
                    variants={childVariants}
                    className="mt-4 flex flex-col items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{siteConfig.contact.hours}</span>
                    </div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                  </motion.div>

                  {/* Compliance line */}
                  <motion.p 
                    variants={childVariants}
                    className="mt-4 text-[10px] text-slate-400 dark:text-slate-500"
                  >
                    {siteConfig.name} is an independent comparison service (not {provider.name}).
                  </motion.p>

                  {/* Close link - simple text, no "Not now" */}
                  <motion.div variants={childVariants} className="mt-4">
                    <button
                      onClick={handleClose}
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-all hover:underline underline-offset-2"
                    >
                      Close
                    </button>
                  </motion.div>

                  {/* Don't show again - very subtle */}
                  <motion.div variants={childVariants} className="mt-2">
                    <button
                      onClick={handleDontShowAgain}
                      className="text-[10px] text-slate-300 dark:text-slate-600 hover:text-slate-400 dark:hover:text-slate-500 transition-colors"
                    >
                      Don&apos;t show again
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Widget */}
      <AnimatePresence>
        {showMinimized && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            onClick={dontShowSession ? undefined : handleMinimizedClick}
            className="fixed bottom-24 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-white font-medium"
            style={{
              background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
              boxShadow: `0 4px 20px ${provider.color}35`,
              cursor: dontShowSession ? 'default' : 'pointer',
            }}
          >
            {dontShowSession ? (
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Need Help?</span>
              </>
            )}
            
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${provider.color}35`,
                    `0 0 0 8px ${provider.color}00`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
