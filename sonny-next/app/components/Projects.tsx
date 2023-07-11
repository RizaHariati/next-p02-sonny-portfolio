import React from "react";
import Project from "./Project";

export type ProjectType = {
  id: number;
  name: string;
  description: string;
};
const Projects = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of project 3",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description of project 4",
    },
  ];
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-evenly w-full relative text-center md:text-left mx-auto gap-10 ">
      <h2 className="uppercase text-gray-500 text-2xl tracking-widest absolute top-20">
        Projects
      </h2>
      <div
        className=" flex  absolute top-28 left-0 overflow-x-scroll overflow-y-hidden space-x-5 w-full snap-x
        snap-mandatory "
      >
        {projects.map((project: ProjectType) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
