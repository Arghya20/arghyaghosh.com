import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zero1 - Professional Video Editing Services',
  description: 'Transform your raw footage into cinematic masterpieces with our professional video editing services.',
  // Add viewport and caching metadata
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'Cache-Control': 'public, max-age=3600, must-revalidate'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=3600, must-revalidate" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}