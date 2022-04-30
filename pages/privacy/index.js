import Footer from "../../component/footer";
import Navbar from "../../component/navbar2";
import Seo from "../../component/seo";
import { fetchAPI } from "../../lib/api";

const info = {
  title: "Our Privacy Policy | Techno.in",
  url: "/privacy",
  description:
    "Privacy Policy for PT. Indo Instrument Tech. In short, we don't track you, and we don't collect any information from you",
  images: {
    url: "https://res.cloudinary.com/dgkou6c4w/image/upload/v1651337098/Screenshot_from_2022_04_30_23_44_35_a90a9703a6.png?updated_at=2022-04-30T16:44:59.833Z",
    alt: "Indo Instrument Site Logo",
  },
  sitename: "techno.in",
};

export default function Privacy({ privacy }) {
  return (
    <div className="bg-gray">
      <Seo info={info} />
      <Navbar />
      <div
        className="ck-content px-12 py-12 md:py-16 md:px-24 lg:px-32"
        dangerouslySetInnerHTML={{ __html: privacy.attributes.article }}
      ></div>
      <div className="bg-gradient-to-t from-blue/75 to-transparent h-28"></div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [privacyRes] = await Promise.all([fetchAPI("/privacy")]);

  return {
    props: {
      privacy: privacyRes.data,
    },
    revalidate: 1,
  };
}
