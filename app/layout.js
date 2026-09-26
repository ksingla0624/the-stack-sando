import './globals.css'

export const metadata = {
  title: 'STACK — Gourmet Sandwiches & Flatbreads | Sector 65, Gurugram',
description: 'STACK is Gurugram\'s first gourmet sandwich and flatbread brand at M3M 65th Avenue, Sector 65. Panuozzo, Crogel, Japanese Milk Bread, Florentine flatbreads — bold global flavours, made fresh to order. Now on Zomato & Swiggy.',
keywords: 'STACK, Stack Sando, gourmet sandwich Gurugram, flatbread Gurugram, panuozzo Gurugram, crogel sandwich, milk bread sandwich Gurugram, best sandwich Sector 65, M3M 65th Avenue restaurant, gourmet food Gurugram, sandwich delivery Gurugram, Zomato Gurugram sandwich, Swiggy Gurugram sandwich, premium sandwich Gurugram, Korean fried chicken sandwich Gurugram, butter chicken sandwich Gurugram, katsu sando Gurugram',
  authors: [{ name: 'STACK' }],
  creator: 'STACK',
  publisher: 'STACK',
  category: 'restaurant',
applicationName: 'STACK',
  metadataBase: new URL('https://stacksando.com'),
  alternates: { canonical: 'https://stacksando.com' },
  openGraph: {
    title: 'STACK — Gourmet Sandwiches & Flatbreads | Gurugram',
    description: 'Gurugram\'s first premium bread destination. Gourmet sandwiches & flatbreads, made to order. Order on Zomato & Swiggy.',
    url: 'https://stacksando.com',
    siteName: 'STACK',
    images: [{ url: '/media/stack_icon.png', width: 1200, height: 630, alt: 'STACK Gourmet Sandwiches Gurugram' }],
    locale: 'en_IN',
    type: 'website',
    other: {
      'geo.region':      'IN-HR',
      'geo.placename':   'Gurugram',
      'geo.position':    '28.4089;77.0823',
      'ICBM':            '28.4089, 77.0823',
      'og:locale:alternate': 'hi_IN',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACK — Gourmet Sandwiches & Flatbreads',
    description: 'Gurugram\'s first premium bread destination. Order on Zomato & Swiggy.',
    images: ['/media/stack_icon.png'],
  },
  icons: {
  icon: [
    { url: '/favicon.ico',       sizes: 'any'     },
  ],  shortcut: '/favicon.ico',
},
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'madqm27UjWPhsV9MOkbStjd4g8OLQDMghTmpmMCsAZY' },
  manifest: '/manifest.json',
}

// Structured data for Google (LocalBusiness schema)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'STACK',
  description: 'Gurugram\'s first gourmet sandwich and flatbread destination',
  url: 'https://stacksando.com',
  telephone: '+918697390093',
  email: 'hello@stacksando.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R5, LG-23, M3M 65th Avenue, Sector 65',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122018',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.4089, longitude: 77.0823 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '12:30', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '12:30', closes: '00:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:30', closes: '00:00' },
  ],
  servesCuisine: ['Sandwiches', 'Flatbreads', 'Gourmet', 'Global'],
  priceRange: '₹₹',
  hasMenu: 'https://stacksando.com/#menu',
  sameAs: ['https://instagram.com/thestacksando'],
  // Add inside the Restaurant schema
image: 'https://stacksando.com/media/og-image.jpg',
logo: 'https://stacksando.com/media/Stack Logo Blue.jpeg',
currenciesAccepted: 'INR',
paymentAccepted: 'Cash, Credit Card, UPI',
numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },

// Add a separate BreadcrumbList schema alongside the Restaurant schema
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://stacksando.com' },
    { '@type': 'ListItem', position: 2, name: 'Menu',      item: 'https://stacksando.com/#menu' },
    { '@type': 'ListItem', position: 3, name: 'Why STACK', item: 'https://stacksando.com/#why-stack' },
    { '@type': 'ListItem', position: 4, name: 'Find Us',   item: 'https://stacksando.com/#order' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,900&display=swap"
    rel="stylesheet"
  />
  {/* Preload hero image — improves LCP */}
  <link
    rel="preload"
    as="image"
    href="/media/WhatsApp Image 2026-05-26 at 23.25.56.jpeg"
    fetchpriority="high"
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
  />
</head>
      <body>{children}</body>
    </html>
  )
}

