'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Phone, MessageSquare, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import FAQAccordion from '@/components/FAQAccordion';

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

const faqCategories = [
  {
    name: 'About Our Service',
    faqs: [
      {
        question: 'What is InternetOne.live?',
        answer: 'InternetOne.live is an independent comparison and connection service that helps consumers explore and compare internet and TV options from various providers. We are not a provider ourselves—we help you understand your options and connect with providers when you are ready.',
      },
      {
        question: 'Is InternetOne.live affiliated with any internet or TV provider?',
        answer: 'No, InternetOne.live is completely independent and is not affiliated with, endorsed by, or sponsored by any internet or TV provider including Verizon, Spectrum, AT&T, or Optimum. We present information from multiple providers to help you make an informed decision.',
      },
      {
        question: 'How does InternetOne.live make money?',
        answer: 'We may receive compensation when you connect with a provider through our service. This allows us to offer our comparison assistance at no cost to you. Our recommendations are based on matching your needs with available options, regardless of compensation arrangements.',
      },
      {
        question: 'Is there a fee to use InternetOne.live?',
        answer: 'No, our comparison and consultation service is free for consumers. You only pay for the services you ultimately choose to purchase from the provider directly.',
      },
    ],
  },
  {
    name: 'Availability & Pricing',
    faqs: [
      {
        question: 'How do I know if a provider is available at my address?',
        answer: 'Internet and TV availability varies by location. When you call our specialists at (888) 524-0250, we can help check which providers service your specific address based on the information we have available. You can also verify directly with providers.',
      },
      {
        question: 'Why do prices vary by location?',
        answer: 'Providers set different prices based on many factors including local competition, infrastructure costs, regional promotions, and franchise agreements. That is why it is important to verify pricing for your specific address rather than relying on advertised rates.',
      },
      {
        question: 'Are the prices on your website guaranteed?',
        answer: 'No, the prices shown on our website are examples and may not reflect current offers in your area. Actual pricing depends on your location, promotional periods, equipment selections, and other factors. Always confirm pricing directly before making a commitment.',
      },
      {
        question: 'Do promotional prices last forever?',
        answer: 'No, promotional prices typically last for a specified period (often 12-24 months) after which the price may increase to the regular rate. We recommend asking about both the promotional price and the regular rate when speaking with providers.',
      },
    ],
  },
  {
    name: 'Internet Service',
    faqs: [
      {
        question: 'What internet speed do I need?',
        answer: 'The speed you need depends on your household usage. For basic browsing and email, 25-50 Mbps may suffice. For streaming HD video on multiple devices, consider 100-200 Mbps. For heavy streaming, gaming, and working from home, 300+ Mbps may be appropriate. Our specialists can help you assess your needs.',
      },
      {
        question: 'What is the difference between cable, fiber, and DSL internet?',
        answer: 'Fiber optic internet uses light signals through glass fibers and typically offers the fastest, most reliable speeds. Cable internet uses coaxial cables (same as cable TV) and offers widely available high speeds. DSL uses telephone lines and is broadly available but typically slower. Each technology has different availability depending on your location.',
      },
      {
        question: 'What are data caps?',
        answer: 'Data caps limit how much data you can use each month. If you exceed the cap, you may incur additional charges or have your speed reduced. Many providers offer plans without data caps, especially on fiber connections. Ask about data policies when comparing plans.',
      },
      {
        question: 'Do I need to rent equipment from the provider?',
        answer: 'Most providers offer equipment (modem, router) for a monthly rental fee. Some include equipment at no extra cost. In many cases, you may be able to purchase compatible equipment instead of renting, which can save money over time. Ask about equipment options and compatibility.',
      },
    ],
  },
  {
    name: 'TV Service',
    faqs: [
      {
        question: 'What is the difference between cable TV and streaming TV?',
        answer: 'Traditional cable TV delivers channels through a cable connection and typically requires a cable box. Streaming TV delivers content over the internet and can be watched on smart TVs, streaming devices, or mobile apps. Many providers now offer both options.',
      },
      {
        question: 'Can I customize my channel lineup?',
        answer: 'Options vary by provider. Some offer customizable packages where you can add specific channel groups. Others have fixed packages at different tiers. Ask about available customization when speaking with providers.',
      },
      {
        question: 'What about DVR service?',
        answer: 'Most TV providers offer DVR (Digital Video Recording) capabilities to record and store shows. Some include DVR with their packages while others charge an additional monthly fee. Cloud DVR is also available from many providers, storing recordings in the cloud rather than on a physical device.',
      },
    ],
  },
  {
    name: 'Installation & Setup',
    faqs: [
      {
        question: 'Is professional installation required?',
        answer: 'It depends on the provider and your situation. Many providers offer both professional installation and self-installation options. Fiber internet often requires professional installation for the initial connection. Ask about installation options and any associated costs.',
      },
      {
        question: 'How long does installation take?',
        answer: 'Standard installations typically take 1-3 hours depending on the services and complexity. Fiber installation may take longer if running new lines is required. Scheduling can range from a few days to a couple of weeks depending on availability in your area.',
      },
      {
        question: 'Is there an installation fee?',
        answer: 'Installation fees vary by provider and are sometimes waived during promotional periods. Professional installation may cost $50-$100+ while self-installation is often free. Ask about current installation offers when comparing plans.',
      },
    ],
  },
  {
    name: 'Contracts & Billing',
    faqs: [
      {
        question: 'Do I need to sign a contract?',
        answer: 'Contract requirements vary by provider and plan. Some providers offer month-to-month service while others may require 1-2 year agreements for certain promotional rates. Plans with contracts may have early termination fees if you cancel before the term ends. Always ask about contract terms before signing up.',
      },
      {
        question: 'What fees should I expect on my bill?',
        answer: 'Beyond the monthly service fee, you may see charges for equipment rental, regional sports fees, broadcast TV fees, taxes, and other regulatory fees. These can add $10-$30+ to your monthly bill. Ask for a complete breakdown of expected charges when comparing options.',
      },
      {
        question: 'Can I cancel service at any time?',
        answer: 'If you have month-to-month service, you can typically cancel anytime without penalty. If you have a contract, early cancellation may result in termination fees. Understand your contract terms before signing up so there are no surprises.',
      },
    ],
  },
];

export default function FAQPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

  return (
    <main className="min-h-screen">
      <DisclosureBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
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
              <HelpCircle className="w-4 h-4 text-indigo-300" />
              <span className="text-sm text-indigo-200">Get Answers</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Questions
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Find answers to common questions about internet and TV services, 
              our comparison process, and how we can help you.
            </motion.p>
            
            {/* Search Box */}
            <motion.div
              variants={itemVariants}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Categories Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {faqCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We could not find any questions matching your search.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn-primary"
                >
                  Clear Search
                </button>
              </motion.div>
            ) : (
              filteredCategories
                .filter(cat => activeCategory === null || cat.name === activeCategory)
                .map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                      {category.name}
                    </h2>
                    <FAQAccordion items={category.faqs} />
                  </motion.div>
                ))
            )}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <MessageSquare className="w-14 h-14 mx-auto mb-6 text-indigo-500" />
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our specialists are happy to answer any questions you have about internet 
              and TV options in your area. Give us a call—we are here to help.
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
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
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
