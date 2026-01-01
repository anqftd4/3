'use client';

import { motion } from 'framer-motion';
import { Package, Tv, Wifi, DollarSign, Phone, Check, ArrowRight, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import ZipSearchModule from '@/components/ZipSearchModule';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const bundleBenefits = [
  {
    icon: DollarSign,
    title: 'Potential Savings',
    description: 'Bundling internet and TV often costs less than purchasing services separately.',
  },
  {
    icon: Package,
    title: 'One Bill Convenience',
    description: 'Simplify your life with a single monthly statement for all your services.',
  },
  {
    icon: Zap,
    title: 'Streamlined Setup',
    description: 'Get all your services installed and activated in one appointment.',
  },
  {
    icon: Shield,
    title: 'Better Support',
    description: 'One provider means one point of contact for any service questions.',
  },
];

export default function BundlesPageClient() {
  return (
    <main className="min-h-screen">
      <DisclosureBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(120, 80, 220, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(80, 120, 220, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(100, 80, 200, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(120, 80, 220, 0.5) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Package className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200">Bundle & Save</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Internet + TV{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Bundles
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Combine your internet and television services into one convenient package. 
              Explore bundle options from top providers and speak with our specialists to 
              find the right combination for your household.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-call inline-flex items-center gap-2 text-lg group"
              >
                <Phone className="w-5 h-5" />
                <span>Call to Compare Bundles</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* ZIP Search Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Check Bundle Availability
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Enter your ZIP code to see which bundle options may be available at your address.
            </p>
          </motion.div>
          <ZipSearchModule variant="card" />
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Why Consider a Bundle?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Combining your internet and TV services can offer several advantages for your household.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bundleBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glass p-6 text-center group"
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors"
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Bundle Plans Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Sample Bundle Options
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Below are example bundle configurations. Actual availability, channels, speeds, and pricing 
              depend on your location. Call to confirm what&apos;s available at your address.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {siteConfig.bundlePlans.map((bundle) => {
              const provider = siteConfig.providers.find(p => p.slug === bundle.providerSlug);
              return (
                <motion.div
                  key={bundle.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card-glass overflow-hidden"
                >
                  <div 
                    className="h-2"
                    style={{ backgroundColor: provider?.color }}
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                          style={{ backgroundColor: provider?.color }}
                        >
                          {bundle.provider}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {bundle.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${bundle.price}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {bundle.priceNote}*
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4 py-4 border-y border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {bundle.internetSpeed} Mbps
                          </p>
                          <p className="text-xs text-gray-500">Internet</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tv className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {bundle.tvChannels}
                          </p>
                          <p className="text-xs text-gray-500">Channels</p>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Check Availability
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            * Prices shown are examples and may not reflect current offers. Actual pricing varies 
            by location, promotional periods, and selected equipment. Call {siteConfig.contact.phone} to 
            confirm current pricing and availability at your address.
          </motion.p>
        </div>
      </section>
      
      {/* Questions Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
              Questions to Ask About Bundles
            </h2>
            
            <div className="space-y-4">
              {[
                'What is the total monthly cost including all fees and equipment charges?',
                'How long is the promotional pricing valid, and what is the regular rate?',
                'Are there any contract requirements or early termination fees?',
                'What TV channels are included, and can I customize my channel lineup?',
                'What internet speeds are included, and are there data caps?',
                'Is professional installation included or is there an additional charge?',
                'What equipment is provided, and is there a monthly rental fee?',
                'Can I add premium channels or faster internet speeds later?',
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">{question}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Explore Bundle Options?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our specialists can help you compare bundles from multiple providers and find 
              the combination that fits your entertainment needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-call inline-flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </motion.a>
              <Link
                href="/compare"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Compare All Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              {siteConfig.contact.hours} • {siteConfig.contact.email}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-4xl mx-auto">
            {siteConfig.disclaimers.full}
          </p>
        </div>
      </section>
    </main>
  );
}
