'use client';

import { usePathname } from 'next/navigation';
import StickyCallBar from './StickyCallBar';
import FloatingCallButton from './FloatingCallButton';

const EXCLUDED_PATHS = ['/', '/privacy-policy', '/terms-and-conditions'];

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showCallCTAs = !EXCLUDED_PATHS.includes(pathname);

  return (
    <>
      {showCallCTAs && (
        <>
          <StickyCallBar />
          <FloatingCallButton />
        </>
      )}
      {children}
    </>
  );
}
