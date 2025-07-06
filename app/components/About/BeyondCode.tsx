"use client";

import {
  FaLeaf,
  FaCameraRetro,
  FaBookOpen,
  FaBrain,
  FaLock,
  FaCodeBranch,
} from "react-icons/fa";
import { GiLotus, GiBookshelf, GiBirdTwitter } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/Animation";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function BeyondCode() {
  return (
    <motion.section
      className="mt-10"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={container}
    >
      <motion.h2
        className="heading font-bold mb-6 text-accent"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.2 }}
      >
        Beyond Code
      </motion.h2>

      <motion.p
        className="leading-relaxed mb-6"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.2 }}
      >
        Most of the time, I’m not just coding — I’m exploring the roots of human
        history, how civilization evolved, and how human nature works.
        Metaphysical questions like the existence of God, the universe, space,
        time, and life fascinate me deeply.
      </motion.p>

      <motion.ul
        className="space-y-5"
        variants={container}
        viewport={{ once: false, amount: 0.2 }}
      >
        {[
          {
            icon: <FaLeaf className="text-green-600 text-xl mt-1" />,
            label: "Gardening:",
            desc: "Growing and caring for plants gives me peace and a sense of life’s rhythm.",
          },
          {
            icon: <FaCameraRetro className="text-blue-600 text-xl mt-1" />,
            label: "Nature Photography:",
            desc: "Capturing trees, birds, and ponds keeps me mindful and connected to nature.",
          },
          {
            icon: <FaBookOpen className="text-purple-600 text-xl mt-1" />,
            label: "Reading:",
            desc: "Passionate about human evolution, civilization, religion, and philosophy — ideas that shape our world.",
          },
          {
            icon: <GiLotus className="text-pink-600 text-xl mt-1" />,
            label: "Spiritual Exploration:",
            desc: "I’m intrigued by Sufism and believe spiritual meditation can unlock nature’s secrets.",
          },
          {
            icon: <FaBrain className="text-orange-600 text-xl mt-1" />,
            label: "Deep Reflection:",
            desc: "My worldview oscillates between religion and agnosticism — always open to new perspectives.",
          },
          {
            icon: <FaLock className="text-gray-600 text-xl mt-1" />,
            label: "Ethical Hacking:",
            desc: "As a hobbyist, I study cybersecurity to understand and strengthen digital systems — not exploit them.",
          },
        ].map(({ icon, label, desc }, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3"
            variants={fadeInUp}
            viewport={{ once: false, amount: 0.2 }}
          >
            {icon}
            <span>
              <strong>{label}</strong> {desc}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={container} viewport={{ once: false }}>
        {/* Personal Library */}
        <motion.div
          className="mt-10"
          variants={fadeInUp} // add fadeInUp here
          viewport={{ once: false }}
        >
          <h3 className="title font-semibold mb-2 flex items-center">
            <GiBookshelf className="text-indigo-500 mr-2 text-lg" />
            Personal Library
          </h3>
          <p className="leading-relaxed">
            I’m building a personal library filled with fundamental books on
            philosophy, psychology, evolution, quantum mechanics, history,
            literature (Kafka, Tolstoy, Dostoyevsky, Orwell), theology, and
            programming. One day, I’ll open it for public discussion — a small
            intellectual hub to enrich minds.
          </p>
        </motion.div>

        {/* Nature Collection */}
        <motion.div
          className="mt-8"
          variants={fadeInUp} // add fadeInUp here too
          viewport={{ once: false }}
        >
          <h3 className="title font-semibold mb-2 flex items-center">
            <GiBirdTwitter className="text-teal-500 mr-2 text-lg" />
            Nature Collection
          </h3>
          <p className="leading-relaxed">
            I have a vast collection of nature photography — trees, birds, wild
            landscapes. My dream is to build a site showcasing these natural
            wonders.
          </p>
        </motion.div>

        {/* The Tech Side */}
        <motion.div
          className="mt-8"
          variants={fadeInUp} // add fadeInUp here too
          viewport={{ once: false }}
        >
          <h3 className="title font-semibold mb-2 flex items-center">
            <FaCodeBranch className="text-yellow-500 mr-2 text-lg" />
            The Tech Side
          </h3>
          <p className="leading-relaxed">
            I’m working hard to level up to a mid-level developer, focusing on
            performance optimization, architecture, and mastering modern tools
            like Vite, Webpack, and Turbo. Currently, I’m working on a personal
            project that combines my love of technology, ideas, and more — handy
            to spread actual knowledge.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
