import { NextSeo } from "next-seo";
import { OrganizationJsonLd } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";

export default function Seo() {
  return (
    <>
      <NextSeo
        title="Techno.in"
        description="This example uses more of the available config options."
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Techno.in",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "SiteName",
        }}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="https://www.example.com/photos/logo.jpg"
        legalName="PT. Indo Instrument Tech"
        name="Techno.in"
        address={{
          streetAddress: "Laboratorium Instrumentasi, Departemen Fisika ITS",
          addressLocality: "Surabaya",
          addressRegion: "Jawa Timur",
          postalCode: "62111",
          addressCountry: "ID",
        }}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English", "Spanish", "French"],
          },
        ]}
        url="https://www.purple-fox.io/"
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "About Us",
            item: "https://example.com/about",
          },
          {
            position: 2,
            name: "Products",
            item: "https://example.com/products",
          },
          {
            position: 3,
            name: "Contact Us",
            item: "https://example.com/contacts",
          },
        ]}
      />
    </>
  );
}
