'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Map, Home, Search, Tv, Package, Users, HelpCircle, Phone, FileText, Shield, Accessibility, Building } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import PageWrapper from '@/components/PageWrapper';

const sitemapSections = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { name: 'Home', href: '/', description: 'Compare internet and TV providers' },
      { name: 'Compare Plans', href: '/compare', description: 'Side-by-side plan comparison' },
      { name: 'Current Deals', href: '/deals', description: 'Latest promotions and offers' },
      { name: 'TV Packages', href: '/tv', description: 'Television service options' },
      { name: 'Bundle Deals', href: '/bundles', description: 'Internet + TV bundle packages' },
    ],
  },
  {
    title: 'Internet Providers',
    icon: Building,
    links: [
      { name: 'Verizon Fios', href: '/providers/verizon', description: 'Explore Verizon plans' },
      { name: 'Spectrum', href: '/providers/spectrum', description: 'Explore Spectrum plans' },
      { name: 'AT&T', href: '/providers/att', description: 'Explore AT&T plans' },
      { name: 'Optimum', href: '/providers/optimum', description: 'Explore Optimum plans' },
    ],
  },
  {
    title: 'About Us',
    icon: Users,
    links: [
      { name: 'Why Choose Us', href: '/why-us', description: 'Benefits of our service' },
      { name: 'About', href: '/about', description: 'Learn about our company' },
      { name: 'Contact Us', href: '/contact', description: 'Get in touch with our team' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    ],
  },
  {
    title: 'Legal & Compliance',
    icon: FileText,
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle your data' },
      { name: 'Terms and Conditions', href: '/terms-and-conditions', description: 'Terms of use' },
      { name: 'Disclosures', href: '/disclosures', description: 'How we make money' },
      { name: 'Accessibility', href: '/accessibility', description: 'Our accessibility commitment' },
    ],
  },
];

export default function SitemapPage() {
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
                <Map className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-foreground/70">
                Find everything on our website with this complete page directory.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {sitemapSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="card"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-display font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group block hover:bg-card/50 rounded-lg p-3 -mx-3 transition-colors"
                          >
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </span>
                            <p className="text-sm text-foreground/60 mt-0.5">
                              {link.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 card bg-gradient-to-r from-primary/5 to-transparent"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      Can&apos;t Find What You&apos;re Looking For?
                    </h3>
                    <p className="text-foreground/70">
                      Our team is here to help you find the right internet or TV service.
                    </p>
                  </div>
                  <a href={`tel:${siteConfig.contact.phone}`} className="btn-call shrink-0">
                    <Phone className="w-5 h-5" />
                    Call {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </motion.div>

              {/* All Pages List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="text-2xl font-display font-bold mb-6 text-center">
                  Complete Page List
                </h2>
                <div className="card">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Compare Plans', href: '/compare' },
                      { name: 'Current Deals', href: '/deals' },
                      { name: 'TV Packages', href: '/tv' },
                      { name: 'Bundle Deals', href: '/bundles' },
                      { name: 'Why Choose Us', href: '/why-us' },
                      { name: 'FAQ', href: '/faq' },
                      { name: 'Contact Us', href: '/contact' },
                      { name: 'About', href: '/about' },
                      { name: 'Verizon', href: '/providers/verizon' },
                      { name: 'Spectrum', href: '/providers/spectrum' },
                      { name: 'AT&T', href: '/providers/att' },
                      { name: 'Optimum', href: '/providers/optimum' },
                      { name: 'Privacy Policy', href: '/privacy-policy' },
                      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
                      { name: 'Disclosures', href: '/disclosures' },
                      { name: 'Accessibility', href: '/accessibility' },
                      { name: 'Sitemap', href: '/sitemap' },
                    ].map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
