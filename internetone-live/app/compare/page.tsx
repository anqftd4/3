import { Metadata } from 'next';
import ComparePageClient from './ComparePageClient';

export const metadata: Metadata = {
  title: 'Compare Internet Plans',
  description: 'Compare internet plans from Verizon, Spectrum, AT&T, and Optimum. Filter by speed, price, and features to find the best plan for your needs.',
  openGraph: {
    title: 'Compare Internet Plans | InternetOne.live',
    description: 'Compare internet plans from Verizon, Spectrum, AT&T, and Optimum. Filter by speed, price, and features.',
  },
};

export default function ComparePage() {
  return <ComparePageClient />;
}
