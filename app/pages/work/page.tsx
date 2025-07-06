"use client";
import { motion } from "framer-motion";
import AllProjects from "../../data/projects.json";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const title = "Some Things I've built";

const Work = () => {
  return (
    <div id="projects" className="scroll-mt-20">
      <motion.div
        className="w-full pb-10"
        initial="hidden"
        id="projects"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
      >
        {/* Heading */}
        <h1 className="heading">{title}</h1>

        {/* Projects */}
        {AllProjects?.Projects.map((project, index) => {
          const { id, projectName, Description, image, Technologies, Links } =
            project;

          return (
            <motion.div
              key={id}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex mt-10 ${
                index % 2 == 0
                  ? index == 0
                    ? "lg:mt-10"
                    : "mt-24"
                  : "lg:mt-24"
              } mx-auto`}
            >
              <div>
                <h1
                  onClick={() => (window.location.href = Links.live)}
                  className="absolute left-0 mb-8 text-2xl font-Exo2 font-bold duration-500 transition-colors cursor-pointer hover:text-hover"
                >
                  {projectName}
                </h1>

                {/* image part */}

                <div className="mt-16">
                  <a
                    href={Links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="relative w-full max-h-[400px] md:max-w-[400px] md:h-[250px] rounded-lg"
                      src={image}
                      alt=""
                      width={400}
                      height={250}
                    />
                  </a>
                </div>
              </div>

              {/* Text Part */}
              <div className={`md:absolute md:top-20 pointer-events-none`}>
                <h2 className="my-8 md:mt-0 job-title md:text-end">
                  A Quick Glance
                </h2>
                <div>
                  <p
                    className={`mb-4 bg-[#0d2446] text-xs sm:text-sm px-4 py-5 lg:px-8 rounded description shadow-2xl z-20 md:w-[70%] ml-auto pointer-events-auto`}
                  >
                    {Description}
                  </p>

                  <p className="mb-6 text-sm sm:text-base space-x-1 cursor-pointer text-hightlight text-end md:w-[50%] ml-auto pointer-events-auto">
                    {Technologies.map((technology) => (
                      <small key={technology}> {technology}</small>
                    ))}
                  </p>

                  <div className="flex items-center justify-end text-xl space-x-4 lg:space-x-10 pointer-events-auto">
                    <a
                      className="LinkHover"
                      href={Links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </a>
                    <a
                      className="LinkHover"
                      href={Links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
