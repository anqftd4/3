'use client';

import { motion } from 'framer-motion';
import { Phone, Wifi, Tv, Package, Zap, Shield, Clock, MapPin, ChevronRight, Check, Star } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import DisclosureBanner from '@/components/DisclosureBanner';
import ProviderPopup from '@/components/ProviderPopup';
import ZipSearchModule from '@/components/ZipSearchModule';
import PageWrapper from '@/components/PageWrapper';

const verizonPlans = [
  {
    name: 'Verizon 300 Mbps',
    speed: '300',
    price: '49.99',
    features: ['300 Mbps download', 'No data caps', 'Router included', 'Self-setup or pro install'],
    highlight: false,
  },
  {
    name: 'Verizon 500 Mbps',
    speed: '500',
    price: '69.99',
    features: ['500 Mbps download', 'No data caps', 'Wi-Fi 6 router', 'Whole-home coverage'],
    highlight: true,
  },
  {
    name: 'Verizon Gigabit',
    speed: '1000',
    price: '89.99',
    features: ['Up to 940 Mbps', 'No data caps', 'Premium router', 'Priority support'],
    highlight: false,
  },
];

const verizonFeatures = [
  {
    icon: Zap,
    title: '100% Fiber Optic',
    description: 'Pure fiber to your home delivers symmetric upload and download speeds for seamless video calls and cloud backups.',
  },
  {
    icon: Shield,
    title: 'Network Reliability',
    description: 'Fiber technology is less susceptible to weather and interference, providing consistent performance year-round.',
  },
  {
    icon: Clock,
    title: 'No Annual Contracts',
    description: 'Many Verizon plans come without long-term commitments, giving you flexibility to adjust as needed.',
  },
  {
    icon: Wifi,
    title: 'Whole-Home Wi-Fi',
    description: 'Advanced mesh technology options available to eliminate dead zones throughout your home.',
  },
];

export default function VerizonPage() {
  const provider = siteConfig.providers.find(p => p.slug === 'verizon')!;

  return (
    <PageWrapper>
      <ProviderPopup provider={provider} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cd040b]/10 via-background to-background">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#cd040b]/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#cd040b]/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
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
              <span className="text-[#cd040b]">Verizon Fios</span>{' '}
              Internet Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground/70 mb-8 max-w-2xl"
            >
              Verizon Fios delivers 100% fiber-optic internet with fast, reliable speeds. 
              Our team can help you find the right Verizon plan for your home and budget.
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
              Check Verizon Availability
            </h2>
            <p className="text-foreground/70">
              Verizon Fios is available in select areas. Enter your ZIP code to see what&apos;s available.
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
              Verizon Fios Internet Plans
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These are example plans that may be available. Call us for current pricing and promotions in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {verizonPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative overflow-hidden ${
                  plan.highlight ? 'ring-2 ring-[#cd040b]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#cd040b] text-white text-center py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                <div className={plan.highlight ? 'pt-8' : ''}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-display font-bold text-[#cd040b]">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/60">/mo*</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-foreground/70">
                    <Zap className="w-5 h-5 text-[#cd040b]" />
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
              Why Choose Verizon Fios?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Verizon&apos;s fiber-optic network offers several advantages for home internet users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verizonFeatures.map((feature, index) => (
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
                Bundle with Verizon TV Services
              </h2>
              <p className="text-foreground/70 mb-6">
                Verizon offers TV packages that can be bundled with your internet service. 
                Ask about Fios TV, YouTube TV partnerships, and other streaming options 
                that may be available in your area.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Fios TV with hundreds of channels',
                  'YouTube TV integration options',
                  'Streaming app access',
                  'Multi-room DVR capabilities',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#cd040b]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#cd040b]" />
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
                { icon: Tv, label: 'Live TV', desc: '425+ channels' },
                { icon: Wifi, label: 'Fast Internet', desc: 'Up to 940 Mbps' },
                { icon: Package, label: 'Bundle Savings', desc: 'Save monthly' },
                { icon: MapPin, label: 'Local Channels', desc: 'News & sports' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-[#cd040b]" />
                  <h4 className="font-bold">{item.label}</h4>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#cd040b] to-[#a00309]">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started with Verizon?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect Verizon plan. 
              Call now for availability and current promotions in your area.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 bg-white text-[#cd040b] px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/90 transition-colors shadow-xl"
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
            {siteConfig.disclaimers.affiliate} Verizon, Verizon Fios, and related marks are 
            trademarks of Verizon Communications Inc. We are not Verizon or affiliated with 
            Verizon Communications Inc. Pricing, availability, and offers are subject to change. 
            Call for current details.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
