import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" md:p10 flex w-72 flex-shrink-0 cursor-pointer snap-center flex-col items-center  space-y-0 rounded-3xl bg-[#FFFFFF] bg-gradient-to-tr from-white to-darkGreen/20  p-5 opacity-100 drop-shadow-xl transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[800px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" mb-2 h-28 w-28 rounded-full object-cover object-center md:invisible md:h-0 md:w-0 xl:visible xl:h-[100px] xl:w-[100px]"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className=" items-center md:flex md:justify-between">
          <div>
            <h4 className="text-lg font-light text-black md:text-2xl">
              {experience?.jobTitle}
            </h4>
            <p className="text-md mt-1 font-bold  text-lightGreen md:text-xl">
              {experience?.company}
            </p>
            <div className="my-2 flex flex-wrap space-x-2">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible mb-0 h-0 w-0 rounded-full object-cover object-center md:visible md:h-28  md:w-28 xl:invisible xl:h-0 xl:w-0"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="py-2 text-sm uppercase text-gray-500 md:py-5 md:text-lg">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ul className="ml-0 list-disc space-y-2  px-0 pr-5 pl-5 text-justify text-sm text-black scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80 md:px-10 md:text-lg">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
