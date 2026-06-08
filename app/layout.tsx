import type { Metadata } from "next";
import { Inter, Syne, Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pawarcafe.com'), // Placeholder, replace with actual production domain
  title: {
    default: "Pawar Cafe | Taste of Udgir — Best Pizza, Misal & Street Food",
    template: "%s | Pawar Cafe Udgir",
  },
  description: "Pawar Cafe Udgir — आमचा स्वाद, आमची शान. Legendary Pizza Challenge, authentic Misal, fiery Indo-Chinese, premium street food in Udgir, Maharashtra. Visit us today!",
  keywords: ["Pawar Cafe", "Udgir Cafe", "Pizza Udgir", "Misal Udgir", "Best Cafe Udgir", "पवार कॅफे", "Street Food Udgir", "Udgir Restaurants"],
  authors: [{ name: "Bajrang Pawar" }],
  creator: "Pawar Cafe",
  publisher: "Pawar Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Pawar Cafe | Taste of Udgir",
    description: "Udgir's most vibrant cafe — premium street food, legendary pizza, and a vibe you can't forget.",
    url: "https://pawarcafe.com",
    siteName: "Pawar Cafe",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Pawar Cafe Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawar Cafe | Taste of Udgir",
    description: "Udgir's most vibrant cafe — premium street food, legendary pizza, and a vibe you can't forget.",
    creator: "@PawarCafe",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen font-sans bg-surface text-on-surface transition-colors duration-400 relative">
        {/* Pro-max cinematic film grain overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[9999]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.035,
            mixBlendMode: 'overlay',
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
