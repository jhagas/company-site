import Header from "../component/home/header.js";
import Navbar from "../component/navbar.js";
import Seo from "../component/home/seo.js";
import Vismis from "../component/home/vismis.js";
import Overview from "../component/home/overview.js";
import Footer from "../component/footer.js";
import Event from "../component/home/event.js";
import Projects from "../component/home/project.js";
import { fetchAPI } from "../lib/api";
import Email from "../component/home/email.js";

export default function Home({ projects, mainheader, header, about }) {
  return (
    <div>
      <Seo />
      <Navbar />
      <Header main={mainheader} add={header} />
      <Email />
      <Vismis />
      <Overview info={about} />
      <Projects projects={projects} />
      <Event />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectRes, mainheadRes, headRes, aboutRes] = await Promise.all([
    fetchAPI("/projects", { populate: ["image", "project_category"] }),
    fetchAPI("/mainheader", { populate: "bg" }),
    fetchAPI("/headers", { sort: "publishedAt:desc", populate: "bg" }),
    fetchAPI("/about", { populate: "bg" }),
  ]);

  return {
    props: {
      projects: projectRes.data,
      mainheader: mainheadRes.data,
      header: headRes.data,
      about: aboutRes.data,
    },
    revalidate: 1,
  };
}
