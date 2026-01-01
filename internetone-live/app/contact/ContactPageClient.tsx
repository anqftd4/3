'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
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

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with a specialist',
    value: siteConfig.contact.phone,
    action: `tel:${siteConfig.contact.phoneRaw}`,
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a message anytime',
    value: siteConfig.contact.email,
    action: `mailto:${siteConfig.contact.email}`,
    primary: false,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'When we are available',
    value: siteConfig.contact.hours,
    action: null,
    primary: false,
  },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto link
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <DisclosureBanner />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.4) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
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
              <MessageCircle className="w-4 h-4 text-teal-300" />
              <span className="text-sm text-teal-200">We&apos;re Here to Help</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Touch
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Have questions about internet or TV services? Our team is ready to help you 
              find the right solution for your home.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Methods */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`card-glass p-6 text-center ${method.primary ? 'ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-gray-950' : ''}`}
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    method.primary
                      ? 'bg-gradient-to-br from-teal-500 to-cyan-500'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className={`w-7 h-7 ${method.primary ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {method.description}
                </p>
                {method.action ? (
                  <a
                    href={method.action}
                    className={`font-semibold ${
                      method.primary
                        ? 'text-teal-600 dark:text-teal-400 hover:underline'
                        : 'text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {method.value}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Fill out the form and we will get back to you as soon as possible. 
                  For immediate assistance, please call us directly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    <span>No obligation inquiry</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    <span>Your information is secure</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    <strong>Prefer to call?</strong><br />
                    Speak with a specialist now at{' '}
                    <a 
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="font-semibold hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </motion.div>
              
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-glass p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    >
                      <CheckCircle className="w-16 h-16 mx-auto mb-4 text-teal-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Email Client Opened!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Your email client should have opened with your message. 
                      If it did not, you can email us directly at{' '}
                      <a 
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-glass p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-primary"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-primary"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-primary"
                        >
                          <option value="">Select a topic</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Plan Comparison">Plan Comparison Help</option>
                          <option value="Availability">Service Availability</option>
                          <option value="Pricing">Pricing Questions</option>
                          <option value="Technical">Technical Questions</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-primary resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          I consent to InternetOne.live using the information provided to respond to my inquiry. 
                          I understand this information will be used in accordance with the{' '}
                          <a href="/privacy-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
                            Privacy Policy
                          </a>.
                        </span>
                      </label>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Phone className="w-14 h-14 mx-auto mb-6 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Talk?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The fastest way to get help is to speak with one of our specialists directly. 
              We are available during business hours and ready to answer your questions.
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
