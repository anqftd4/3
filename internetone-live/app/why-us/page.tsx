import { Metadata } from 'next';
import WhyUsPageClient from './WhyUsPageClient';

export const metadata: Metadata = {
  title: 'Why Choose Us | InternetOne.live',
  description: 'Learn why thousands trust InternetOne.live to compare internet and TV providers. Independent service, expert guidance, and transparent information.',
  openGraph: {
    title: 'Why Choose Us | InternetOne.live',
    description: 'Learn why thousands trust InternetOne.live to compare internet and TV providers.',
    url: 'https://internetone.live/why-us',
  },
};

export default function WhyUsPage() {
  return <WhyUsPageClient />;
}
