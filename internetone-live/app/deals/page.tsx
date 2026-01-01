import { Metadata } from 'next';
import DealsPageClient from './DealsPageClient';

export const metadata: Metadata = {
  title: 'Current Deals & Promotions',
  description: 'Find current internet and TV deals in your area. Enter your ZIP code to see promotional offers from Verizon, Spectrum, AT&T, and Optimum.',
  openGraph: {
    title: 'Current Deals & Promotions | InternetOne.live',
    description: 'Find current internet and TV deals in your area. Enter your ZIP code to see promotional offers.',
  },
};

export default function DealsPage() {
  return <DealsPageClient />;
}
