"use client"
import { PROJECTS } from "@/constants";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className=" mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                alt={project.title}
                className="mb-6 rounded sm:w-[150px] sm:h-[150px]"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h5 className=" mb-2 font-semibold">{project.title}</h5>
              <p className=" mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
