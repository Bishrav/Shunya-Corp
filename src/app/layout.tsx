import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Futuristic fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHUNYA | Best IT Company in Nepal",
  description: "Shunya Development IT Company is the best IT company in Nepal for website building, app development, and interactive 3D experiences. We specialize in Three.js, Next.js, and futuristic digital transformation.",
  keywords: ["Shunya Development IT Company", "Shunya IT Company", "best IT company in Nepal", "best company for making website", "website building", "three js search", "website development search", "app development search in nepal", "3D website", "interactive web design"],
  metadataBase: new URL('https://www.shunya.com.np'), // Replace with actual domain
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.jpeg', // Apple touch icons generally prefer png/jpeg, leaving as high-res logo
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.jpeg',
    },
  },
  openGraph: {
    title: "SHUNYA | Engineering Interactive Digital Realities",
    description: "SHUNYA is a technology studio specializing in interactive 3D websites, AI, and futuristic digital transformation.",
    url: 'https://www.shunya.com.np',
    siteName: 'SHUNYA',
    images: [
      {
        url: '/logo.jpeg', // Using the high-res logo for social sharing
        width: 800,
        height: 800,
        alt: 'SHUNYA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SHUNYA | Engineering Interactive Digital Realities",
    description: "SHUNYA is a technology studio specializing in interactive 3D websites, AI, and futuristic digital transformation.",
    images: ['/logo.jpeg'],
  },
};

import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/ui/Footer";
import { Chatbot } from "@/components/ui/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark cursor-none">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "antialiased bg-shunya-bg text-white min-h-screen font-sans selection:bg-shunya-cyan selection:text-shunya-bg"
        )}
      >
        <CustomCursor />
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SHUNYA",
              "alternateName": ["Shunya Development IT Company", "Shunya IT", "Shunya Nepal"],
              "url": "https://www.shunya.com.np",
              "logo": "https://www.shunya.com.np/logo.png",
              "description": "SHUNYA is the best IT company in Nepal specializing in interactive 3D websites, AI, and digital transformation.",
              "brand": {
                "@type": "Brand",
                "name": "SHUNYA"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kathmandu",
                "addressLocality": "Kathmandu",
                "addressCountry": "NP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-9840700349",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/shunya",
                "https://www.instagram.com/shunya",
                "https://www.linkedin.com/company/shunya"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
