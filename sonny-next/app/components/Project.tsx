import React from "react";
import { ProjectType } from "./Projects";
type Props = {
  project: ProjectType;
};
const Project = ({ project }: Props) => {
  return (
    <div className=" bg-stone-800 min-w-[1300px] max-w-6xl rounded-md p-5 h-96 snap-center">
      <h2>
        Case Study {project.id} of 4 : {project.name}{" "}
      </h2>
    </div>
  );
};

export default Project;
