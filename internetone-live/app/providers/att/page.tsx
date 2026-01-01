'use client';

import { motion } from 'framer-motion';
import { Phone, Wifi, Tv, Package, Zap, Shield, Clock, Smartphone, ChevronRight, Check, Star, Globe } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import ProviderPopup from '@/components/ProviderPopup';
import ZipSearchModule from '@/components/ZipSearchModule';
import PageWrapper from '@/components/PageWrapper';

const attPlans = [
  {
    name: 'AT&T Internet 300',
    speed: '300',
    price: '55.00',
    features: ['300 Mbps download', 'No annual contract', 'Wi-Fi gateway included', 'Internet security'],
    highlight: false,
  },
  {
    name: 'AT&T Internet 500',
    speed: '500',
    price: '65.00',
    features: ['500 Mbps download', 'Symmetric speeds', 'Smart Home Manager', 'Priority support'],
    highlight: true,
  },
  {
    name: 'AT&T Fiber 1 Gig',
    speed: '1000',
    price: '80.00',
    features: ['Up to 1 Gbps', 'Symmetric upload/download', 'Wi-Fi 6 gateway', 'HBO Max included*'],
    highlight: false,
  },
];

const attFeatures = [
  {
    icon: Zap,
    title: 'Fiber Technology',
    description: 'AT&T Fiber delivers fast, symmetric speeds for uploads and downloads where available.',
  },
  {
    icon: Globe,
    title: '21-State Coverage',
    description: 'AT&T provides fiber and DSL internet service across 21 states nationwide.',
  },
  {
    icon: Smartphone,
    title: 'Wireless Integration',
    description: 'Bundle with AT&T wireless for potential savings on your monthly bills.',
  },
  {
    icon: Shield,
    title: 'Security Suite',
    description: 'AT&T Internet Security powered by McAfee helps protect your connected devices.',
  },
];

export default function ATTPage() {
  const provider = siteConfig.providers.find(p => p.slug === 'att')!;

  return (
    <PageWrapper>
      <ProviderPopup provider={provider} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00a8e0]/10 via-background to-background">
          <motion.div
            className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#00a8e0]/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#00a8e0]/10 blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              y: [0, -20, 0],
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
              <span className="text-[#00a8e0]">AT&T</span>{' '}
              Internet Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground/70 mb-8 max-w-2xl"
            >
              AT&T offers fiber and DSL internet options with wireless integration benefits. 
              Let our team help you explore AT&T plans available in your area.
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
              Check AT&T Availability
            </h2>
            <p className="text-foreground/70">
              AT&T Fiber is expanding rapidly. Enter your ZIP to see what&apos;s available.
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
              AT&T Internet Plans
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These are example plans that may be available. Call us for current pricing and promotions in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {attPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative overflow-hidden ${
                  plan.highlight ? 'ring-2 ring-[#00a8e0]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#00a8e0] text-white text-center py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Popular Choice
                  </div>
                )}
                <div className={plan.highlight ? 'pt-8' : ''}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-display font-bold text-[#00a8e0]">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/60">/mo*</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-foreground/70">
                    <Zap className="w-5 h-5 text-[#00a8e0]" />
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
            *Prices shown are examples and may vary. HBO Max offer subject to availability and terms. 
            Taxes, equipment fees, and other charges may apply. Call for current pricing.
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
              Why Choose AT&T?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              AT&T combines fast fiber internet with wireless expertise for a connected experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attFeatures.map((feature, index) => (
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
                AT&T TV & Streaming Options
              </h2>
              <p className="text-foreground/70 mb-6">
                AT&T offers various TV and streaming solutions. Ask about DIRECTV STREAM, 
                streaming bundles, and how to maximize savings with your AT&T wireless plan.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'DIRECTV STREAM packages available',
                  'HBO Max included with select plans',
                  'Wireless bill credit opportunities',
                  'Multi-device streaming support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00a8e0]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#00a8e0]" />
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
                { icon: Tv, label: 'DIRECTV', desc: 'Live & On-demand' },
                { icon: Wifi, label: 'AT&T Fiber', desc: 'Up to 5 Gbps' },
                { icon: Package, label: 'Bundle & Save', desc: 'Internet + TV' },
                { icon: Smartphone, label: 'Mobile Perks', desc: 'Wireless savings' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-[#00a8e0]" />
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a8e0] to-[#0077a8]">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started with AT&T?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you find the perfect AT&T plan. 
              Call now for availability and exclusive promotions.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 bg-white text-[#00a8e0] px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition-colors shadow-xl"
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
            {siteConfig.disclaimers.affiliate} AT&T and related marks are trademarks of AT&T 
            Intellectual Property. We are not AT&T or affiliated with AT&T Inc. HBO Max is a 
            registered trademark of Warner Bros. Discovery. Pricing, availability, and offers 
            are subject to change. Call for current details.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
