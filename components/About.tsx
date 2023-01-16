import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-20 text-xl uppercase tracking-[20px] text-gray-500 md:top-24 md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" md:h-95 -mb-24 h-52 w-52 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className="space-y-5 px-0 md:space-y-10 md:px-10">
        <h4 className="text-xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className=" underline decoration-darkGreen/50">little</span>{" "}
          background
        </h4>
        <p className="text-justify text-sm md:text-lg lg:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
