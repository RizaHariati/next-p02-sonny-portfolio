import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="h-full flex relative flex-col items-center  justify-center text-center md:text-left xl:flex-row max-w-[2000px] xl:pl-10 min-h-screen xl:space-y-0 mx-auto ">
      <h2 className="uppercase text-gray-500 text-2xl tracking-widest absolute top-24">
        Skills
      </h2>

      <h2 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />

        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
      </div>
    </motion.div>
  );
};

export default Skills;
