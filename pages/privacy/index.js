import Footer from "../../component/footer";
import Navbar from "../../component/navbar2";
import { fetchAPI } from "../../lib/api";

export default function Privacy({ privacy }) {
  return (
    <div className="bg-gray">
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
  const [privacyRes] = await Promise.all([
    fetchAPI("/privacy"),
  ]);

  return {
    props: {
      privacy: privacyRes.data,
    },
    revalidate: 1,
  };
}
