"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 py-20">
      <motion.div
        className="max-w-3xl w-full text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-8">
          <div className="w-80 h-80 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50">
            <Image
              src="/photo.jpg"
              alt="Kristijan Kosmach"
              width={1500}
              height={1500}
              className="object-cover w-full h-full"
              priority
            //   unoptimized
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          Kristijan Kosmach
        </motion.h1>

        <motion.p
          variants={item}
          className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-6"
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-300 mb-8 leading-relaxed"
        >
          Building scalable applications with React, Node.js, Next.js, and AWS. 6+ years of experience shipping high-performance systems.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href="tel:+38971338373"
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
          >
            <FaPhone size={18} />
            <span className="hidden sm:inline">+389 71 338 373</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="mailto:Kosmac.kristijan@hotmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
          >
            <FaEnvelope size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center gap-6 mb-10"
        >
          <motion.a
            href="https://github.com/KristijanKosmac"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={32} />
          </motion.a>
          {/* <motion.a
            href="https://www.linkedin.com/in/kristijan-kosmach-b6b89a1b9/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={32} />
          </motion.a> */}
        </motion.div>

        <motion.div variants={item} className="text-sm text-gray-400">
          <p className="mt-1">🌍 Slovenian & North Macedonian</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
