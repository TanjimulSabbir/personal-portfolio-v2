"use client"
import { motion } from "framer-motion";
import AllProjects from "../../data/projects.json";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-primary"
      >
        Some Things I've built
        <span className="hidden mid-lg:Section-Heading"></span>
      </motion.h1>

      {/* Projects */}
      {AllProjects?.Projects.map((project, index) => {
        const { id, projectName, Description, image, Technologies, Links } =
          project;

        return (
          <motion.div
            key={id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
            className={`relative mt-10 mx-auto`}
          >
            <h1
              onClick={() => (window.location.href = Links.live)}
              target="_blank"
              className="mb-8 title"
            >
              {projectName}
            </h1>

            {/* image part */}
            <a href={Links.live}>
              <div>
                <img
                  className="relative w-full max-h-[400px] md:max-w-[400px] md:h-[250px] rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            </a>

            {/* Text Part */}
            <div className="md:absolute md:top-20 pointer-events-none">
              <h2 className="my-8 md:mt-0 text-custom-highLightTextColor md:text-end">
                A Quick Glance
              </h2>
              <div>
                <p className="mb-4 bg-[#0d2446] text-xs sm:text-sm p-4 py-5 lg:px-8 rounded text-custom-TextColor shadow-2xl z-20 rubik md:w-[70%] ml-auto pointer-events-auto">
                  {Description}
                </p>

                <p className="mb-6 rubik text-sm sm:text-base space-x-1 cursor-pointer text-custom-highLightTextColor text-end md:w-[50%] ml-auto pointer-events-auto">
                  {Technologies.map((technology) => (
                    <small key={technology}> {technology}</small>
                  ))}
                </p>

                <div className="flex items-center justify-end text-xl space-x-4 lg:space-x-10 pointer-events-auto">
                  <a className="LinkHover" href={Links.github}>
                    <FiGithub />
                  </a>
                  <a className="LinkHover" href={Links.live}>
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

