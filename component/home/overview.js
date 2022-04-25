import Image from "next/image";
import { getStrapiMedia } from "../../lib/media.js";
import Buttoncomp from "../button.js";

export default function Overview({ info }) {
  return (
    <>
      <div className="bg-orange px-16 py-[4rem] hidden lg:block">
        <div className="relative flex flex-row justify-between max-w-screen-xl my-0 mx-auto">
          <div>
            <Image
              src={getStrapiMedia(info.attributes.bg)}
              width={info.attributes.bg.data.attributes.width}
              height={info.attributes.bg.data.attributes.height}
              alt={info.attributes.bg.data.attributes.alternativeText}
            />
          </div>

          <div className="flex flex-col justify-center absolute right-0 -translate-y-1/2 top-1/2">
            <div className="bg-blue px-12 py-12 text-white w-[30rem]">
              <h1 className="font-work font-bold text-3xl mb-4">
                {info.attributes.title}
              </h1>
              <div className="font-work text-lg flex flex-col gap-4 indent-4 mb-6">
                {info.attributes.description.split("\n\n").map((desc, line) => (
                  <p key={line}>{desc}</p>
                ))}
              </div>
              <Buttoncomp text={info.attributes.button} href="/about" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange to-blue py-10 block lg:hidden">
        <div className="relative justify-between">
          <div className="flex flex-col justify-centere ">
            <Image
              src={getStrapiMedia(info.attributes.bg)}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="background"
              className="brightness-[.5]"
            />
            <div className="md:px-20 sm:px-16 px-12 py-8 text-white z-10 drop-shadow-md">
              <h1 className="font-work font-bold sm:text-3xl text-2xl mb-4">
                {info.attributes.title}
              </h1>
              <div className="font-work sm:text-lg text-md flex flex-col gap-4 mb-6">
                {info.attributes.description.split("\n\n").map((desc, line) => (
                  <p key={line}>{desc}</p>
                ))}
              </div>
              <Buttoncomp text={info.attributes.button} href="/about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
