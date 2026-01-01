'use client';

import { motion } from 'framer-motion';
import { Phone, Wifi, Tv, Package, Zap, Shield, Clock, Users, ChevronRight, Check, Star, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import ProviderPopup from '@/components/ProviderPopup';
import ZipSearchModule from '@/components/ZipSearchModule';
import PageWrapper from '@/components/PageWrapper';

const spectrumPlans = [
  {
    name: 'Spectrum Internet',
    speed: '300',
    price: '49.99',
    features: ['300 Mbps download', 'No data caps', 'Free modem', 'Free security suite'],
    highlight: false,
  },
  {
    name: 'Spectrum Internet Ultra',
    speed: '500',
    price: '69.99',
    features: ['500 Mbps download', 'No data caps', 'Advanced WiFi router', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Spectrum Internet Gig',
    speed: '1000',
    price: '89.99',
    features: ['Up to 1 Gbps', 'No data caps', 'WiFi 6 router', 'Unlimited mobile lines'],
    highlight: false,
  },
];

const spectrumFeatures = [
  {
    icon: Shield,
    title: 'No Data Caps',
    description: 'Stream, game, and browse without worrying about overage fees or throttling.',
  },
  {
    icon: Globe,
    title: 'Wide Coverage',
    description: 'Spectrum serves 41 states with extensive cable and fiber infrastructure.',
  },
  {
    icon: Clock,
    title: 'No Contracts',
    description: 'Enjoy service flexibility without long-term commitments or early termination fees.',
  },
  {
    icon: Wifi,
    title: 'Free Equipment',
    description: 'Modem included at no extra cost, with optional WiFi router available.',
  },
];

export default function SpectrumPage() {
  const provider = siteConfig.providers.find(p => p.slug === 'spectrum')!;

  return (
    <PageWrapper>
      <ProviderPopup provider={provider} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0158a3]/10 via-background to-background">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#0158a3]/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-[#0158a3]/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <DisclosureBanner providerName={provider.name} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-lg"
                style={{ backgroundColor: provider.color }}
              >
                {provider.name.charAt(0)}
                <span>{provider.name}</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              Explore{' '}
              <span className="text-[#0158a3]">Spectrum</span>{' '}
              Internet Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground/70 mb-8 max-w-2xl"
            >
              Spectrum offers reliable cable internet with no data caps and no contracts. 
              Let us help you find the best Spectrum plan for your needs and location.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-call text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phoneFormatted}
              </a>
              <a href="#plans" className="btn-secondary text-lg px-8 py-4">
                View Plans
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZIP Search Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Check Spectrum Availability
            </h2>
            <p className="text-foreground/70">
              Spectrum is available in 41 states. Enter your ZIP code to check coverage.
            </p>
          </motion.div>
          <ZipSearchModule variant="card" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Spectrum Internet Plans
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These are example plans that may be available. Call us for current pricing and promotions in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {spectrumPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative overflow-hidden ${
                  plan.highlight ? 'ring-2 ring-[#0158a3]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#0158a3] text-white text-center py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Best Value
                  </div>
                )}
                <div className={plan.highlight ? 'pt-8' : ''}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-display font-bold text-[#0158a3]">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/60">/mo*</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-foreground/70">
                    <Zap className="w-5 h-5 text-[#0158a3]" />
                    <span className="font-semibold">{plan.speed} Mbps</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className={`w-full ${plan.highlight ? 'btn-call' : 'btn-primary'}`}
                  >
                    <Phone className="w-4 h-4" />
                    Call to Order
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-foreground/60 mt-8"
          >
            *Prices shown are examples and may vary. Taxes, equipment fees, and other charges may apply. 
            Call for current pricing and availability in your area.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose Spectrum?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Spectrum&apos;s cable network offers reliable service with customer-friendly policies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spectrumFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${provider.color}15` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: provider.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TV & Bundles Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Spectrum TV & Bundle Options
              </h2>
              <p className="text-foreground/70 mb-6">
                Save by bundling your Spectrum internet with TV and mobile services. 
                Ask about current bundle promotions and package options available in your area.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Spectrum TV Select with 125+ channels',
                  'Spectrum TV Choice for custom channel lineup',
                  'Cloud DVR included with TV packages',
                  'Spectrum Mobile with unlimited data options',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0158a3]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#0158a3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-call">
                <Phone className="w-5 h-5" />
                Ask About Bundles
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Tv, label: 'Live TV', desc: '125+ channels' },
                { icon: Wifi, label: 'Fast Internet', desc: 'Up to 1 Gbps' },
                { icon: Package, label: 'Bundle Deals', desc: 'Triple Play' },
                { icon: Users, label: 'Mobile Plans', desc: 'Unlimited data' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-[#0158a3]" />
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0158a3] to-[#013d70]">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started with Spectrum?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect Spectrum plan. 
              Call now for current pricing and availability.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 bg-white text-[#0158a3] px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.contact.phoneFormatted}
            </a>
            <p className="mt-6 text-white/70">
              {siteConfig.contact.hours}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-card/50">
        <div className="container">
          <p className="text-xs text-foreground/60 text-center max-w-4xl mx-auto">
            {siteConfig.disclaimers.affiliate} Spectrum and related marks are trademarks of 
            Charter Communications Inc. We are not Spectrum or affiliated with Charter Communications. 
            Pricing, availability, and offers are subject to change. Call for current details.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
