import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
  metadataBase: new URL("https://advocatesatishmor.com"),
  title: "Advocate Satish Mor | Property, Criminal & Civil Lawyer in Chandigarh",
  description:
    "Experienced Advocate Satish Mor handling property disputes, criminal cases, and civil litigation at Punjab & Haryana High Court. Book your consultation in Chandigarh today.",
  keywords: [
    "Criminal Lawyer in Chandigarh",
    "Criminal Advocate in Chandigarh",
    "Best Criminal Lawyer Chandigarh",
    "Property Lawyer Chandigarh",
    "Property Dispute Lawyer",
    "Criminal Defense Lawyer",
    "Bail Lawyer Chandigarh",
    "High Court Advocate Chandigarh",
    "Punjab and Haryana High Court Lawyer",
    "Civil and Criminal Lawyer",
    "Civil Lawyer Chandigarh",
    "Real Estate Lawyer Chandigarh",
    "Legal Consultation Chandigarh",
    "Civil Litigation Chandigarh",
    "Inheritance Lawyer Chandigarh",
    "Property Advocate Chandigarh",
    "Land Dispute Lawyer Chandigarh",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://advocatesatishmor.com",
    siteName: "Advocate Satish Mor",
    title: "Advocate Satish Mor | Property, Criminal & Civil Lawyer in Chandigarh",
    description:
      "Experienced Advocate Satish Mor handling property disputes, criminal cases, and civil litigation at Punjab & Haryana High Court. Book your legal consultation in Chandigarh today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advocate Satish Mor - Property & Civil Law Expert in Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Satish Mor | Property, Criminal & Civil Lawyer in Chandigarh",
    description:
      "Experienced Advocate Satish Mor handling property disputes, criminal cases, and civil litigation at Punjab & Haryana High Court. Book your legal consultation in Chandigarh today.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://advocatesatishmor.com",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

/* Schema.org structured data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness", "Organization"],
      "@id": "https://advocatesatishmor.com/#organization",
      "name": "Advocate Satish Mor",
      "url": "https://advocatesatishmor.com",
      "logo": "https://advocatesatishmor.com/logo.png",
      "image": "https://advocatesatishmor.com/og-image.png",
      "description": "Professional legal services in Chandigarh specializing in criminal defense, property law, civil litigation, and real estate matters.",
      "telephone": "+919416280805",
      "email": "advsatishmor@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Punjab & Haryana High Court",
        "addressLocality": "Chandigarh",
        "addressRegion": "CH",
        "postalCode": "160001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.7412",
        "longitude": "76.7684"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "areaServed": [
        {
          "@type": "State",
          "name": "Punjab"
        },
        {
          "@type": "State",
          "name": "Haryana"
        },
        {
          "@type": "City",
          "name": "Chandigarh"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-94162-80805",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "pa"]
      },
      "sameAs": [
        "https://www.linkedin.com/in/placeholder",
        "https://twitter.com/placeholder"
      ]
    },
    {
      "@type": "Attorney",
      "@id": "https://advocatesatishmor.com/#person",
      "name": "Satish Mor",
      "jobTitle": "Advocate",
      "worksFor": {
        "@id": "https://advocatesatishmor.com/#organization"
      },
      "url": "https://advocatesatishmor.com",
      "alumniOf": {
        "@type": "Organization",
        "name": "Panjab University"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://advocatesatishmor.com/#website",
      "url": "https://advocatesatishmor.com",
      "name": "Advocate Satish Mor",
      "publisher": {
        "@id": "https://advocatesatishmor.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://advocatesatishmor.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does legal consultation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consultation fees vary depending on the complexity of the matter. Please contact us directly to discuss your case and get an accurate estimate."
          }
        },
        {
          "@type": "Question",
          "name": "How do I hire an advocate in Chandigarh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can hire an advocate by scheduling an initial consultation, discussing your legal matter, and signing a formal engagement agreement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you appear before Punjab & Haryana High Court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Advocate Satish Mor extensively practices and appears before the Punjab & Haryana High Court in Chandigarh."
          }
        },
        {
          "@type": "Question",
          "name": "Can consultations happen online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer secure online legal consultations via video call or phone for clients who cannot visit our Chandigarh office in person."
          }
        },
        {
          "@type": "Question",
          "name": "How are property disputes handled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle property disputes through thorough title verification, mediation when possible, and aggressive civil litigation when necessary to protect your ownership rights."
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
