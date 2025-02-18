"use client";
import React from "react";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioProject = () => {
  return (
    <div className="text-white py-16" id="portfolio">
      {/* projects */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="max-w-[1200px] mx-auto space-y-24">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-12 items-center`}
          >
            {/* Project details */}
            <div className="lg:w-1/2 space-y-2 max-w-[550px]">
              {/* project no */}
              <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="text-7xl my-4 text-orange-400"
              >
                <span className="text-white/70">0</span>
                {`${index + 1}`}
              </motion.h2>
              {/* project title */}
              <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="text-4xl"
              >
                {project.title}
              </motion.h2>
              {/* project description */}
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-white/70 break-words p-4"
              >
                {project.description}
              </motion.p>
              {/* project technologies */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className=" flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* project github links */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
              >
                {project.live !== "" && (
                  <a href={project.live} className="text-purple-400 underline">
                    Live
                  </a>
                )}{" "}
                {project.visibility && (
                  <a
                    href={project.github}
                    className="text-purple-400 underline"
                  >
                    Github
                  </a>
                )}
              </motion.div>
            </div>

            {/* Project image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 flex justify-center items-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border-2 rounded border-gray-700"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProject;

// "use client";
// import React from "react";
// import { PROJECTS } from "@/constants";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const PortfolioProject = () => {
//   return (
//     <div className="text-white py-16" id="portfolio">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className=" my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h1>
//       <div className="max-w-[1200px] mx-auto space-y-24">
//         {PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className={`flex flex-col gap-12 md:${
//               index % 2 === 1 ? "flex-row-reverse" : "flex-row"
//             }`}
//           >
//             <div className=" space-y-2 max-w-[550px]">
//               <motion.h2
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
//                 transition={{ duration: 0.5 }}
//                 className=" text-7xl my-4 text-white/70 text-orange-400"
//               >
//                 <span className="text-white/70">0</span>
//                 {`${index + 1}`}
//               </motion.h2>
//               <motion.h2
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl"
//               >
//                 {project.title}
//               </motion.h2>
//               <motion.p
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
//                 transition={{ duration: 0.9 }}
//                 className="text-lg text-white/70 break-words p-4"
//               >
//                 {project.description}
//               </motion.p>
//               <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
//                 transition={{ duration: 1.1 }}
//               >
//                 {project.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//               <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
//                 transition={{ duration: 1.3 }}
//               >
//                 <a href={project.github}>Github</a>
//               </motion.div>
//             </div>
//             {/* Image */}
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
//               transition={{ duration: 0.5 }}
//               className="flex justify-center items-center"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 className="h-[350px] w-[500px] object-cover border-2 rounded border-gray-700"
//               />
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default PortfolioProject;
