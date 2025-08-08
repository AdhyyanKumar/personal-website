import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DefaultSeo } from 'next-seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Adhyyan Kumar - Full Stack Developer & CS Student',
  description: 'Computer Science & Mathematics Major at University of Maryland. Building fast, delightful software with clean UX and solid engineering.',
  keywords: 'Adhyyan Kumar, Full Stack Developer, Computer Science, University of Maryland, Software Engineer, AI, Machine Learning',
  authors: [{ name: 'Adhyyan Kumar', url: 'https://github.com/adhyyankumar' }],
  creator: 'Adhyyan Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adhyyan.dev',
    title: 'Adhyyan Kumar - Full Stack Developer & CS Student',
    description: 'Computer Science & Mathematics Major at University of Maryland. Building fast, delightful software with clean UX and solid engineering.',
    siteName: 'Adhyyan Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhyyan Kumar - Full Stack Developer & CS Student',
    description: 'Computer Science & Mathematics Major at University of Maryland. Building fast, delightful software with clean UX and solid engineering.',
    creator: '@adhyyan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}