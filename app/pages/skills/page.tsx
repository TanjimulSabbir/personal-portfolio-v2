"use client";

import Image from "next/image";

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

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-7">
        {Tools.map((tool, index) => (
          <div
            key={index}
            className="cursor-pointer transition transform duration-500 hover:scale-110 hover:rotate-12 hover:animate-pulse opacity-50 hover:opacity-100"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
