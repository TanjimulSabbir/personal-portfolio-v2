"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import AntDesign from "../../../public/media/images/skills/ant.svg";
import css3 from "../../../public/media/images/skills/css3.png";
import firebase from "../../../public/media/images/skills/firebase.png";
import git from "../../../public/media/images/skills/git.png";
import github from "../../../public/media/images/skills/github.png";
import html5 from "../../../public/media/images/skills/html5.png";
import javascript from "../../../public/media/images/skills/javascript.png";
import materialui from "../../../public/media/images/skills/MaterialUI.png";
import mongodb from "../../../public/media/images/skills/mongodb.png";
import nodejs from "../../../public/media/images/skills/nodejs.png";
import reactjs from "../../../public/media/images/skills/reactjs.png";
import redux from "../../../public/media/images/skills/redux.png";
import shadcn from "../../../public/media/images/skills/shadcn.png";
import tailwind from "../../../public/media/images/skills/tailwind.png";
import typescript from "../../../public/media/images/skills/Typescript.png";
import zod from "../../../public/media/images/skills/zod.png";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
};

function Skills() {
  const Tools = [
    html5,
    css3,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    AntDesign,
    shadcn,
    zod,
    materialui,
    nodejs,
    firebase,
    mongodb,
    git,
    github,
  ];
  const toolsName = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "reactjs",
    "redux",
    "tailwind",
    "Ant Design",
    "shadcn",
    "Zod",
    "Material UI",
    "nodejs",
    "firebase",
    "mongodb",
    "git",
    "github",
  ];
  return (
    <div id="skills" className="py-20">
      <div>
        <div className="relative mb-10">
          <h1 className="heading">Skill & Tools</h1>
          <p className="absolute top-11 text-sm text-secondary">
            What Tools and Things can I do!
          </p>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {Tools.map((tool, index) => (
          <motion.div
            key={index}
            className="cursor-pointer transition transform duration-500 hover:scale-110 hover:rotate-12 hover:animate-pulse opacity-50 hover:opacity-100"
            variants={itemVariants}
          >
            <div className="p-4 rounded-full flex flex-col text-center justify-center">
              <Image
                className="w-24 flex items-center justify-center mx-auto"
                src={tool}
                alt={toolsName[index]}
              />
              <p className="uppercase mt-2 text-sm font-Exo2">
                {toolsName[index]}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
