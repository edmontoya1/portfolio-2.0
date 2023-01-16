import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-xl uppercase tracking-[20px] text-gray-500 md:top-24 md:text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10 md:p-44"
          >
            {project?.image && (
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=" h-28 object-contain md:h-72 xl:h-80"
                src={urlFor(project?.image).url()}
                alt=""
              />
            )}
            <div className="max-w-6xl space-y-5 px-0 md:space-y-10 md:px-10">
              <h4 className="text-center text-lg font-semibold md:text-2xl lg:text-4xl">
                <span className="underline decoration-darkGreen/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2 ">
                {project?.technologies &&
                  project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-10 w-10 rounded-full object-cover"
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
              </div>

              <p className="md:text-md text-justify text-sm lg:text-lg ">
                {project?.summary}
              </p>

              {project?.linkToBuild && (
                <p className="mx-auto text-center font-semibold hover:cursor-pointer">
                  {project?.linkToBuild}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[20%] left-0 h-[500px] w-full -skew-y-12 bg-darkGreen/40 md:top-[30%]"></div>
    </motion.div>
  );
}
