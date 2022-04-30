import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getStrapiMedia } from "../../lib/media";

function Projects({ projects }) {
  return (
    <div className="2xl:px-56 sm:px-24 px-12 py-16 flex flex-col gap-10">
      <div>
        <h1 className="font-work font-bold text-4xl text-black mb-1">
          Latest Projects
        </h1>
        <p className="font-work md:text-xl text-black text-lg">
          Our latest projects in renewable energy, transportation, and many
          more!
        </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-fit flex flex-col items-center">
          <div className="flex flex-row gap-3 flex-wrap justify-center w-full">
            {projects.map((item, index) => (
              <Link
                href={"/projects/detail/" + item.attributes.slug}
                key={index}
                passHref
              >
                <a className="w-72 overflow-clip shadow-lg rounded-md group">
                  <div className="bg-blue text-white font-work">
                    <div className="w-full h-40 overflow-clip relative">
                      <div className="h-40 group-hover:scale-110 transition duration-300">
                        <Image
                          src={getStrapiMedia(item.attributes.image)}
                          alt={
                            item.attributes.image.data.attributes
                              .alternativeText
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="w-full h-44 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-75 group-hover:opacity-100 transition-opacity duration-300 -translate-y-40">
                        <p className="font-lato font-semibold text-lg">SEE DETAILS</p>
                      </div>
                    </div>
                    <div className="px-3 py-3">
                      <p className="font-bold text-base whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.attributes.title}
                      </p>
                      <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.attributes.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/projects" passHref>
          <a className="bg-black rounded-lg shadow-md text-white py-4 px-8 text-center font-work font-bold md:text-xl text-lg hover:bg-blue2 transition-colors">
            All Projects
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
