import Image from "next/image";
import Link from "next/link";
import pic from "./home/image/footer.png";
import logo from "./home/image/logo.svg";

export default function Footer() {
  return (
    <div className="bg-blue">
      <div className="w-full">
        <Image src={pic} alt="footer background" layout="responsive" />
      </div>
      <div className="p-10 flex flex-row flex-wrap lg:justify-between justify-center">
        <div className="flex flex-row gap-x-20 gap-y-10 font-lato font-medium text-md flex-wrap sm:justify-start justify-center">
          <div className="lg:w-48 sm:w-40 w-28">
            <Image src={logo} alt="footer logo" />
          </div>
          <div className="flex flex-row gap-x-20 text-white">
            <div className="sm:pt-6">
              <h2 className="font-extrabold text-xl mb-5">Contact</h2>
              <div className="flex flex-col gap-1">
                <Link href="mailto:elektronikainstrumentasi21@gmail.com" passHref>
                  <a className="underline ">Email</a>
                </Link>
                <Link href="https://www.instagram.com/indoinstrument.tech/" passHref>
                  <a className="underline ">Instagram</a>
                </Link>
                <Link href="https://www.linkedin.com/company/indoinstech/" passHref>
                  <a className="underline ">Linkedin</a>
                </Link>
              </div>
            </div>
            <div className="sm:pt-6 sm:mr-20">
              <h2 className="font-extrabold text-xl mb-5">About Us</h2>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" passHref>
                  <a className="underline">Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:text-right text-center pt-12 md:pr-6 pr-0 font-lato font-medium text-white sm:text-sm text-xs">
          <p>
            Physics Instrumentation Laboratory
            <br />
            Sepuluh Nopember Institute of Technology
            <br />
            Surabaya, 60111, East Java
            <br />
            Faculty of Science and Data Analytics
            <br />© Copyright 2022, Indo Instrument Technology.
          </p>
        </div>
      </div>
    </div>
  );
}
