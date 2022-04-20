import Image from "next/image";
import Buttoncomp from "../button";
import pic from "./image/overview.png";

export default function Overview() {
  return (
    <>
      <div className="bg-orange px-16 py-[4rem] hidden lg:block">
        <div className="relative flex flex-row justify-between">
          <div className="">
            <Image src={pic} alt="arduino and project board" />
          </div>
          <div className="flex flex-col justify-center absolute right-0 -translate-y-1/2 top-1/2">
            <div className="bg-blue px-12 py-12 text-white w-[30rem]">
              <h1 className="font-work font-bold text-3xl mb-4">ABOUT US</h1>
              <div className="font-work text-lg flex flex-col gap-4 indent-4 mb-6">
                <p>
                  Indo Instrument Technology is a start-up company in the
                  instrumentation and control systems field with the latest
                  technology based on theoretical studies on environmental
                  problems that are needed from all sectors.
                </p>
                <p>
                  The initial idea of developing various instruments was based
                  on research that had been carried out by students of the ITS
                  Physics Electronics Instrumentation Laboratory. The equipment
                  that has been produced is very much needed by the community to
                  support technological developments, for example in the
                  industry and transportation field.
                </p>
              </div>
              <Buttoncomp text="More on Our History" href="/about" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange to-blue pt-10 block lg:hidden">
        <div className="relative justify-between">
          <div className="flex flex-col justify-center ">
            <Image
              src={pic}
              layout="fill"
              relative
              objectFit="cover"
              quality={100}
              alt="arduino and project board"
              className="brightness-[.5]"
            />
            <div className="px-10 py-8 text-white z-10 drop-shadow-md">
              <h1 className="font-work font-bold text-2xl mb-4">ABOUT US</h1>
              <div className="font-work text-md flex flex-col gap-4 mb-6">
                <p>
                  Indo Instrument Technology is a start-up company in the
                  instrumentation and control systems field with the latest
                  technology based on theoretical studies on environmental
                  problems that are needed from all sectors.
                </p>
                <p>
                  The initial idea of developing various instruments was based
                  on research that had been carried out by students of the ITS
                  Physics Electronics Instrumentation Laboratory. The equipment
                  that has been produced is very much needed by the community to
                  support technological developments, for example in the
                  industry and transportation field.
                </p>
              </div>
              <Buttoncomp text="More on Our History" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
