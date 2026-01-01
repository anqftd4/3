import { Metadata } from 'next';
import BundlesPageClient from './BundlesPageClient';

export const metadata: Metadata = {
  title: 'Internet + TV Bundles | InternetOne.live',
  description: 'Compare internet and TV bundle packages from leading providers. Get more value by combining services. Call to check availability in your area.',
  openGraph: {
    title: 'Internet + TV Bundles | InternetOne.live',
    description: 'Compare internet and TV bundle packages from leading providers. Get more value by combining services.',
    url: 'https://internetone.live/bundles',
  },
};

export default function BundlesPage() {
  return <BundlesPageClient />;
}
