import { BiMobile } from "react-icons/bi";
import { FaCode, FaReact, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function LearningFocus() {
  return (
    <div className="mt-4 space-y-5 text-base leading-relaxed">
      <p className="heading">What I’m Up To</p>

      <motion.div
        className="flex items-start gap-3 transition-all duration-500 hover:scale-[1.02]"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <FaReact className="text-accent mt-1" />
        <p>
          Deepening expertise in{" "}
          <span className="title text-accent font-semibold">
            Advanced React
          </span>
          , <span>Micro-Frontend</span>,{" "}
          <span className="title">Front-end System Design</span>,{" "}
          <span className="title text-accent font-semibold">
            Web Performance
          </span>
          , <span>Code Optimization</span>, and{" "}
          <span>Production-Ready Projects</span>—focusing on scalable
          architecture and modern rendering patterns.
        </p>
      </motion.div>

      <motion.div
        className="flex items-start gap-3 transition-all duration-500 hover:scale-[1.02]"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        <FaCode className="text-accent mt-1" />
        <p>
          Solving{" "}
          <span className="title text-accent font-semibold">
            algorithmic challenges on LeetCode
          </span>{" "}
          to sharpen problem-solving skills and boost logical thinking.
        </p>
      </motion.div>

      <motion.div
        className="flex items-start gap-1 transition-all duration-500 hover:scale-[1.02]"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <BiMobile className="text-accent mt-1" />
        <p>
          Learning{" "}
          <span className="title text-accent font-semibold">React Native</span>{" "}
          and <span className="title text-accent font-semibold">Expo</span> to
          build sleek, cross-platform mobile applications.
        </p>
      </motion.div>

      <motion.div
        className="flex items-start gap-3 transition-all duration-500 hover:scale-[1.02]"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <FaHandshake className="text-accent mt-1" />
        <p>
          Always open to{" "}
          <span className="title text-accent font-semibold">
            collaborative opportunities
          </span>{" "}
          — startups, open source, or purpose-driven freelance work.
        </p>
      </motion.div>
    </div>
  );
}
