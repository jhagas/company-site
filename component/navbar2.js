import Image from "next/image";
import Link from "next/link";
import logo from "./home/image/logo.svg";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <div
      className={`sticky z-50 top-0 bg-blue2 drop-shadow-md flex flex-row justify-between items-center md:pl-[4.25rem] md:pr-24 py-2 px-8`}
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
