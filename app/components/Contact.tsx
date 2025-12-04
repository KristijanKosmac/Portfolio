"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-slate-900 py-16 px-4 sm:px-6 border-t border-slate-700">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-white mb-8">
          Let&apos;s Connect
        </motion.h2>

        <motion.p variants={item} className="text-gray-300 mb-12 text-lg">
          Feel free to reach out for collaborations or just a friendly hello!
        </motion.p>

        <motion.div
          variants={item}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          <a
            href="mailto:Kosmac.kristijan@hotmail.com"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
          >
            <FaEnvelope size={24} className="text-blue-400 group-hover:text-blue-300" />
            <span className="text-sm text-gray-300">Email</span>
          </a>

          <a
            href="tel:+38971338373"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
          >
            <FaPhone size={24} className="text-blue-400 group-hover:text-blue-300" />
            <span className="text-sm text-gray-300">Phone</span>
          </a>

          {/* <a
            href="https://www.linkedin.com/in/kristijan-kosmach-b6b89a1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
          >
            <FaLinkedin size={24} className="text-blue-400 group-hover:text-blue-300" />
            <span className="text-sm text-gray-300">LinkedIn</span>
          </a> */}

          <a
            href="https://github.com/KristijanKosmac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
          >
            <FaGithub size={24} className="text-blue-400 group-hover:text-blue-300" />
            <span className="text-sm text-gray-300">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="pt-8 border-t border-slate-700 text-gray-400 text-sm"
        >
          <p>© 2024 Kristijan Kosmach. Built with Next.js & Framer Motion.</p>
          <p className="mt-2">📍 Skopje, North Macedonia</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
