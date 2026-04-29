import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LMS Pro BD | Premium LMS Demo',
  description: 'Client-ready bilingual LMS demo for Bangladesh coaching and training businesses.',
  openGraph: { title: 'LMS Pro BD', description: 'Premium LMS demo website for Bangladesh market.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
