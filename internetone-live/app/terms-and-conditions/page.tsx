'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function TermsPage() {
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
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground/60">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Terms and Conditions
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
              {/* Agreement */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-2">Agreement to Terms</h2>
                    <p className="text-foreground/70 mb-0">
                      By accessing and using {siteConfig.name} ({siteConfig.url}), you agree to be 
                      bound by these Terms and Conditions, all applicable laws and regulations, and agree 
                      that you are responsible for compliance with any applicable local laws. If you do not 
                      agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nature of Service */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Nature of Our Service</h2>
                    <p className="text-foreground/70 mb-4">
                      <strong>{siteConfig.name} is an independent comparison and information service.</strong> We 
                      are NOT an internet service provider, cable company, or telecommunications carrier. We do not:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li>Provide internet, TV, or phone services directly</li>
                      <li>Process payments for service providers</li>
                      <li>Have access to provider billing systems</li>
                      <li>Make service guarantees on behalf of providers</li>
                    </ul>
                    <p className="text-foreground/70 mb-0">
                      We provide information and connect you with service providers. All services are provided 
                      directly by the respective providers (Verizon, Spectrum, AT&T, Optimum, etc.), and you will 
                      enter into agreements directly with those providers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & Information */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Pricing & Information Accuracy</h2>
                    <p className="text-foreground/70 mb-4">
                      While we strive to provide accurate and up-to-date information:
                    </p>
                    <ul className="text-foreground/70 mb-4 space-y-2">
                      <li>Prices, plans, and promotions are subject to change without notice</li>
                      <li>Availability varies by location and is determined by service providers</li>
                      <li>Information displayed may not reflect all fees, taxes, or terms</li>
                      <li>Final pricing and terms are determined when you contact the provider</li>
                    </ul>
                    <p className="text-foreground/70 mb-0">
                      <strong>Always confirm pricing, availability, and terms directly with the service provider 
                      before making any purchasing decisions.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Affiliate Disclosure */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Affiliate & Compensation Disclosure</h2>
                <p className="text-foreground/70 mb-4">
                  {siteConfig.name} may receive compensation when you contact providers through our service 
                  or when you establish service as a result of using our website. This compensation may include:
                </p>
                <ul className="text-foreground/70 mb-4 space-y-2">
                  <li>Referral fees from service providers</li>
                  <li>Commission payments for qualified sales</li>
                  <li>Marketing fees and promotional compensation</li>
                </ul>
                <p className="text-foreground/70 mb-0">
                  This compensation does not affect the price you pay for services. For more details, see our 
                  <a href="/disclosures" className="text-primary hover:underline ml-1">Disclosures page</a>.
                </p>
              </div>

              {/* Use License */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Use License</h2>
                <p className="text-foreground/70 mb-4">
                  Permission is granted to temporarily view the materials on {siteConfig.name}&apos;s website 
                  for personal, non-commercial use only. This license does not include:
                </p>
                <ul className="text-foreground/70 mb-4 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using materials for commercial purposes or public display</li>
                  <li>Attempting to reverse engineer any software on the website</li>
                  <li>Removing any copyright or proprietary notations</li>
                  <li>Transferring materials to another person or &ldquo;mirroring&rdquo; on another server</li>
                </ul>
                <p className="text-foreground/70 mb-0">
                  This license shall automatically terminate if you violate any of these restrictions and may 
                  be terminated by {siteConfig.name} at any time.
                </p>
              </div>

              {/* Prohibited Uses */}
              <div className="card mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-0 mb-4">Prohibited Uses</h2>
                    <p className="text-foreground/70 mb-4">
                      You agree not to use our website:
                    </p>
                    <ul className="text-foreground/70 mb-0 space-y-2">
                      <li>For any unlawful purpose or to solicit unlawful acts</li>
                      <li>To violate any regulations, rules, or laws</li>
                      <li>To infringe upon intellectual property rights</li>
                      <li>To harass, abuse, or harm another person</li>
                      <li>To submit false or misleading information</li>
                      <li>To upload viruses or malicious code</li>
                      <li>To collect personal information without consent</li>
                      <li>To spam, phish, or engage in automated data collection</li>
                      <li>To interfere with security features of the website</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Disclaimer</h2>
                <p className="text-foreground/70 mb-4">
                  THE MATERIALS ON {siteConfig.name.toUpperCase()}&apos;S WEBSITE ARE PROVIDED ON AN &apos;AS IS&apos; BASIS. 
                  {siteConfig.name.toUpperCase()} MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS 
                  AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION:
                </p>
                <ul className="text-foreground/70 mb-4 space-y-2">
                  <li>Implied warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property</li>
                  <li>Accuracy, reliability, or availability of content</li>
                </ul>
                <p className="text-foreground/70 mb-0">
                  We do not warrant that the website will be uninterrupted, secure, or error-free, or that 
                  defects will be corrected.
                </p>
              </div>

              {/* Limitations */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Limitation of Liability</h2>
                <p className="text-foreground/70 mb-0">
                  In no event shall {siteConfig.name} or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on {siteConfig.name}&apos;s website, 
                  even if {siteConfig.name} or an authorized representative has been notified orally or in 
                  writing of the possibility of such damage. Because some jurisdictions do not allow limitations 
                  on implied warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Third-Party Services & Links</h2>
                <p className="text-foreground/70 mb-4">
                  Our website may contain links to third-party websites or services that are not owned or 
                  controlled by {siteConfig.name}. We have no control over, and assume no responsibility for:
                </p>
                <ul className="text-foreground/70 mb-4 space-y-2">
                  <li>The content, privacy policies, or practices of third-party sites</li>
                  <li>Products or services offered by third parties</li>
                  <li>The terms and conditions of service providers</li>
                </ul>
                <p className="text-foreground/70 mb-0">
                  You acknowledge and agree that {siteConfig.name} shall not be responsible or liable for 
                  any damage or loss caused by your use of third-party services.
                </p>
              </div>

              {/* Indemnification */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Indemnification</h2>
                <p className="text-foreground/70 mb-0">
                  You agree to defend, indemnify, and hold harmless {siteConfig.name}, its affiliates, and 
                  their respective officers, directors, employees, and agents from and against any claims, 
                  liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including 
                  reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms 
                  or your use of the website.
                </p>
              </div>

              {/* Modifications */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Modifications to Terms</h2>
                <p className="text-foreground/70 mb-0">
                  {siteConfig.name} may revise these Terms at any time without notice. By using this website, 
                  you are agreeing to be bound by the current version of these Terms. We encourage you to 
                  review these Terms periodically for changes. Your continued use of the website following 
                  the posting of changes constitutes acceptance of those changes.
                </p>
              </div>

              {/* Governing Law */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mt-0 mb-4">Governing Law</h2>
                <p className="text-foreground/70 mb-0">
                  These Terms shall be governed by and construed in accordance with the laws of the United 
                  States, without regard to its conflict of law provisions. Any legal action or proceeding 
                  arising under these Terms will be brought exclusively in the federal or state courts, and 
                  you consent to personal jurisdiction and venue in such courts.
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
                      If you have questions about these Terms and Conditions, please contact us:
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
