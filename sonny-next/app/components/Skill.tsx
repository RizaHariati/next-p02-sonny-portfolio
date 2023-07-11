import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};
function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative  flex w-20 h-20 rounded-full flex-col items-center justify-center cursor-pointer"
    >
      <SocialIcon url="https://www.youtube.com/" className=" mx-auto " />
      <div className="opacity-0  group-hover:opacity-80 group-hover:bg-white text-black absolute  transition-all text-center w-full h-full rounded-full -left-1/2 translate-x-1/2 bottom-0 flex items-center justify-center">
        <div>
          <p>100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
