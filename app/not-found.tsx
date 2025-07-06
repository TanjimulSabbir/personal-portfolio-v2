"use client";

import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-transparent text-primary px-3 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="text-7xl mb-4 text-accent">
          <FaCode className="inline-block animate-pulse" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-wide mb-3 text-accent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Lost in the code jungle?
        </h2>
        <p className="mb-6 text-gray-400">
          This page doesn’t exist—or maybe it got refactored out of existence.
        </p>
        <Link
          href="/"
          className="inline-block px-3 py-2 bg-hightlight text-black hover:bg-white hover:text-black font-semibold rounded-md transition-all duration-500 shadow-lg"
        >
          🏠 Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
