import Header from "./home/header.js";
import Navbar from "./component/navbar.js";
import Seo from "./home/seo.js";
import Vismis from "./home/vismis.js";
import Overview from "./home/overview.js";
import Footer from "./component/footer.js";
import Event from "./home/event.js";

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
