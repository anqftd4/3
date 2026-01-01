'use client';

import { motion } from 'framer-motion';
import { MapPin, BarChart3, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import Reveal, { RevealGroup, RevealItem } from './Reveal';

const steps = [
  {
    icon: MapPin,
    number: '1',
    title: 'Enter Your ZIP',
    description: 'Tell us your location to see what providers and plans are available in your area.',
  },
  {
    icon: BarChart3,
    number: '2',
    title: 'Compare Options',
    description: 'Browse and compare internet speeds, TV packages, and bundle deals side by side.',
  },
  {
    icon: Phone,
    number: '3',
    title: 'Call to Confirm',
    description: 'Speak with a specialist to verify availability and pricing at your exact address.',
  },
];

interface HowItWorksProps {
  variant?: 'default' | 'compact';
  showCTA?: boolean;
}

export default function HowItWorks({ variant = 'default', showCTA = true }: HowItWorksProps) {
  const isCompact = variant === 'compact';

  return (
    <section className={`${isCompact ? 'py-12' : 'py-16 md:py-24'} bg-slate-50 dark:bg-slate-900/50`}>
      <div className="container">
        <Reveal className="text-center mb-12">
          <h2 className={`${isCompact ? 'text-2xl' : 'text-3xl md:text-4xl'} font-display font-bold mb-4`}>
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Finding the right internet and TV package is easy with our simple 3-step process.
          </p>
        </Reveal>

        <RevealGroup stagger={0.15} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <RevealItem key={step.number}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-brand-500/50 to-brand-500/10" />
                )}

                {/* Step number badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg"
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-8 h-8 text-brand-500" />
                </div>

                <h3 className="text-xl font-display font-bold text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-center text-sm">
                  {step.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        {showCTA && (
          <Reveal delay={0.4} className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 btn-call"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {siteConfig.contact.phone}</span>
            </motion.a>
            <p className="mt-3 text-sm text-foreground/60">
              {siteConfig.contact.hours} • {siteConfig.disclaimers.affiliate}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
