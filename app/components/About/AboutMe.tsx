"use client";

import BeyondCode from "./BeyondCode";
import CurrentWorking from "./CurrentWorking";
import LearningFocus from "./LearningFocus";


export default function AboutMe() {
  return (
    <div id="aboutme" className="scroll-mt-20">
      <h1 className="mt-7 lg:-mt-2 heading">About</h1>

      <div className="description">
        Hi, I’m <span className="title">Tanjimul Islam Sabbir</span>, a
        dedicated <span className="title">Front-End Developer</span> who thrives
        on building intuitive, scalable, and performance-optimized web
        experiences.
        <br />
        <br />
        <p className="mb-6">
          I’m a front-end-focused developer who enjoys building modern,
          responsive web applications using technologies like{" "}
          <span className="title">ReactJS</span>,{" "}
          <span className="title">Next.js</span>,{" "}
          <span className="title">TypeScript</span>,{" "}
          <span className="title">Redux Toolkit</span>, and{" "}
          <span className="title">Tailwind CSS</span>. I’ve contributed to
          real-world projects across <span className="title">e-commerce</span>,{" "}
          <span className="title">travel</span>,{" "}
          <span className="title">social media</span>, and{" "}
          <span className="title">dashboard platforms</span> — developing
          features like real-time chat, video/audio calls, multi-language
          support, payment integration, and complex UI systems. I’ve also worked
          with <span className="title">React Native</span> and{" "}
          <span className="title">Expo</span> for mobile apps, and have a solid
          understanding of <span className="title">Node.js</span> for full-stack
          collaboration when needed.
        </p>
        <p>
          Lately, I’ve been deeply interested in{" "}
          <span className="title">performance optimization</span> and{" "}
          <span className="title">front-end architecture</span> — exploring
          concepts like <span className="title">code splitting</span>,{" "}
          <span className="title">lazy loading</span>, and building{" "}
          <span className="title">
            reusable, maintainable component systems
          </span>
          . I love turning designs into <span className="title">fast</span>,{" "}
          <span className="title">interactive</span>, and{" "}
          <span className="title">accessible user experiences</span>. For me,
          front-end development is more than just writing code — it’s where{" "}
          <span className="title">creativity</span>,{" "}
          <span className="title">logic</span>, and{" "}
          <span className="title">user empathy</span> come together, and it’s
          the space where I feel most at home.
        </p>
        <br />
        <br />
        <CurrentWorking />
        <br />
        <br />
        <span className="title"> In my personal time,</span> I
        explore technical depths that make frontend powerful. I enjoy solving{" "}
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
        <div className="text-secondary">
          <LearningFocus />
          <BeyondCode />
        </div>
      </div>
    </div>
  );
}
