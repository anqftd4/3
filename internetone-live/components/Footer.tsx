'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">I1</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                InternetOne<span className="text-brand-400">.live</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                whileHover={{ x: 5 }}
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{siteConfig.contact.phone}</p>
                  <p className="text-sm text-slate-400">Call for Expert Assistance</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{siteConfig.contact.email}</p>
                  <p className="text-sm text-slate-400">Email Support</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="font-medium text-slate-300">{siteConfig.contact.hours}</p>
                  <p className="text-sm">Business Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Providers Row */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="font-display font-bold text-white mb-4">Providers</h3>
          <div className="flex flex-wrap gap-4">
            {siteConfig.providers.map((provider) => (
              <Link
                key={provider.slug}
                href={`/providers/${provider.slug}`}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                style={{ borderLeft: `3px solid ${provider.color}` }}
              >
                {provider.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-slate-950">
        <div className="container py-8">
          <div className="text-sm text-slate-500 space-y-4">
            <p className="font-semibold text-slate-400">Important Disclosures</p>
            <p>{siteConfig.disclaimers.independence}</p>
            <p>{siteConfig.disclaimers.trademarks}</p>
            <p>{siteConfig.disclaimers.pricing}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 border-t border-slate-900">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
                Terms
              </Link>
              <Link href="/accessibility" className="hover:text-slate-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
