"use client"
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

const fadeItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1 variants={fadeItem} className="heading">
        Some Things Ive built
      </motion.h1>

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
            className={`relative mt-10 ${
              index === 0 ? "lg:mt-14" : "lg:mt-32"
            } mx-auto`}
          >
            <div>
              <h1
                onClick={() => (window.location.href = Links.live)}
                className="mb-8 text-2xl font-Exo2 font-bold duration-500 transition-colors hover:text-hover"
                style={{ cursor: "pointer" }}
              >
                {projectName}
              </h1>

              {/* image part */}
              <a href={Links.live} target="_blank" rel="noopener noreferrer">
                <div>
                  <Image
                    className="relative w-full max-h-[400px] md:max-w-[400px] md:h-[250px] rounded-lg"
                    src={image}
                    alt=""
                    width={400}
                    height={250}
                  />
                </div>
              </a>
            </div>

            {/* Text Part */}
            <div className="md:absolute md:top-20 pointer-events-none">
              <h2 className="my-8 md:mt-0 job-title md:text-end">
                A Quick Glance
              </h2>
              <div>
                <p className="mb-4 bg-[#0d2446] text-xs sm:text-sm p-4 py-5 lg:px-8 rounded description shadow-2xl z-20 rubik md:w-[70%] ml-auto pointer-events-auto">
                  {Description}
                </p>

                <p className="mb-6 rubik text-sm sm:text-base space-x-1 cursor-pointer text-hightlight text-end md:w-[50%] ml-auto pointer-events-auto">
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
  );
};

export default Work;

