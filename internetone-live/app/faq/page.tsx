import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | InternetOne.live',
  description: 'Find answers to common questions about internet and TV services, our comparison process, pricing, installation, and more.',
  openGraph: {
    title: 'Frequently Asked Questions | InternetOne.live',
    description: 'Find answers to common questions about internet and TV services and our comparison process.',
    url: 'https://internetone.live/faq',
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
