export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pizzata.com";
  
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Pizzata",
    "description": "Authentic Italian pizza restaurant. Born in Napoli, baked in Nitra.",
    "servesCuisine": "Italian",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nitra",
      "addressCountry": "SK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pizzata",
    "url": baseUrl,
    "logo": `${baseUrl}/solidlogo.svg`,
    "sameAs": [
      // Add social media links when available
      // "https://www.facebook.com/pizzata",
      // "https://www.instagram.com/pizzata",
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

