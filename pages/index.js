import Header from "../component/home/header.js";
import Navbar from "../component/navbar.js";
import Seo from "../component/home/seo.js";
import Vismis from "../component/home/vismis.js";
import Overview from "../component/home/overview.js";
import Footer from "../component/footer.js";
import Event from "../component/home/event.js";

export default function Home() {
  return (
    <div>
      <Seo />
      <Navbar />
      <Header />
      <Vismis />
      <Overview />
      <Event />
      <Footer />
    </div>
  );
}
