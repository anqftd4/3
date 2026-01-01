'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground/60">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-foreground/70">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {/* Introduction */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-2">Introduction</h2>
                    <p className="text-foreground/70 mb-0">
                      {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting 
                      your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                      your information when you visit our website {siteConfig.url}, including any other 
                      media form, media channel, mobile website, or mobile application related or connected 
                      thereto (collectively, the &ldquo;Site&rdquo;).
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Information We Collect</h2>
                    
                    <h3 className="text-lg font-semibold mb-2">Personal Information You Provide</h3>
                    <p className="text-foreground/70 mb-4">
                      We may collect personal information that you voluntarily provide when you:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li>Contact us via phone, email, or contact form</li>
                      <li>Enter your ZIP code to check service availability</li>
                      <li>Subscribe to our newsletter or updates</li>
                      <li>Request information about internet or TV services</li>
                    </ul>
                    <p className="text-foreground/70 mb-4">
                      This information may include your name, email address, phone number, mailing address, 
                      and ZIP code.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                    <p className="text-foreground/70 mb-0">
                      When you visit our Site, we may automatically collect certain information about your 
                      device, including your IP address, browser type, operating system, referring URLs, 
                      pages viewed, and the dates/times of your visits. This information helps us improve 
                      our Site and services.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">How We Use Your Information</h2>
                    <p className="text-foreground/70 mb-4">
                      We may use the information we collect for various purposes, including:
                    </p>
                    <ul className="text-foreground/70 mb-0 space-y-2">
                      <li>Providing you with information about internet and TV services in your area</li>
                      <li>Responding to your inquiries and fulfilling your requests</li>
                      <li>Sending you promotional communications (with your consent)</li>
                      <li>Improving our website and user experience</li>
                      <li>Analyzing trends and usage patterns</li>
                      <li>Protecting against fraud and unauthorized transactions</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Information Sharing & Disclosure</h2>
                    <p className="text-foreground/70 mb-4">
                      We may share your information in the following circumstances:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li><strong>Service Providers:</strong> We work with internet and TV service providers. 
                      When you call to inquire about services, your information may be shared with providers 
                      to help you establish service.</li>
                      <li><strong>Business Partners:</strong> We may share information with trusted business 
                      partners who assist in operating our website and conducting our business.</li>
                      <li><strong>Legal Requirements:</strong> We may disclose information when required by law, 
                      court order, or governmental authority.</li>
                      <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of 
                      assets, your information may be transferred to the acquiring entity.</li>
                    </ul>
                    <p className="text-foreground/70 mb-0">
                      We do not sell your personal information to third parties for their marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Cookies and Tracking Technologies</h2>
                    <p className="text-foreground/70 mb-4">
                      We use cookies and similar tracking technologies to track activity on our Site and 
                      hold certain information. Cookies are files with small amounts of data which may 
                      include an anonymous unique identifier.
                    </p>
                    <p className="text-foreground/70 mb-4">
                      We use the following types of cookies:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for basic Site functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Site</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                    <p className="text-foreground/70 mb-0">
                      You can instruct your browser to refuse all cookies or indicate when a cookie is being 
                      sent. However, some portions of our Site may not function properly without cookies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Your Privacy Rights</h2>
                    <p className="text-foreground/70 mb-4">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                      <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                    </ul>
                    <p className="text-foreground/70 mb-0">
                      To exercise any of these rights, please contact us using the information provided below.
                    </p>
                  </div>
                </div>
              </div>

              {/* California Residents */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">California Privacy Rights (CCPA)</h2>
                <p className="text-foreground/70 mb-4">
                  If you are a California resident, you have specific rights under the California Consumer 
                  Privacy Act (CCPA), including the right to know what personal information we collect, 
                  the right to delete your personal information, and the right to opt out of the sale of 
                  your personal information.
                </p>
                <p className="text-foreground/70 mb-0">
                  We do not sell personal information. To make a request under the CCPA, please contact 
                  us at {siteConfig.contact.email}.
                </p>
              </div>

              {/* Data Security */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Data Security</h2>
                <p className="text-foreground/70 mb-0">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the Internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Children&apos;s Privacy</h2>
                <p className="text-foreground/70 mb-0">
                  Our Site is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian 
                  and believe your child has provided us with personal information, please contact us 
                  immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-foreground/70 mb-0">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date. 
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Contact Us</h2>
                    <p className="text-foreground/70 mb-4">
                      If you have questions or concerns about this Privacy Policy or our privacy practices, 
                      please contact us:
                    </p>
                    <ul className="text-foreground/70 mb-0 space-y-2">
                      <li><strong>Email:</strong> {siteConfig.contact.email}</li>
                      <li><strong>Phone:</strong> {siteConfig.contact.phoneFormatted}</li>
                      <li><strong>Hours:</strong> {siteConfig.contact.hours}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
