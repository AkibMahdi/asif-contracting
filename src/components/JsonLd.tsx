export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Asif Contracting Corp",
    alternateName: "Asif Contracting",
    url: "https://asifcontracting.com",
    logo: "https://asifcontracting.com/logo.png",
    image: "https://asifcontracting.com/og-image.jpg",
    description:
      "NYC's premier construction company with 25+ years of experience. Licensed and insured general contractor specializing in home improvement, new construction, remodeling, alterations, interior and exterior work across all 5 boroughs of New York City.",
    telephone: "+1-718-686-6550",
    email: "mohsin1997@yahoo.com",
    foundingDate: "2000",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "63 Church Avenue",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11218",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.6182,
      longitude: -73.9271,
    },
    areaServed: [
      { "@type": "City", name: "New York City" },
      { "@type": "Borough", name: "Manhattan" },
      { "@type": "Borough", name: "Brooklyn" },
      { "@type": "Borough", name: "Queens" },
      { "@type": "Borough", name: "Bronx" },
      { "@type": "Borough", name: "Staten Island" },
      { "@type": "AdministrativeArea", name: "Nassau County" },
    ],
    serviceType: [
      "Home Improvement",
      "New Construction",
      "Remodeling",
      "Alterations",
      "Interior Work",
      "Exterior Work",
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Roofing",
      "Masonry",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Improvement",
            description: "Complete home renovations and improvements in NYC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Construction",
            description: "Residential and commercial new construction in NYC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remodeling",
            description: "Kitchen, bathroom, basement, and multi-room remodeling in NYC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alterations",
            description: "Structural and non-structural building alterations in NYC",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "187",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card",
    sameAs: [
      "https://www.facebook.com/asifcontracting",
      "https://www.instagram.com/asifcontracting",
      "https://www.yelp.com/biz/asif-contracting-new-york",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Asif Contracting Corp",
    url: "https://asifcontracting.com",
    logo: "https://asifcontracting.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-718-686-6550",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish", "Bengali", "Hindi", "Urdu"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Asif Contracting Corp",
    url: "https://asifcontracting.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://asifcontracting.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
