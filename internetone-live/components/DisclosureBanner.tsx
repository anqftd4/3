'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

interface DisclosureBannerProps {
  providerName?: string;
}

export default function DisclosureBanner({ providerName }: DisclosureBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="text-sm text-amber-800 dark:text-amber-200">
          <p className="font-semibold mb-1">Important Disclosure</p>
          <p>
            {providerName ? (
              <>
                InternetOne.live is an independent comparison and connection service and is not affiliated with, endorsed by, or sponsored by {providerName}.
              </>
            ) : (
              <>{siteConfig.disclaimers.independence}</>
            )}
            {' '}Provider names and trademarks belong to their respective owners. Availability and pricing vary by location and are subject to change.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
