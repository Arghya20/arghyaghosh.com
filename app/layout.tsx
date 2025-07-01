import "./globals.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Arghya Ghosh | Creative Studio for Motion & Media",
  description:
    "Boost your brand with professional video editing services. I craft engaging YouTube videos, reels, ads & motion graphics with fast delivery and high-quality output.",
  // Add viewport and caching metadata
  viewport: "width=device-width, initial-scale=1",
  other: {
    "Cache-Control": "public, max-age=3600, must-revalidate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=3600, must-revalidate"
        />
      </head>
      <body className={`${poppins.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
