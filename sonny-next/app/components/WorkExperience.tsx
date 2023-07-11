import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
  return (
    <div
      className=" h-screen relative flex flex-col text-left max-w-full md:flex-row px-10 justify-evenly items-center "
      //   initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   transition={{
      //     duration: 1.5,
      //   }}
    >
      <h2 className="uppercase text-gray-500 text-2xl tracking-widest absolute top-20">
        Experience
      </h2>
      <div
        className="flex absolute top-28 w-full overflow-x-scroll space-x-5 snap-x snap-mandatory"
        style={{ scrollbarWidth: "thin" }}
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default WorkExperience;
