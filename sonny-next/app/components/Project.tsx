import React from "react";
import { ProjectType } from "./Projects";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  project: ProjectType;
};
const Project = ({ project }: Props) => {
  return (
    <div className=" bg-stone-800 min-w-[1000px] max-w-6xl rounded-md p-5 h-96 snap-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={project.image}
          width={400}
          height={300}
          alt={project.name}
          loading="lazy"
        />
      </motion.div>
      <h2 className="text-2xl">
        Case Study {project.id} of 4 : {project.name}{" "}
      </h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
