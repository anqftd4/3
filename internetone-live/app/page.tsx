'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  ArrowRight, 
  Wifi, 
  Tv, 
  Package,
  CheckCircle,
  Star,
  Shield,
  Clock
} from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import ZipSearchModule from '@/components/ZipSearchModule';
import TrustSection from '@/components/TrustSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30 dark:opacity-20" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-cyan-500/10"
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-brand-500/20 blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"
        />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Independent Comparison Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6"
            >
              Find Your Perfect{' '}
              <span className="gradient-text">Internet & TV</span>{' '}
              Package
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Compare plans from leading providers like Verizon, Spectrum, AT&T, and Optimum. 
              Check availability in your area and connect with specialists for personalized guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-call text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteConfig.contact.phone}</span>
              </motion.a>
              <Link href="/compare">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  Compare Plans
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>

            {/* ZIP Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ZipSearchModule variant="hero" />
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500 dark:text-slate-400"
            >
              <Clock className="w-4 h-4" />
              <span>{siteConfig.contact.hours}</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-slate-50 dark:fill-slate-900">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              What We Help You Compare
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From basic internet to full entertainment bundles, find the right package for your household.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Internet Plans',
                description: 'Compare speeds from 100 Mbps to 1 Gig+. Find the right bandwidth for streaming, gaming, and working from home.',
                href: '/compare',
                color: 'brand',
              },
              {
                icon: Tv,
                title: 'TV Packages',
                description: 'Explore cable TV options with local channels, sports, premium networks, and on-demand content.',
                href: '/tv',
                color: 'purple',
              },
              {
                icon: Package,
                title: 'Bundles',
                description: 'Save with internet + TV bundles. Get everything you need in one convenient package.',
                href: '/bundles',
                color: 'cyan',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card card-hover group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-500`} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Providers We Compare
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We help you compare plans from leading internet and TV providers. Click to learn more about each.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteConfig.providers.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/providers/${provider.slug}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card card-hover text-center py-8"
                    style={{ borderTop: `4px solid ${provider.color}` }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl"
                      style={{ backgroundColor: provider.color }}
                    >
                      {provider.name[0]}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {provider.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      View Plans
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8"
          >
            {siteConfig.disclaimers.independence}
          </motion.p>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 gradient-mesh" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Find Your Perfect Plan?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our specialists are standing by to help you compare options, check availability, and answer your questions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>{siteConfig.contact.phone}</span>
            </motion.a>
            <p className="text-white/60 text-sm mt-4">
              {siteConfig.contact.hours}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="py-8 bg-slate-100 dark:bg-slate-800">
        <div className="container">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{siteConfig.disclaimers.independence}</span>
            </p>
            <p>{siteConfig.disclaimers.trademarks}</p>
            <p>{siteConfig.disclaimers.pricing}</p>
          </div>
        </div>
      </section>
    </>
  );
}
