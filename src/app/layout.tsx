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
  title: {
    default: "Shunya Development IT Company | Best IT Company in Nepal",
    template: "%s | Shunya Development IT Company",
  },
  description: "Shunya Development IT Company is a leading technology studio in Nepal specializing in interactive 3D websites, AI solutions, web & app development, and digital transformation. We engineer the future.",
  keywords: [
    "Shunya Development IT Company",
    "Shunya IT",
    "Best IT Company in Nepal",
    "IT Company Kathmandu",
    "Web Development Nepal",
    "App Development Nepal",
    "3D Website Design",
    "Interactive Web Experiences",
    "Artificial Intelligence Solutions",
    "Digital Transformation Nepal",
    "Software Company Nepal",
    "Technology Studio"
  ],
  metadataBase: new URL('https://www.shunya.com.np'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  openGraph: {
    title: "Shunya Development IT Company | Engineering Interactive Digital Realities",
    description: "Experience the future of digital with Shunya. We build immersive 3D websites, powerful apps, and AI-driven solutions to transform your business.",
    url: 'https://www.shunya.com.np',
    siteName: 'Shunya Development IT Company',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Shunya Development IT Company Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shunya Development IT Company",
    description: "Leading IT Company in Nepal for 3D Websites, AI, and App Development.",
    images: ['/logo.png'],
  },
  verification: {
    google: '0svthPazotv4Fg9nU_NDz1HqnBVafE6ogwOWHcjyHrk',
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
              "name": "Shunya Development IT Company",
              "alternateName": ["Shunya IT", "Shunya Nepal", "SHUNYA"],
              "url": "https://www.shunya.com.np",
              "logo": "https://www.shunya.com.np/logo.png",
              "description": "Shunya Development IT Company is the best IT company in Nepal specializing in interactive 3D websites, AI, and digital transformation.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kathmandu",
                "addressLocality": "Kathmandu",
                "addressCountry": "NP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-9840700349",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": "en"
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
