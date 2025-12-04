"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
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
    <section className="py-24 bg-slate-900 px-4 sm:px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-white mb-12">
          Education
        </motion.h2>

        <motion.div
          variants={item}
          className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500 rounded-lg text-white flex-shrink-0">
              <FaGraduationCap size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Computer Science and Engineering
              </h3>
              <p className="text-blue-400 font-semibold text-lg mb-1">
                Saints Cyril and Methodius University
              </p>
              <p className="text-gray-300 mb-1">
                Faculty of Computer Science & Engineering (FINKI)
              </p>
              <p className="text-gray-400 text-sm mb-2">2017 – 2021</p>
              <p className="text-gray-400 text-sm">📍 Skopje, North Macedonia</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
