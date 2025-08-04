import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Reduced font weights for better performance
  variable: "--font-poppins",
  display: "swap", // Improve font loading performance
  preload: true,
});

export const metadata: Metadata = {
  title: "Arghya Ghosh | Creative Studio for Motion & Media",
  description:
    "Boost your brand with professional video editing services. I craft engaging YouTube videos, reels, ads & motion graphics with fast delivery and high-quality output.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
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
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <meta name="theme-color" content="#000000" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=3600, must-revalidate"
        />
        {/* Critical CSS for preventing layout shift */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; }
            body { margin: 0; background: #000; color: #fff; }
            .loading-placeholder { 
              background: linear-gradient(90deg, #1f2937 25%, #374151 50%, #1f2937 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
