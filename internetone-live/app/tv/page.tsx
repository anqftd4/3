import { Metadata } from 'next';
import TVPageClient from './TVPageClient';

export const metadata: Metadata = {
  title: 'TV Packages',
  description: 'Compare TV packages from leading providers. Find cable TV plans with local channels, sports, premium networks, and on-demand content.',
  openGraph: {
    title: 'TV Packages | InternetOne.live',
    description: 'Compare TV packages from leading providers. Find cable TV plans with local channels, sports, and more.',
  },
};

export default function TVPage() {
  return <TVPageClient />;
}
