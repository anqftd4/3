'use client';

import { motion } from 'framer-motion';
import { Phone, Wifi, Tv, Package, Zap, Shield, Clock, MapPin, ChevronRight, Check, Star, Home } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import ProviderPopup from '@/components/ProviderPopup';
import ZipSearchModule from '@/components/ZipSearchModule';
import PageWrapper from '@/components/PageWrapper';

const optimumPlans = [
  {
    name: 'Optimum 300',
    speed: '300',
    price: '40.00',
    features: ['300 Mbps download', 'No data caps', 'Smart Router included', 'Free installation'],
    highlight: false,
  },
  {
    name: 'Optimum 500',
    speed: '500',
    price: '60.00',
    features: ['500 Mbps download', 'No data caps', 'Optimum WiFi hotspots', 'Smart WiFi app'],
    highlight: true,
  },
  {
    name: 'Optimum 1 Gig',
    speed: '1000',
    price: '80.00',
    features: ['Up to 940 Mbps', 'Fiber where available', 'Premium support', 'Whole-home WiFi'],
    highlight: false,
  },
];

const optimumFeatures = [
  {
    icon: Zap,
    title: 'Fast Speeds',
    description: 'Optimum offers speeds up to 1 Gig with fiber and cable options depending on your area.',
  },
  {
    icon: MapPin,
    title: 'Regional Focus',
    description: 'Strong presence in the Northeast including NY, NJ, CT with dedicated local support.',
  },
  {
    icon: Home,
    title: 'Smart Home Ready',
    description: 'Optimum Smart WiFi creates a mesh network throughout your home for consistent coverage.',
  },
  {
    icon: Shield,
    title: 'Security Suite',
    description: 'Optimum Online Security helps protect your devices from online threats.',
  },
];

export default function OptimumPage() {
  const provider = siteConfig.providers.find(p => p.slug === 'optimum')!;

  return (
    <PageWrapper>
      <ProviderPopup provider={provider} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f47521]/10 via-background to-background">
          <motion.div
            className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-[#f47521]/20 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-[#f47521]/10 blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity }}
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
              <span className="text-[#f47521]">Optimum</span>{' '}
              Internet Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground/70 mb-8 max-w-2xl"
            >
              Optimum provides fast, reliable internet in the Northeast with competitive pricing. 
              Our team can help you find the right Optimum plan for your home.
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
              Check Optimum Availability
            </h2>
            <p className="text-foreground/70">
              Optimum serves select areas in NY, NJ, CT, and PA. Enter your ZIP to check.
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
              Optimum Internet Plans
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These are example plans that may be available. Call us for current pricing and promotions in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {optimumPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative overflow-hidden ${
                  plan.highlight ? 'ring-2 ring-[#f47521]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#f47521] text-white text-center py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Best Value
                  </div>
                )}
                <div className={plan.highlight ? 'pt-8' : ''}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-display font-bold text-[#f47521]">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/60">/mo*</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-foreground/70">
                    <Zap className="w-5 h-5 text-[#f47521]" />
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
              Why Choose Optimum?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Optimum combines competitive pricing with regional expertise in the Northeast market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimumFeatures.map((feature, index) => (
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
                Optimum TV & Bundle Options
              </h2>
              <p className="text-foreground/70 mb-6">
                Bundle your Optimum internet with TV for additional savings. Ask about 
                Optimum TV packages and current promotional bundles in your area.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Optimum TV with 200+ channels',
                  'Premium channel add-ons available',
                  'Cloud DVR Plus for recordings',
                  'Optimum Mobile integration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f47521]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#f47521]" />
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
                { icon: Tv, label: 'Optimum TV', desc: '200+ channels' },
                { icon: Wifi, label: 'Fast Internet', desc: 'Up to 1 Gig' },
                { icon: Package, label: 'Bundle Deals', desc: 'Save monthly' },
                { icon: Clock, label: 'Cloud DVR', desc: 'Record shows' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-[#f47521]" />
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f47521] to-[#d35f1a]">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started with Optimum?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect Optimum plan. 
              Call now for current pricing and promotions in your area.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 bg-white text-[#f47521] px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition-colors shadow-xl"
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
            {siteConfig.disclaimers.affiliate} Optimum and related marks are trademarks of 
            Altice USA, Inc. We are not Optimum or affiliated with Altice USA. Pricing, 
            availability, and offers are subject to change. Call for current details.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
