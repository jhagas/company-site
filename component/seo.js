import { NextSeo } from "next-seo";

// const info = {
//   title: "",
//   url: "/",
//   description: "",
//   images: {
//     url: "",
//     alt: "",
//     type: "image/png",
//   },
//   sitename: ""
// }

export default function Seo({info}) {
  return (
      <NextSeo
        title={info.title}
        description={info.description}
        openGraph={{
          url: info.url,
          title: info.title,
          description: info.description,
          images: [
            {
              url: info.images.url,
              alt: info.images.alt,
              type: "image/png",
            },
          ],
          site_name: info.sitename,
        }}
      />
  );
}
