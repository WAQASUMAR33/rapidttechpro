import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ChatWithWhatsapp from "@/components/Chatwithwhatsapp";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

import RootLayoutClient from "@/components/TrackingScripts";

export const metadata = {
  title: "RapidTechPro | Custom Software Development Company",
  description: "RapidTechPro provides expert custom software development, mobile app solutions, and UI/UX design. We specialize in automating workflows and scaling business growth with innovative technology.",
  keywords: "software development, mobile app development, UI/UX design, custom software solutions, RapidTechPro, web development, IT consultancy",
  metadataBase: new URL('https://rapidtechpro.com'), // Added for canonical support
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "RapidTechPro | Custom Software Development Company",
    description: "Expert custom software development and mobile app solutions to scale your business.",
    url: "https://rapidtechpro.com",
    siteName: "RapidTechPro",
    images: [
      {
        url: "/company/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidTechPro | Custom Software Development Company",
    description: "Expert custom software development and mobile app solutions.",
    images: ["/company/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RapidTechPro",
              "url": "https://rapidtechpro.com",
              "logo": "https://rapidtechpro.com/company/logo.png",
              "description": "Expert custom software development and mobile app solutions.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923403051059",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="font-manrope antialiased text-gray-900 min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-TB98WTW7`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Providers>
          <RootLayoutClient />
          {children}
          <ChatWithWhatsapp />
        </Providers>
      </body>
    </html>
  );
}

