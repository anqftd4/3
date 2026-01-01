import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | InternetOne.live',
  description: 'Learn about InternetOne.live, an independent comparison service helping consumers find and compare internet and TV providers.',
  openGraph: {
    title: 'About Us | InternetOne.live',
    description: 'Learn about InternetOne.live, an independent comparison service helping consumers find and compare internet and TV providers.',
    url: 'https://internetone.live/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
