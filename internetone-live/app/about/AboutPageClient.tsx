'use client';

import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Phone, ArrowRight, Shield, Lightbulb, Handshake } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';

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

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description: 'We are upfront about who we are, how we operate, and how we make money. No hidden agendas.',
  },
  {
    icon: Lightbulb,
    title: 'Helpfulness',
    description: 'We aim to provide genuinely useful information that helps you make informed decisions.',
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'We respect your time and your decision-making process. No high-pressure tactics.',
  },
  {
    icon: Handshake,
    title: 'Independence',
    description: 'We are not owned by any provider, allowing us to present options without bias.',
  },
];

export default function AboutPageClient() {
  return (
    <main className="min-h-screen">
      <DisclosureBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 100, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{ bottom: '10%', right: '10%' }}
            />
          </div>
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
              <Users className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-200">Our Story</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                InternetOne.live
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We are an independent comparison service dedicated to helping consumers 
              navigate the often confusing world of internet and TV services.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    InternetOne.live is an independent comparison and connection service. We help 
                    consumers like you explore and compare internet and TV options from various providers.
                  </p>
                  <p>
                    We are not a provider ourselves. Instead, we act as a resource to help you 
                    understand what services may be available in your area, compare different plans 
                    and features, and connect with providers when you are ready.
                  </p>
                  <p>
                    Our team of specialists is available to answer questions, clarify confusing 
                    details, and guide you through the process of selecting the right services 
                    for your household.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Target className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="card-glass p-8"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                To simplify the process of finding and comparing internet and TV services by 
                providing clear, unbiased information and personalized guidance—helping consumers 
                make confident decisions about their home connectivity.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="card-glass p-8"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A world where every consumer has access to transparent, easy-to-understand 
                information about their internet and TV options—empowering them to choose 
                the services that truly fit their needs and budget.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do at InternetOne.live.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass p-6 text-center"
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* How We Operate */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
              How We Operate
            </h2>
            
            <div className="space-y-6">
              <div className="card-glass p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Independence
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  InternetOne.live is not owned by, affiliated with, or sponsored by any internet 
                  or TV provider. This independence allows us to present options from multiple 
                  providers without favoring any particular company.
                </p>
              </div>
              
              <div className="card-glass p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Our Business Model
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We may receive compensation when you connect with a provider through our service. 
                  This is how we can offer our comparison and assistance at no cost to you. However, 
                  this compensation does not influence our recommendations—we present options based 
                  on your stated needs.
                </p>
              </div>
              
              <div className="card-glass p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Information Accuracy
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive to provide accurate and up-to-date information, but pricing, availability, 
                  and plan details can change at any time. We always recommend verifying specific 
                  details with providers before making a final decision.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/disclosures"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                Read our full disclosures
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you explore your internet and TV options. 
              Our specialists are here to guide you every step of the way.
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
                Compare Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              {siteConfig.contact.hours}
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
