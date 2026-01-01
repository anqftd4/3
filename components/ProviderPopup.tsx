'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, Sparkles } from 'lucide-react';
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
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.25 },
    },
  } : {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
    },
  };

  // Floating particles component
  const FloatingParticles = () => {
    if (prefersReducedMotion) return null;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: provider.color,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
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
              className="absolute inset-0 bg-black/60"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(8px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden outline-none"
              style={{
                boxShadow: `0 0 100px ${provider.color}40, 0 0 200px ${provider.color}20, 0 30px 60px -15px rgba(0, 0, 0, 0.35)`,
              }}
            >
              {/* Animated gradient border */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 rounded-3xl p-[2px] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${provider.color}60, transparent, ${provider.colorLight}60, transparent, ${provider.color}60)`,
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}

              {/* Inner container with background effects */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl m-[2px] overflow-hidden">
                {/* Radial gradient background */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${provider.color}, transparent 50%)`,
                  }}
                />

                {/* Floating particles */}
                <FloatingParticles />

                {/* Noise grain inside popup */}
                <div 
                  className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Header */}
                <div
                  className="relative p-6 pb-4 text-center"
                  style={{
                    background: `linear-gradient(180deg, ${provider.color}08, transparent)`,
                  }}
                >
                  {/* Provider badge */}
                  <motion.div
                    variants={childVariants}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}20, ${provider.color}10)`,
                      color: provider.color,
                      border: `1px solid ${provider.color}30`,
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    {provider.name} Specialist
                  </motion.div>

                  {/* Animated phone icon with glow ring */}
                  <motion.div
                    variants={childVariants}
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                    }}
                  >
                    {/* Pulsing glow rings */}
                    {!prefersReducedMotion && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${provider.color}` }}
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${provider.color}` }}
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                            delay: 0.6,
                          }}
                        />
                      </>
                    )}
                    
                    {/* Pulsing phone icon */}
                    <motion.div
                      animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Phone className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    variants={childVariants}
                    id="popup-title"
                    className="text-2xl font-display font-bold text-slate-900 dark:text-white"
                  >
                    Connect with Your {provider.name} Specialist!
                  </motion.h2>
                </div>

                {/* Body */}
                <div className="relative p-6 pt-2">
                  {/* Description */}
                  <motion.p 
                    variants={childVariants}
                    className="text-slate-600 dark:text-slate-300 text-center mb-6"
                  >
                    Get expert assistance with your {provider.name} internet and TV options. Our specialists are ready to help you compare plans and verify availability at your address.
                  </motion.p>

                  {/* Phone number highlight */}
                  <motion.div
                    variants={childVariants}
                    className="relative mb-4 p-4 rounded-2xl text-center"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}08, ${provider.color}04)`,
                      border: `1px solid ${provider.color}20`,
                    }}
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                      Call Now – Free Consultation
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-2xl font-bold flex items-center justify-center gap-2"
                      style={{ color: provider.color }}
                    >
                      {!prefersReducedMotion && (
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Phone className="w-5 h-5" />
                        </motion.span>
                      )}
                      {prefersReducedMotion && <Phone className="w-5 h-5" />}
                      {siteConfig.contact.phone}
                    </a>
                  </motion.div>

                  {/* Primary CTA Button with shine effect */}
                  <motion.a
                    variants={childVariants}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -3 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg text-white overflow-hidden group"
                    style={{
                      background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                    }}
                  >
                    {/* Animated glow ring around button */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          boxShadow: [
                            `0 0 20px ${provider.color}40, inset 0 0 20px ${provider.color}20`,
                            `0 0 40px ${provider.color}60, inset 0 0 30px ${provider.color}30`,
                            `0 0 20px ${provider.color}40, inset 0 0 20px ${provider.color}20`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    
                    {/* Shimmer sweep effect */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          transform: 'skewX(-20deg)',
                        }}
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatDelay: 2,
                          ease: 'easeInOut' 
                        }}
                      />
                    )}

                    {/* Ripple effect on hover */}
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span 
                        className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-30 transition-opacity"
                        style={{ background: 'radial-gradient(circle, white 10%, transparent 70%)' }}
                      />
                    </span>
                    
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </motion.a>

                  {/* Hours and email */}
                  <motion.div 
                    variants={childVariants}
                    className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{siteConfig.contact.hours}</span>
                    </div>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                  </motion.div>

                  {/* Compliance */}
                  <motion.p 
                    variants={childVariants}
                    className="mt-4 text-xs text-slate-400 dark:text-slate-500 text-center"
                  >
                    {siteConfig.name} is an independent comparison service (not {provider.name}).
                  </motion.p>

                  {/* Action buttons - NO X button, just these */}
                  <motion.div variants={childVariants} className="mt-6 space-y-3">
                    {/* Secondary "Not Now" button */}
                    <motion.button
                      whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.99 }}
                      onClick={handleClose}
                      className="w-full py-3 px-6 rounded-xl font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all group"
                    >
                      <span className="inline-block group-hover:underline underline-offset-2">
                        Not Now
                      </span>
                    </motion.button>

                    {/* Don't show again link */}
                    <button
                      onClick={handleDontShowAgain}
                      className="w-full text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      Don&apos;t show again this session
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized "Need Help?" Widget */}
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
              boxShadow: `0 4px 20px ${provider.color}40`,
              cursor: dontShowSession ? 'default' : 'pointer',
            }}
            aria-label={dontShowSession ? 'Call for help' : 'Open help popup'}
          >
            {dontShowSession ? (
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Need Help? Call Us</span>
              </a>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Need Help?</span>
              </>
            )}
            
            {/* Pulse animation */}
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    `0 0 0 0 ${provider.color}40`,
                    `0 0 0 10px ${provider.color}00`,
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
