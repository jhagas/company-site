import Image from "next/image";
import Buttoncomp from "../component/button.js";
import bg1 from "./image/bg1.png";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const grad1 = {
  background:
    "linear-gradient(90deg, #F2B278 3.6%, #D8AB56 17.34%, #FAF5F3 28.26%, #E47321 61.86%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: "rgba(132,128,128,.5)",
};

const grad2 = {
  background:
    "linear-gradient(90.14deg, #F4BB4E 8.98%, #F3B544 11.97%, #E0E0E4 11.98%, #FAF5F3 30.44%, rgba(255, 123, 28, 0.8) 55.05%, #E0E0E4 66.04%, #FF7B1C 68.67%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: "rgba(132,128,128,.5)",
};

export default function Header() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 5, skipSnaps: false },
    [Autoplay(), WheelGesturesPlugin()]
  );

  const [started, setStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (emblaApi && started) {
      setTimeout(() => {
        emblaApi.scrollNext();
      }, 4000);
    }
  }, []);

  const DotButton = ({ selected }) => (
    <div
      className={`w-[5px] h-[5px] rounded-full transition ${selected ? "bg-orange" : "bg-gray2"}`}
    />
  );

  return (
    <div className=" overflow-hidden embla" ref={emblaRef}>
      <div className="flex h-96 md:h-[34rem] lg:h-[40rem] embla_container">
        <div className="embla_slide relative" style={{ flex: "0 0 100%" }}>
          <div className="overflow-hidden">
            <Image
              src={bg1}
              layout="fill"
              relative
              objectFit="cover"
              quality={100}
              alt="background"
              className="-z-10 brightness-[.7]"
            />
          </div>
          <div className="h-full flex flex-col justify-center md:mx-36 lg:w-[36rem] md:w-96 mx-16 pt-4">
            <div className="lg:text-5xl md:text-4xl text-3xl font-dm font-bold flex flex-col w-fit drop-shadow-md">
              <p style={grad1}>Indo Instrument</p>
              <p style={grad2} className="pb-1">
                Technology
              </p>
            </div>
            <div className="font-lato sm:font-semibold lg:text-xl text-lg text-gray sm:mt-2 drop-shadow-md">
              <p>
                Advancing technological progress through instrumentation and
                intelligent control field
              </p>
            </div>
            <Buttoncomp href="/projects" text="Find Out More!" />
          </div>
        </div>
        <div className="embla_slide relative" style={{ flex: "0 0 100%" }}>
          <div className="overflow-hidden">
            <Image
              src={bg1}
              layout="fill"
              relative
              objectFit="cover"
              quality={100}
              alt="background"
              className="-z-10 brightness-[.7]"
            />
          </div>
          <div className="h-full flex flex-col justify-center md:mx-36 lg:w-[36rem] md:w-96 mx-16 pt-4">
            <div className="lg:text-5xl md:text-4xl text-3xl font-dm font-bold flex flex-col w-fit drop-shadow-md">
              <p style={grad1}>Indo Instrument</p>
              <p style={grad2} className="pb-1">
                Technology
              </p>
            </div>
            <div className="font-lato sm:font-semibold lg:text-xl text-lg text-gray sm:mt-2 drop-shadow-md">
              <p>
                Advancing technological progress through instrumentation and
                intelligent control field
              </p>
            </div>
            <Buttoncomp href="/projects" text="Find Out More!" />
          </div>
        </div>
      </div>
      <div className="embla__dots relative -translate-y-5 opacity-80 shadow-lg z-30 flex flex-row w-screen justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} selected={index === selectedIndex} />
        ))}
      </div>
    </div>
  );
}
