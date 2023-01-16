import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="mx-auto flex w-[400px] flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg p-10 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-24 w-24 rounded-full object-cover xl:h-[200px] xl:w-[200px]"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="mt-1 text-xl font-bold">{experience?.company}</p>
        <div className="my-2 flex space-x-2">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="flex h-10 w-10 flex-wrap rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>

        <p className="py-5 uppercase text-gray-500">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        {/*ml-0 list-disc space-y-2  px-0 pr-5 pl-5 text-justify text-sm text-black scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80 md:px-10 md:text-lg*/}
        <ul className="ml-5 list-disc space-y-4 text-lg">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
