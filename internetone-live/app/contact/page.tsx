import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | InternetOne.live',
  description: 'Get in touch with InternetOne.live. Call us at (888) 524-0250 or send us a message. Our team is ready to help you find the right internet and TV services.',
  openGraph: {
    title: 'Contact Us | InternetOne.live',
    description: 'Get in touch with InternetOne.live. Our team is ready to help you find the right internet and TV services.',
    url: 'https://internetone.live/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
