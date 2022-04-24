import { NextSeo } from "next-seo";

export default function Seo() {
  return (
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
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          site_name: "SiteName",
        }}
      />
  );
}
