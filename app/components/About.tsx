"use client";

import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-slate-800 px-4 sm:px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-white mb-8">
          About Me
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I&apos;m a Full-Stack Developer with over 6 years of experience building scalable, high-performance applications. With a Bachelor&apos;s degree in Computer Science and Engineering, my expertise spans the entire stack — from React frontends to serverless backends on AWS. At <span className="font-semibold text-blue-400">Livey</span>, I&apos;ve architected and maintained a live-streaming platform handling millions of transactions, implementing video pipelines, payment systems, and global CDN infrastructure.
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-300 leading-relaxed mt-6"
        >
          I&apos;m passionate about clean architecture, performance optimization, and building systems that scale. Whether it&apos;s designing serverless infrastructure, implementing real-time features, or mentoring junior developers at <span className="font-semibold text-blue-400">CodeCraft</span>, I focus on delivering robust solutions that matter.
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-300 leading-relaxed mt-6"
        >
          Beyond code, I hold AWS certifications, have contributed to open-source, and continuously explore new technologies to stay ahead in the evolving tech landscape.
        </motion.p>
      </motion.div>
    </section>
  );
}
