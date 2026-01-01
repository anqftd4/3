'use client';

import { motion } from 'framer-motion';
import { Phone, DollarSign, Heart, Shield, Users, CheckCircle, AlertCircle, Building } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import PageWrapper from '@/components/PageWrapper';

export default function DisclosuresPage() {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Disclosures
              </h1>
              <p className="text-xl text-foreground/70">
                We believe in complete transparency. Here&apos;s how our service works and how we earn money.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Independence Statement */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-4">
                      We Are an Independent Service
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      <strong>{siteConfig.name} is an independent comparison and consultation service.</strong> We 
                      are NOT Verizon, Spectrum, AT&T, Optimum, or any other internet or TV service provider. 
                      We are not owned by, affiliated with, or employed by any telecommunications company.
                    </p>
                    <p className="text-foreground/70 mb-4">
                      Our role is to help consumers like you understand the internet and TV options available 
                      in your area, compare plans and pricing, and connect you with the providers that best 
                      meet your needs.
                    </p>
                    <p className="text-foreground/70 mb-0">
                      When you establish service, you will enter into an agreement directly with the service 
                      provider—not with us. All billing, customer service, and technical support will be handled 
                      by your chosen provider.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Make Money */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How We Earn Money
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We want you to understand exactly how our business works and how we generate revenue.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Referral Compensation</h3>
                      <p className="text-foreground/70 mb-4">
                        When you call us and subsequently sign up for service with one of our partner providers, 
                        we may receive a referral fee or commission from that provider. This is our primary 
                        source of revenue.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <p className="text-foreground/80 text-sm">
                            <strong>Important:</strong> This compensation does NOT increase the price you pay. 
                            You&apos;ll pay the same rates whether you sign up through us or directly with the provider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Our Partner Relationships</h3>
                      <p className="text-foreground/70">
                        We work with authorized sales channels for major internet and TV providers. These 
                        relationships allow us to offer you information about plans and pricing, and to 
                        facilitate your connection with providers. Our partners include authorized retailers 
                        and sales agents for providers like Verizon, Spectrum, AT&T, and Optimum.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Our Commitment to You</h3>
                      <p className="text-foreground/70 mb-4">
                        Despite receiving compensation from providers, we are committed to:
                      </p>
                      <ul className="space-y-2 text-foreground/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Providing accurate information about all providers we discuss</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Helping you find the plan that truly fits your needs—not just the one with the highest commission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Being transparent about our limitations and what we can and cannot help with</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Respecting your decision if you choose not to proceed with service</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Important Information
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pricing Information</h3>
                    <p className="text-foreground/70">
                      All prices, plans, and promotional offers displayed on our website are provided for 
                      informational purposes and are subject to change. Final pricing is determined by the 
                      service provider at the time of order. Additional fees for taxes, equipment, installation, 
                      and other charges may apply.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Service Availability</h3>
                    <p className="text-foreground/70">
                      Internet and TV service availability varies by location. Not all providers or plans 
                      are available in all areas. We recommend confirming availability and current offers 
                      by speaking with our team or directly with the provider.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Trademarks</h3>
                    <p className="text-foreground/70">
                      All trademarks, service marks, and company names mentioned on this website are the 
                      property of their respective owners. Verizon, Fios, Spectrum, AT&T, Optimum, and other 
                      provider names and logos are trademarks of their respective companies. Use of these 
                      marks does not imply endorsement.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">No Guarantees</h3>
                    <p className="text-foreground/70">
                      We cannot guarantee specific speeds, service quality, or customer experience with any 
                      provider. Actual results depend on many factors including your location, equipment, and 
                      network conditions. We encourage you to research providers independently and read 
                      customer reviews.
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
                Questions About Our Service?
              </h2>
              <p className="text-foreground/70 mb-8">
                We&apos;re happy to answer any questions about how we operate. Our team is here to help.
              </p>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-call text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phoneFormatted}
              </a>
              <p className="mt-4 text-sm text-foreground/60">
                {siteConfig.contact.hours}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
