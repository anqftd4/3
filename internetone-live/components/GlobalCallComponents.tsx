'use client';

import { usePathname } from 'next/navigation';
import StickyCallBar from './StickyCallBar';
import FloatingCallButton from './FloatingCallButton';

// Pages that should NOT show the call components
const excludedPaths = ['/', '/privacy-policy', '/terms-and-conditions'];

export default function GlobalCallComponents() {
  const pathname = usePathname();
  
  // Don't render on excluded pages
  if (excludedPaths.includes(pathname)) {
    return null;
  }
  
  return (
    <>
      <StickyCallBar />
      <FloatingCallButton />
    </>
  );
}
