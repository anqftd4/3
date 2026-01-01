'use client';

import { motion } from 'framer-motion';
import { Phone, Search } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import ComparisonTable from '@/components/ComparisonTable';
import ZipSearchModule from '@/components/ZipSearchModule';
import DisclosureBanner from '@/components/DisclosureBanner';
import PageWrapper from '@/components/PageWrapper';

export default function ComparePageClient() {
  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        {/* Hero */}
        <section className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Compare <span className="gradient-text">Internet Plans</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find the perfect internet plan for your home. Compare speeds, prices, and features 
              from leading providers all in one place.
            </p>
          </motion.div>

          {/* Disclosure Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <DisclosureBanner />
          </motion.div>

          {/* ZIP Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <ZipSearchModule variant="card" />
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                All Available Plans
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Use the filters and sorting options to find plans that match your needs. 
                Call to confirm current pricing in your area.
              </p>
            </div>
            <ComparisonTable />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-brand-500 to-purple-600 text-white text-center py-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our specialists can help you navigate your options and find the best plan for your specific needs and location.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call {siteConfig.contact.phone}</span>
            </motion.a>
            <p className="text-white/60 text-sm mt-4">
              {siteConfig.contact.hours}
            </p>
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
}
