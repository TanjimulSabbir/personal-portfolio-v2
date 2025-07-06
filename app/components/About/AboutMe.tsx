"use client";

import { motion, Variants, Transition } from "framer-motion";
import BeyondCode from "./BeyondCode";
import LearningFocus from "./LearningFocus";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // Use easing array or cast to any to avoid TS error
      ease: [0.42, 0, 0.58, 1], // easeOut cubic-bezier
      staggerChildren: 0.2,
    } as Transition,
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMe() {
  return (
    <motion.div
      id="aboutme"
      className="scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 variants={childVariants} className="mt-7 lg:mt-0 heading">
        About
      </motion.h1>

      <motion.div variants={childVariants} className="description">
        Hi, I’m <span className="title">Tanjimul Islam Sabbir</span>, a
        dedicated <span className="title">Front-End Developer</span> who thrives
        on building intuitive, scalable, and performance-optimized web
        experiences.
        <br />
        <br />I specialize in modern technologies like{" "}
        <span className="title">ReactJS</span>,{" "}
        <span className="title">TypeScript</span>,{" "}
        <span className="title">Redux Toolkit</span>, and{" "}
        <span className="title">Tailwind CSS</span>. My approach focuses on
        clean architecture, responsive design, and seamless user interaction.
        <br />
        <br />
        I’m currently working as a{" "}
        <span className="title">
          Junior Software Engineer at Utech Innovation
        </span>
        , where I help build real-time platforms with features like video/audio
        calls, multilingual support, and WebSocket-based chat. I’ve contributed
        to products like a Brazilian e-commerce site, a travel booking platform,
        and an organic food delivery system.
        <br />
        <br />
        In my personal time, I explore technical depths that make frontend
        powerful. I enjoy solving{" "}
        <span className="title">complex logic problems</span>, diving into{" "}
        <span className="title">JavaScript execution contexts</span>, and
        understanding how browser engines handle rendering and re-rendering in
        React. Debugging <span className="title">performance issues</span> and
        finding bottlenecks in large React applications is something I genuinely
        enjoy.
        <br />
        <br />
        I’m also passionate about topics like{" "}
        <span className="title">caching</span>,{" "}
        <span className="title">memoization</span>, and data fetching
        strategies. Tools like <span className="title">RTK Query</span> and{" "}
        <span className="title">React Query</span> are a core part of my
        workflow. On the build side, I love exploring bundlers like{" "}
        <span className="title">Webpack</span>,{" "}
        <span className="title">Vite</span>, and{" "}
        <span className="title">Turbopack</span> to optimize performance and DX.
        <br />
        <br />
        With a background in <span className="title">Philosophy</span>, I bring
        analytical depth and creative thinking into development. Im currently
        sharpening my skills in{" "}
        <span className="title">Data Structures & Algorithms</span> to level up
        from junior to mid-level and beyond.
        <br />
        <br />
        I believe in writing maintainable code, designing with intent, and
        learning without limits. Let’s build something meaningful together.
        <br />
        <br />
        <motion.div variants={childVariants} className="text-secondary">
          <LearningFocus />
          <BeyondCode />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
