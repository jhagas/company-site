import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import Seo from "../../component/seo";

const grad1 = {
  background:
    "linear-gradient(90deg, #F2B278 3.6%, #D8AB56 17.34%, #FAF5F3 28.26%, #E47321 61.86%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: "rgba(132,128,128,.5)",
};

export default function About({ about }) {
  const info = {
    title: "About Us | Techno.in",
    url: "/about",
    description: about.attributes.description,
    images: {
      url: "https://res.cloudinary.com/dgkou6c4w/image/upload/v1651337098/Screenshot_from_2022_04_30_23_44_35_a90a9703a6.png?updated_at=2022-04-30T16:44:59.833Z",
      alt: "Indo Instrument Site Logo",
    },
    sitename: "techno.in",
  };
  return (
    <div className="bg-gray">
      <Seo info={info} />
      <Navbar />
      <div className="flex h-fit">
        <div className="relative" style={{ flex: "0 0 100%" }}>
          <div className="overflow-hidden">
            <Image
              src={getStrapiMedia(about.attributes.bg)}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt={about.attributes.bg.data.attributes.alternativeText}
              className="brightness-[.7]"
            />
          </div>
          <div className="h-full flex flex-col justify-center px-16 md:px-36 py-28">
            <div className="lg:text-4xl md:text-3xl text-2xl font-dm font-bold flex flex-col text-white w-fit drop-shadow-md">
              <p style={grad1}>ABOUT US</p>
            </div>
            <div className="font-lato lg:text-lg text-gray sm:mt-2 drop-shadow-md">
              <p>{about.attributes.description.split("\n\n")[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ck-content px-12 py-12 md:py-16 md:px-24 lg:px-32"
        dangerouslySetInnerHTML={{ __html: about.attributes.article }}
      ></div>
      <div className="bg-gradient-to-t from-blue/75 to-transparent h-28"></div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [aboutRes] = await Promise.all([
    fetchAPI("/about", { populate: "bg" }),
  ]);

  return {
    props: {
      about: aboutRes.data,
    },
    revalidate: 1,
  };
}
