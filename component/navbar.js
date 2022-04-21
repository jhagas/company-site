import Image from "next/image";
import Link from "next/link";
import logo from "./home/image/logo.svg";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [color, setColor] = useState("0");

  const listenScrollEvent = (event) => {
    if (window.scrollY === 0) {
      return setColor("0");
    } else if (window.scrollY <= 25) {
      return setColor("0.25");
    } else if (window.scrollY <= 50) {
      return setColor("0.5");
    } else if (window.scrollY <= 75) {
      return setColor("0.75");
    } else if (window.scrollY <= 100) {
      return setColor("1");
    } else {
      return setColor("1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      style={{ backgroundColor: `rgb(26 45 107 / ${color})` }}
      className={`fixed top-0 right-0 left-0 z-50 bg-blue2 drop-shadow-md flex flex-row justify-between items-center md:pl-16 md:pr-24 pt-2 pb-2 pl-8 pr-8`}
    >
      <div className="w-12 flex flex-row items-center md:w-16">
        <Image src={logo} alt="techno.in logo" />
      </div>
      <div className="md:flex md:flex-row hidden text-white gap-9 font-lato font-extrabold text-sm">
        <Link href="/" passHref><a className="hover:text-orange1 transition-colors">HOME</a></Link>
        <Link href="/about" passHref><a className="hover:text-orange1 transition-colors">ABOUT</a></Link>
        <Link href="/projects" passHref><a className="hover:text-orange1 transition-colors">PROJECT</a></Link>
        <Link href="/event" passHref><a className="hover:text-orange1 transition-colors">EVENT</a></Link>
      </div>
      <div className="md:hidden">
        <Dropdown />
      </div>
    </div>
  );
}
