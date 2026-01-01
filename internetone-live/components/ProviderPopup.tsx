'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, X, MessageCircle } from 'lucide-react';
import { siteConfig, Provider } from '@/lib/siteConfig';

interface ProviderPopupProps {
  provider: Provider;
}

export default function ProviderPopup({ provider }: ProviderPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);
  const [dismissCount, setDismissCount] = useState(0);
  const [dontShowSession, setDontShowSession] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

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
      // First visit - show modal after short delay
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, [provider.id]);

  // Reappear logic after first dismissal
  useEffect(() => {
    if (!isOpen && !dontShowSession && dismissCount === 1) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, dontShowSession, dismissCount]);

  const handleClose = useCallback(() => {
    const newCount = dismissCount + 1;
    setDismissCount(newCount);
    sessionStorage.setItem(`popup-dismissed-${provider.id}`, newCount.toString());
    setIsOpen(false);
    
    if (newCount >= 2) {
      setShowMinimized(true);
    }
  }, [dismissCount, provider.id]);

  // Focus trapping
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      
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
      setIsOpen(true);
      setShowMinimized(false);
    }
  }, [dontShowSession]);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const popupVariants = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  } : {
    hidden: { 
      opacity: 0, 
      scale: 0.85,
      y: 40,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 30,
      transition: { duration: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            {/* Backdrop with noise texture */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            
            <motion.div
              ref={modalRef}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden outline-none"
              style={{
                boxShadow: `0 0 80px ${provider.color}50, 0 0 160px ${provider.color}25, 0 25px 50px -12px rgba(0, 0, 0, 0.4)`,
              }}
            >
              {/* Animated glow border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-50"
                animate={{
                  boxShadow: [
                    `inset 0 0 20px ${provider.color}30`,
                    `inset 0 0 40px ${provider.color}50`,
                    `inset 0 0 20px ${provider.color}30`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${provider.color}, transparent 60%)`,
                }}
              />

              {/* Close button */}
              <motion.button
                variants={childVariants}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Header */}
              <motion.div
                variants={childVariants}
                className="relative p-6 pb-4 text-center"
                style={{
                  background: `linear-gradient(135deg, ${provider.color}12, transparent)`,
                }}
              >
                {/* Pulsing phone icon with glow ring */}
                <motion.div
                  animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                  }}
                >
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={prefersReducedMotion ? {} : {
                      boxShadow: [
                        `0 0 0 0 ${provider.color}60`,
                        `0 0 0 15px ${provider.color}00`,
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                  <Phone className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h2
                  variants={childVariants}
                  id="popup-title"
                  className="text-2xl font-display font-bold text-slate-900 dark:text-white"
                >
                  Connect with Your {provider.name} Specialist!
                </motion.h2>
              </motion.div>

              {/* Body */}
              <div className="relative p-6 pt-2">
                <motion.p 
                  variants={childVariants}
                  className="text-slate-600 dark:text-slate-300 text-center mb-6"
                >
                  Get expert assistance with your {provider.name} internet and TV options. Our specialists are standing by to help you compare plans and check availability at your address.
                </motion.p>

                {/* Primary CTA - Call Now */}
                <motion.a
                  variants={childVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${provider.color}, ${provider.colorDark})`,
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                  
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 8px 30px ${provider.color}60`,
                    }}
                  />
                  
                  <Phone className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Call Now: {siteConfig.contact.phone}</span>
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

                {/* Compliance disclaimer */}
                <motion.p 
                  variants={childVariants}
                  className="mt-4 text-xs text-slate-400 dark:text-slate-500 text-center"
                >
                  {siteConfig.name} is an independent comparison service (not {provider.name}).
                </motion.p>

                {/* Don't show again */}
                <motion.div variants={childVariants} className="mt-4 text-center">
                  <button
                    onClick={handleDontShowAgain}
                    className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline underline-offset-2 transition-colors"
                  >
                    Don&apos;t show again this session
                  </button>
                </motion.div>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  `0 0 0 0 ${provider.color}40`,
                  `0 0 0 8px ${provider.color}00`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
