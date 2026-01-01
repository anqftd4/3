'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ArrowUpDown, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Check, 
  Filter,
  X 
} from 'lucide-react';
import { siteConfig, Plan } from '@/lib/siteConfig';
import { cn } from '@/lib/utils';

type SortKey = 'price' | 'speed' | 'provider';
type SortDirection = 'asc' | 'desc';

interface Filters {
  speedRange: 'all' | 'under300' | '300to500' | 'over500';
  type: 'all' | 'internet' | 'bundle';
  noContract: boolean;
  promo: boolean;
  provider: string;
}

export default function ComparisonTable() {
  const [sortKey, setSortKey] = useState<SortKey>('price');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    speedRange: 'all',
    type: 'all',
    noContract: false,
    promo: false,
    provider: 'all',
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedPlans = useMemo(() => {
    let plans = [...siteConfig.samplePlans];

    // Apply filters
    if (filters.speedRange !== 'all') {
      plans = plans.filter((plan) => {
        if (filters.speedRange === 'under300') return plan.speed < 300;
        if (filters.speedRange === '300to500') return plan.speed >= 300 && plan.speed <= 500;
        if (filters.speedRange === 'over500') return plan.speed > 500;
        return true;
      });
    }

    if (filters.promo) {
      plans = plans.filter((plan) => plan.promo);
    }

    if (filters.provider !== 'all') {
      plans = plans.filter((plan) => plan.providerSlug === filters.provider);
    }

    // Sort
    plans.sort((a, b) => {
      let comparison = 0;
      if (sortKey === 'price') {
        comparison = a.price - b.price;
      } else if (sortKey === 'speed') {
        comparison = a.speed - b.speed;
      } else if (sortKey === 'provider') {
        comparison = a.provider.localeCompare(b.provider);
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return plans;
  }, [filters, sortKey, sortDirection]);

  const resetFilters = () => {
    setFilters({
      speedRange: 'all',
      type: 'all',
      noContract: false,
      promo: false,
      provider: 'all',
    });
  };

  const hasActiveFilters = 
    filters.speedRange !== 'all' || 
    filters.promo || 
    filters.provider !== 'all';

  return (
    <div>
      {/* Filters */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center">
                {[filters.speedRange !== 'all', filters.promo, filters.provider !== 'all'].filter(Boolean).length}
              </span>
            )}
            <ChevronDown className={cn('w-4 h-4 transition-transform', showFilters && 'rotate-180')} />
          </motion.button>

          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={resetFilters}
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear filters
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                {/* Speed Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Speed Range
                  </label>
                  <select
                    value={filters.speedRange}
                    onChange={(e) => setFilters({ ...filters, speedRange: e.target.value as Filters['speedRange'] })}
                    className="input text-sm"
                  >
                    <option value="all">All Speeds</option>
                    <option value="under300">Under 300 Mbps</option>
                    <option value="300to500">300–500 Mbps</option>
                    <option value="over500">Over 500 Mbps</option>
                  </select>
                </div>

                {/* Provider Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Provider
                  </label>
                  <select
                    value={filters.provider}
                    onChange={(e) => setFilters({ ...filters, provider: e.target.value })}
                    className="input text-sm"
                  >
                    <option value="all">All Providers</option>
                    {siteConfig.providers.map((provider) => (
                      <option key={provider.id} value={provider.id}>
                        {provider.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Promo Filter */}
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.promo}
                      onChange={(e) => setFilters({ ...filters, promo: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Promo pricing may be available
                    </span>
                  </label>
                </div>

                {/* No Contract Note */}
                <div className="flex items-end">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Note: Contract-free options may be available. Call to confirm.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Table Header - Sort Controls */}
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
        {(['price', 'speed', 'provider'] as SortKey[]).map((key) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSort(key)}
            className={cn(
              'flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
              sortKey === key
                ? 'bg-brand-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            )}
          >
            <span className="capitalize">{key}</span>
            {sortKey === key && (
              <ArrowUpDown className={cn('w-3 h-3', sortDirection === 'desc' && 'rotate-180')} />
            )}
          </motion.button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Showing {filteredAndSortedPlans.length} plan{filteredAndSortedPlans.length !== 1 ? 's' : ''}
      </p>

      {/* Plans List */}
      <LayoutGroup>
        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card card-hover overflow-hidden"
              >
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === plan.id ? null : plan.id)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: siteConfig.providers.find(p => p.id === plan.providerSlug)?.color }}
                    >
                      {plan.provider[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {plan.provider} {plan.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Up to {plan.speed} Mbps
                      </p>
                      {plan.promo && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                          Promo Available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        ${plan.price}
                        <span className="text-base font-normal text-slate-500">/mo*</span>
                      </p>
                      <p className="text-xs text-slate-500">{plan.priceNote}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === plan.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedId === plan.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Features
                            </h4>
                            <ul className="space-y-2">
                              {plan.features.map((feature, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                >
                                  <Check className="w-4 h-4 text-green-500" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Contract
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                              {plan.contract}
                            </p>
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={`tel:${siteConfig.contact.phoneRaw}`}
                              className="btn-call w-full justify-center"
                            >
                              <Phone className="w-5 h-5" />
                              <span>Call to Confirm Pricing</span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filteredAndSortedPlans.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            No plans match your current filters.
          </p>
          <button
            onClick={resetFilters}
            className="text-brand-500 hover:text-brand-600 font-medium"
          >
            Reset filters
          </button>
        </motion.div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <strong>Important:</strong> Prices shown are examples and may vary by location. 
          Always call <a href={`tel:${siteConfig.contact.phoneRaw}`} className="underline font-semibold">{siteConfig.contact.phone}</a> to 
          confirm current pricing and availability in your area.
        </p>
      </div>
    </div>
  );
}
