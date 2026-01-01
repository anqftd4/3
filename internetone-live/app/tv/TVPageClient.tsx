'use client';

import { motion } from 'framer-motion';
import { Phone, Tv, Play, Radio, Film, Gamepad2, Monitor } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import PageWrapper from '@/components/PageWrapper';

const tvFeatures = [
  {
    icon: Radio,
    title: 'Local Channels',
    description: 'Stay connected with local news, weather, and programming from your community.',
  },
  {
    icon: Gamepad2,
    title: 'Sports Networks',
    description: 'Catch live games, highlights, and sports coverage on ESPN, Fox Sports, and regional networks.',
  },
  {
    icon: Film,
    title: 'Premium Channels',
    description: 'Access HBO, Showtime, Starz, and other premium networks for movies and original series.',
  },
  {
    icon: Play,
    title: 'On-Demand Content',
    description: 'Watch shows and movies when you want with extensive on-demand libraries.',
  },
  {
    icon: Monitor,
    title: 'DVR Service',
    description: 'Record your favorite shows and watch them later with DVR capabilities.',
  },
  {
    icon: Tv,
    title: 'Streaming Apps',
    description: 'Many providers include apps to watch TV on phones, tablets, and smart TVs.',
  },
];

export default function TVPageClient() {
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
              <span className="gradient-text">TV Packages</span> for Every Viewer
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From basic cable to premium entertainment packages, find the TV service 
              that fits your viewing preferences and budget.
            </p>
          </motion.div>

          {/* Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <DisclosureBanner />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 text-center">
              What TV Packages Typically Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tvFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Providers Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              TV Services by Provider
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  provider: 'Verizon',
                  service: 'Fios TV',
                  description: 'Fiber-based TV service with hundreds of channels, on-demand content, and whole-home DVR options.',
                  color: siteConfig.providers.find(p => p.id === 'verizon')?.color,
                },
                {
                  provider: 'Spectrum',
                  service: 'Spectrum TV',
                  description: 'Cable TV with flexible packages, no contracts, and access to the Spectrum TV app for streaming.',
                  color: siteConfig.providers.find(p => p.id === 'spectrum')?.color,
                },
                {
                  provider: 'AT&T',
                  service: 'DIRECTV',
                  description: 'Satellite and streaming TV options with extensive channel lineups including exclusive sports coverage.',
                  color: siteConfig.providers.find(p => p.id === 'att')?.color,
                },
                {
                  provider: 'Optimum',
                  service: 'Optimum TV',
                  description: 'Cable TV packages with local and national channels, plus Optimum Stream for cord-cutters.',
                  color: siteConfig.providers.find(p => p.id === 'optimum')?.color,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.provider}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                  style={{ borderLeft: `4px solid ${item.color}` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.provider[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {item.provider} - {item.service}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {item.description}
                      </p>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="inline-flex items-center gap-2 mt-3 text-sm font-medium"
                        style={{ color: item.color }}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Learn More</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Questions to Ask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-slate-50 dark:bg-slate-800/50 mb-16"
          >
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Questions to Ask When Choosing a TV Package
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'What channels are included in each package tier?',
                'Is there a contract requirement?',
                'What equipment is needed and what does it cost?',
                'Can I watch on multiple TVs?',
                'Is there a streaming app for mobile devices?',
                'What are the DVR storage limits?',
                'Are regional sports networks included?',
                'What happens to the price after the promo period?',
              ].map((question, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                  {question}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-purple-500 to-pink-600 text-white text-center py-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Find the Right TV Package
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our specialists can help you compare TV packages and find the best option for your entertainment needs.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-colors"
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
