'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Clock, Phone, Heart, Scale, CheckCircle2, ArrowRight, Star, MessageSquare, Zap } from 'lucide-react';
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

const reasons = [
  {
    icon: Shield,
    title: 'Truly Independent',
    description: 'We are not owned by or affiliated with any internet or TV provider. Our recommendations are based solely on what may work best for your needs.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Scale,
    title: 'Unbiased Comparisons',
    description: 'We present options from multiple providers side by side, giving you the information you need to make an informed decision.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Expert Specialists',
    description: 'Our team understands the nuances of different providers, plans, and technologies. We can answer your questions and clarify confusing details.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Save Your Time',
    description: 'Instead of calling multiple providers separately, get information about several options in one conversation with our specialists.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Heart,
    title: 'No Pressure',
    description: 'We provide information and guidance without aggressive sales tactics. Take your time to consider your options.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: MessageSquare,
    title: 'Personal Service',
    description: 'Speak with a real person who can address your specific situation, not a chatbot or automated system.',
    color: 'from-indigo-500 to-blue-500',
  },
];

const process = [
  {
    step: 1,
    title: 'Tell Us Your Needs',
    description: 'Share your location, household size, usage habits, and budget preferences with our specialist.',
  },
  {
    step: 2,
    title: 'Get Personalized Options',
    description: 'We identify which providers serve your area and present plans that may match your requirements.',
  },
  {
    step: 3,
    title: 'Ask Questions',
    description: 'Our specialists can explain differences between providers, technologies, and package options.',
  },
  {
    step: 4,
    title: 'Make Your Decision',
    description: 'When you are ready, we can help connect you with your chosen provider to complete setup.',
  },
];

export default function WhyUsPageClient() {
  return (
    <main className="min-h-screen">
      <DisclosureBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
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
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-blue-200">Your Trusted Comparison Service</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                InternetOne.live
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We believe finding the right internet and TV service should be simple and transparent. 
              Our independent comparison service puts your needs first.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-call inline-flex items-center justify-center gap-2 text-lg group"
              >
                <Phone className="w-5 h-5" />
                <span>Speak With a Specialist</span>
              </a>
              <Link
                href="/compare"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Compare Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Reasons Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are committed to providing an honest, helpful comparison experience.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass p-6 group"
              >
                <motion.div
                  className={`w-14 h-14 mb-5 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <reason.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              How We Help You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our straightforward process makes comparing and connecting with providers easy.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />
              
              <div className="space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg relative z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <div className="flex-1 card-glass p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Promise */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Our Commitment to You
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                When you call InternetOne.live, here is what you can expect.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Honest information about available plans and providers',
                'Clear explanations of pricing, including potential fees',
                'No hidden agendas or misleading comparisons',
                'Respect for your time and decision-making process',
                'Answers to your questions about different technologies',
                'Help understanding contract terms and conditions',
                'Guidance on choosing between similar options',
                'Assistance with next steps when you are ready',
              ].map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300">{promise}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Transparency Note */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              A Note on How We Operate
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              InternetOne.live may receive compensation when you connect with a provider through our service. 
              This is how we can offer our comparison and assistance at no cost to you. However, this does not 
              influence our recommendations—we present options based on what may fit your stated needs, 
              regardless of compensation arrangements.
            </p>
            <Link
              href="/disclosures"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              Read our full disclosures
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Find Your Perfect Plan?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our specialists are standing by to help you navigate your options 
              and find the right internet and TV services for your home.
            </p>
            <motion.a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="btn-call inline-flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.contact.phone}
            </motion.a>
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
