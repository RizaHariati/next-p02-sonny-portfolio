import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.2],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{
        duration: 1.3,
      }}
      className="max-w-7xl relative flex flex-row justify-center items-center  "
    >
      <div className=" circle-component h-[200px] w-[200px]" />
      <div className=" circle-component h-[300px] w-[300px]" />
      <div className=" circle-component h-[500px] w-[500px] " />
      <div className=" circle-componenth-[800px] w-[800px] " />
      <div className=" absolute  border border-yellow-500 rounded-full h-[650px] w-[650px] mt-52 animate-pulse mx-auto opacity-20" />
    </motion.div>
  );
}
