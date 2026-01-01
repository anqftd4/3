'use client';

import { motion } from 'framer-motion';
import { Phone, Tag, Percent, Gift, Clock, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import ZipSearchModule from '@/components/ZipSearchModule';
import DisclosureBanner from '@/components/DisclosureBanner';
import PageWrapper from '@/components/PageWrapper';

const promoPlans = siteConfig.samplePlans.filter(plan => plan.promo);

export default function DealsPageClient() {
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
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6"
            >
              <Tag className="w-4 h-4" />
              Limited Time Offers May Be Available
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Current <span className="gradient-text">Deals & Promotions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover promotional pricing and special offers that may be available in your area. 
              Enter your ZIP code to check availability.
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

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Percent,
                title: 'Promotional Pricing',
                description: 'Some providers offer introductory rates for new customers. Ask about current promotions.',
              },
              {
                icon: Gift,
                title: 'Bundle Savings',
                description: 'Combining internet and TV may offer additional savings. Call to explore options.',
              },
              {
                icon: Clock,
                title: 'Time-Sensitive',
                description: 'Promotional offers change frequently. Call today to confirm current availability.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Promo Plans */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Plans with Promotional Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {promoPlans.map((plan, index) => {
                const provider = siteConfig.providers.find(p => p.id === plan.providerSlug);
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="card card-hover relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg"
                      style={{ backgroundColor: provider?.color }}
                    >
                      PROMO
                    </div>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: provider?.color }}
                      >
                        {plan.provider[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {plan.provider} {plan.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Up to {plan.speed} Mbps
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">
                          ${plan.price}
                        </span>
                        <span className="text-slate-500">/mo*</span>
                        <p className="text-xs text-slate-500">{plan.priceNote}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="btn-call w-full justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call for Details</span>
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">
                  Important Information About Deals
                </h3>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Promotional pricing shown is for illustration purposes. Actual offers vary by location.</li>
                  <li>• Deals may require credit qualification, autopay enrollment, or contract commitment.</li>
                  <li>• Prices typically increase after promotional period ends.</li>
                  <li>• Equipment fees, taxes, and other charges may apply.</li>
                  <li>• Always confirm current pricing and terms by calling {siteConfig.contact.phone}.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-green-500 to-emerald-600 text-white text-center py-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Don't Miss Current Promotions
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Promotional offers change frequently. Call now to find out what deals are available at your address.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-colors"
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
