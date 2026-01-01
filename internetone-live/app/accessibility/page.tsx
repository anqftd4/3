'use client';

import { motion } from 'framer-motion';
import { Phone, Accessibility, Eye, Keyboard, Monitor, Volume2, MessageSquare, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import PageWrapper from '@/components/PageWrapper';

export default function AccessibilityPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <PageWrapper>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Accessibility className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl text-foreground/70">
                We are committed to ensuring our website is accessible to everyone.
              </p>
              <p className="text-sm text-foreground/60 mt-4">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  Our Commitment
                </h2>
                <p className="text-foreground/70 mb-4">
                  {siteConfig.name} is committed to ensuring digital accessibility for people with 
                  disabilities. We are continually improving the user experience for everyone and applying 
                  the relevant accessibility standards.
                </p>
                <p className="text-foreground/70 mb-0">
                  We believe that every visitor should be able to easily navigate, understand, and interact 
                  with our website, regardless of their abilities or the assistive technologies they use.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Accessibility Features
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We&apos;ve implemented the following features to make our website more accessible:
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Keyboard className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Keyboard Navigation</h3>
                <p className="text-foreground/70">
                  Our website can be fully navigated using only a keyboard. Use Tab to move between 
                  interactive elements, Enter to activate links and buttons, and Escape to close modals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Screen Reader Support</h3>
                <p className="text-foreground/70">
                  We use semantic HTML, ARIA labels, and proper heading structure to ensure compatibility 
                  with screen readers like JAWS, NVDA, VoiceOver, and TalkBack.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Visual Design</h3>
                <p className="text-foreground/70">
                  We maintain sufficient color contrast ratios, use readable font sizes, and avoid relying 
                  solely on color to convey information. Our dark/light theme toggle helps users customize 
                  their viewing experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reduced Motion</h3>
                <p className="text-foreground/70">
                  We respect the &ldquo;prefers-reduced-motion&rdquo; setting on your device. If you have this 
                  enabled, animations and transitions will be minimized or disabled throughout our site.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-6 text-center">
                  Conformance Standards
                </h2>
                <div className="card">
                  <p className="text-foreground/70 mb-4">
                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
                    These guidelines explain how to make web content more accessible for people with 
                    disabilities, including:
                  </p>
                  <ul className="space-y-2 text-foreground/70 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Visual impairments (blindness, low vision, color blindness)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Hearing impairments (deafness, hard of hearing)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Motor impairments (limited fine motor control)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Cognitive impairments (learning disabilities, attention disorders)
                    </li>
                  </ul>
                  <p className="text-foreground/70 mb-0">
                    While we strive for WCAG 2.1 Level AA compliance, please note that we are continuously 
                    working to improve accessibility and some areas may still be under development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tips for Users */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-6 text-center">
                  Tips for Better Accessibility
                </h2>
                <div className="card">
                  <p className="text-foreground/70 mb-4">
                    Here are some tips to improve your experience on our website:
                  </p>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary font-bold text-sm">1</span>
                      <span><strong>Adjust text size:</strong> Use your browser&apos;s zoom feature (Ctrl/Cmd + Plus/Minus) to increase or decrease text size.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary font-bold text-sm">2</span>
                      <span><strong>Use our theme toggle:</strong> Switch between light and dark themes using the sun/moon icon in the navigation bar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary font-bold text-sm">3</span>
                      <span><strong>Skip to main content:</strong> Press Tab at the top of any page to reveal a &ldquo;Skip to main content&rdquo; link.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary font-bold text-sm">4</span>
                      <span><strong>Reduce motion:</strong> Enable reduced motion in your device settings to minimize animations.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-4">
                      Feedback & Assistance
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      We welcome your feedback on the accessibility of our website. If you encounter any 
                      accessibility barriers or have suggestions for improvement, please let us know.
                    </p>
                    <p className="text-foreground/70 mb-4">
                      If you need assistance using our website or would prefer to conduct your inquiry 
                      by phone, our team is happy to help:
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span><strong>Phone:</strong> {siteConfig.contact.phoneFormatted}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span><strong>Email:</strong> {siteConfig.contact.email}</span>
                      </li>
                    </ul>
                    <p className="text-foreground/70 mt-4 mb-0">
                      <strong>Hours:</strong> {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Need Help? We&apos;re Here for You
              </h2>
              <p className="text-foreground/70 mb-8">
                If you need any assistance navigating our site or have questions about internet and TV 
                services, our friendly team is just a phone call away.
              </p>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-call text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
