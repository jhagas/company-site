import Image from "next/image";
import research from "./image/research.svg";
import innovation from "./image/innovation.svg";
import education from "./image/education.svg";

export default function Vismis() {
  return (
    <div>
      <div className="flex flex-col items-center gap-16 bg-gray sm:px-0 px-4 py-16">
        <div className="max-w-[40rem] text-center">
          <h1 className="md:text-4xl text-3xl font-bold font-work">Our Vision</h1>
          <p className="sm:text-lg font-lato font-medium mt-3">
            Become the leading company in instrumentation and intelligent
            control field in order to solve complex problem through scientific
            research and continuous innovations.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <h1 className="md:text-4xl text-3xl font-bold font-work">Our Mission</h1>
          <div className="flex flex-row flex-wrap justify-center px-4 gap-12 gap-y-8 ">
            <div className="bg-white transition hover:border-blue hover:border-2 hover:scale-105 rounded-md border-[1.4px] border-gray3 w-[292px] h-[235px] p-7 flex flex-col gap-2">
              <div className="w-10 h-10">
                <Image src={research} alt="stack"></Image>
              </div>
              <h2 className="font-work font-bold text-xl text-gray1">
                Research
              </h2>
              <p className="font-work text-base text-gray2">
                Conducting research and technological development in improving
                the quality of lives in society
              </p>
            </div>
            <div className="bg-white transition hover:border-blue hover:border-2 hover:scale-105 rounded-md border-[1.4px] border-gray3 w-[292px] h-[235px] p-6 flex flex-col gap-2">
              <div className="w-10 h-10">
                <Image src={innovation} alt="stack"></Image>
              </div>
              <h2 className="font-work font-bold text-xl text-gray1">
                Innovation
              </h2>
              <p className="font-work text-base text-gray2">
                Creating disruptive innovations in order to support the
                advancement of national technological advancement
              </p>
            </div>
            <div className="bg-white transition hover:border-blue hover:border-2 hover:scale-105 rounded-md border-[1.4px] border-gray3 w-[292px] h-[235px] p-6 flex flex-col gap-2">
              <div className="w-10 h-10">
                <Image src={education} alt="stack"></Image>
              </div>
              <h2 className="font-work font-bold text-xl text-gray1">
                Education
              </h2>
              <p className="font-work text-base text-gray2">
                Preparing bright and competent human resources in the field of
                instrumentation engineering and control systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
