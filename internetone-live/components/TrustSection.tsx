'use client';

import { motion } from 'framer-motion';
import { Shield, Phone, Clock, ThumbsUp, Users, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const features = [
  {
    icon: Shield,
    title: 'Independent Service',
    description: 'We are not affiliated with any provider. Get unbiased comparisons and honest recommendations.',
  },
  {
    icon: Phone,
    title: 'Expert Support',
    description: 'Our specialists help you navigate options, check availability, and find the best fit for your needs.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Compare multiple providers in one place instead of visiting each provider website separately.',
  },
  {
    icon: ThumbsUp,
    title: 'No Pressure',
    description: 'We provide information and guidance. You make the final decision on what works best for you.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Talk to real people who understand internet and TV options and can answer your questions.',
  },
  {
    icon: Zap,
    title: 'Quick Answers',
    description: 'Get pricing and availability information fast. Our team is ready to help during business hours.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Why Choose InternetOne.live?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are an independent comparison service dedicated to helping you find the right internet and TV solution for your home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="btn-call inline-flex"
          >
            <Phone className="w-5 h-5" />
            <span>Call {siteConfig.contact.phone}</span>
          </motion.a>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {siteConfig.contact.hours}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
