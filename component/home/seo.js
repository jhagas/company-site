import { NextSeo } from "next-seo";
import { OrganizationJsonLd } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";

export default function Seo() {
  return (
    <>
      <NextSeo
        title="Techno.in"
        description="Advancing technological progress through instrumentation and intelligent control field."
        openGraph={{
          url: "https://techno.in/",
          title: "Techno.in",
          description: "Advancing technological progress through instrumentation and intelligent control field",
          images: [
            {
              url: "https://res.cloudinary.com/dgkou6c4w/image/upload/v1651337098/Screenshot_from_2022_04_30_23_44_35_a90a9703a6.png?updated_at=2022-04-30T16:44:59.833Z",
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          site_name: "techno.in",
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
            name: "Projects",
            item: "https://example.com/projects",
          },
          {
            position: 3,
            name: "Events",
            item: "https://example.com/event",
          },
        ]}
      />
    </>
  );
}
