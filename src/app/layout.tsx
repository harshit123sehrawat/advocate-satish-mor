import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import FramerProvider from "@/components/FramerProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://advocate-satish-mor.vercel.app"),
  title: "Advocate Satish Mor | Lawyer & Legal Services in Chandigarh",
  description:
    "Advocate Satish Mor is a Criminal Lawyer in Chandigarh specializing in property disputes, civil litigation, bail matters and High Court cases.",
  keywords: [
    "Criminal Lawyer in Chandigarh",
    "Property Lawyer Chandigarh",
    "Best Criminal Lawyer Chandigarh",
    "Property Dispute Lawyer",
    "Criminal Defense Lawyer",
    "Civil Litigation Chandigarh",
    "High Court Advocate Chandigarh",
  ],
  authors: [{ name: "Advocate Satish Mor" }],
  creator: "Advocate Satish Mor",
  publisher: "Advocate Satish Mor",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Advocate Satish Mor",
    title: "Advocate Satish Mor | Lawyer & Legal Services in Chandigarh",
    description:
      "Advocate Satish Mor is a Criminal Lawyer in Chandigarh specializing in property disputes, civil litigation, bail matters and High Court cases.",
    url: "https://advocate-satish-mor.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advocate Satish Mor official website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Satish Mor | Lawyer & Legal Services in Chandigarh",
    description:
      "Advocate Satish Mor is a Criminal Lawyer in Chandigarh specializing in property disputes, civil litigation, bail matters and High Court cases.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://advocate-satish-mor.vercel.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://advocate-satish-mor.vercel.app/#website",
      "url": "https://advocate-satish-mor.vercel.app/",
      "name": "Advocate Satish Mor",
      "description": "Official website of Advocate Satish Mor.",
      "publisher": {
        "@id": "https://advocate-satish-mor.vercel.app/#legalservice"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://advocate-satish-mor.vercel.app/#webpage",
      "url": "https://advocate-satish-mor.vercel.app/",
      "name": "Advocate Satish Mor | Lawyer & Legal Services in Chandigarh",
      "dateModified": "2026-07-13T12:00:00.000Z",
      "isPartOf": {
        "@id": "https://advocate-satish-mor.vercel.app/#website"
      },
      "about": {
        "@id": "https://advocate-satish-mor.vercel.app/#legalservice"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://advocate-satish-mor.vercel.app/og-image.png"
      }
    },
    {
      "@type": ["LegalService", "Organization", "LocalBusiness"],
      "@id": "https://advocate-satish-mor.vercel.app/#legalservice",
      "name": "Advocate Satish Mor",
      "legalName": "Satish Mor",
      "url": "https://advocate-satish-mor.vercel.app/",
      "image": "https://advocate-satish-mor.vercel.app/og-image.png",
      "logo": "https://advocate-satish-mor.vercel.app/logo.png",
      "description": "Advocate Satish Mor is a Criminal Lawyer in Chandigarh specializing in property disputes, civil litigation, bail matters, and Punjab & Haryana High Court cases.",
      "telephone": "+91-9416280805",
      "email": "advsatishmor@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Punjab & Haryana High Court",
        "addressLocality": "Chandigarh",
        "addressRegion": "Chandigarh",
        "postalCode": "160001",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chandigarh"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Punjab"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Haryana"
        }
      ],
      "priceRange": "₹₹",
      "founder": {
        "@type": "Person",
        "name": "Satish Mor",
        "jobTitle": "Advocate"
      },
      "sameAs": [
        "https://www.linkedin.com/in/satish-mor"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Legal Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Criminal Law",
              "serviceType": "Criminal Defense and Representation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Property Law",
              "serviceType": "Property Dispute Resolution"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Civil Law",
              "serviceType": "Civil Litigation and Dispute Resolution"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://advocate-satish-mor.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you handle civil cases in Chandigarh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Advocate Satish Mor extensively handles civil litigation and dispute resolution at the Punjab & Haryana High Court in Chandigarh."
          }
        },
        {
          "@type": "Question",
          "name": "How are property disputes handled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle property disputes through thorough title verification, mediation when possible, and aggressive civil litigation when necessary to protect your ownership rights."
          }
        },
        {
          "@type": "Question",
          "name": "Can consultations happen online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer secure online legal consultations via video call or phone for clients who cannot visit our Chandigarh office in person."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <FramerProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </FramerProvider>
      </body>
    </html>
  );
}
