'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  website?: string;
  github?: string;
  industries: string[];
}

const projects: Project[] = [
  // Cloud Infrastructure & DevOps
  {
    title: 'Microtica',
    description: 'Platform that automates building, deploying, and managing cloud applications and infrastructure, helping developers move from idea to production faster with reusable templates and streamlined workflows.',
    website: 'https://www.microtica.com/',
    industries: ['Cloud Infrastructure & DevOps'],
  },
  {
    title: 'EVA',
    description: 'Virtual EV charger simulator that supports OCPP 1.6 and OCPP 2.0, designed to mimic real charging station behavior. Enables developers to test, validate, and optimize Charging Station Management Systems (CSMS) without requiring physical hardware.',
    industries: ['Cloud Infrastructure & DevOps', 'EV Charging & Energy Technology'],
  },
  {
    title: 'EnviroSpark CSMS',
    description: 'Cloud-based Charging Station Management System designed to monitor, control, and optimize EV charging networks. Provides real-time status, usage analytics, remote management, and seamless integration with charging hardware to deliver efficient and reliable operations for charging station operators.',
    website: 'https://envirosparkenergy.com/',
    industries: ['Cloud Infrastructure & DevOps', 'EV Charging & Energy Technology'],
  },

  // Healthcare & Medical Technology
  {
    title: 'Dr Nature',
    description: 'Patient management app that streamlines appointments, prescriptions, medical reports, and invoices, helping healthcare providers manage their practice efficiently.',
    website: 'https://dr-nature-shop.com/',
    industries: ['Healthcare & Medical Technology'],
  },
  {
    title: 'PET Institute App',
    description: 'Specialized application for the PET Institute in Macedonia that automates the upload of X-ray DICOM files directly from the scanner to the patient\'s profile in the web app. The system ensures accurate patient matching, enables easy access to imaging records, and provides complete patient scanning history management in one place.',
    website: 'https://uipet.mk',
    industries: ['Healthcare & Medical Technology'],
  },

  // Digital Media & Entertainment
  {
    title: 'Livey - Creators Platform',
    description: 'Pay-per-view live streaming platform that lets creators host, manage, and monetize live events online — from concerts and sports to gaming and community shows. Provides easy tools to stream, sell tickets, engage viewers in real time, and earn revenue without subscription fees.',
    website: 'https://www.livey.events/',
    industries: ['Digital Media & Entertainment'],
  },
  {
    title: 'Livey Watch',
    description: 'Viewer platform of Livey, where audiences can buy tickets and watch live or recorded events in high quality. Provides a simple, secure pay-per-view experience — just purchase access, hit play, and enjoy concerts, sports, shows, and creator events from any device.',
    website: 'https://watch.livey.events/',
    industries: ['Digital Media & Entertainment'],
  },

  // Publishing & EdTech
  {
    title: 'Booksy',
    description: 'Digital reading and audiobook platform that gives users access to thousands of books and audio titles all on their mobile or web device.',
    website: 'https://www.boksy.app/',
    industries: ['Publishing & EdTech'],
  },

  // Event Technology & Interactive Experiences
  {
    title: 'Funtoad',
    description: 'Creative technology platform and app built to enhance live spectator events by using mobile devices and network tech for interactive group experiences. A fun branding project, inspired by the idea of synchronizing hundreds of phones at an event to create colorful visual effects and collective engagement.',
    industries: ['Event Technology & Interactive Experiences'],
  },

  // HR, Culture & Organizational Development
  {
    title: 'SUMM',
    description: 'Culture-first platform and consulting service that helps companies define, embed, and activate their unique cultural DNA to drive growth, attract the right talent, and retain top performers. Brings values into everyday operations — from hiring and onboarding to performance evaluations and team development.',
    website: 'https://summ.nl/en',
    industries: ['HR, Culture & Organizational Development'],
  },

  // Personal Projects
  {
    title: 'Chat Application',
    description: 'Real-time chat application demonstrating modern web development practices.',
    github: 'https://github.com/KristijanKosmac/Chat-app',
    industries: ['Personal Projects'],
  },
  {
    title: 'Task Manager App',
    description: 'Productivity application for managing and organizing tasks.',
    github: 'https://github.com/KristijanKosmac/Task-manager',
    industries: ['Personal Projects'],
  },
  {
    title: 'Product Page',
    description: 'E-commerce product showcase with modern design patterns.',
    github: 'https://github.com/KristijanKosmac/ProductPage',
    industries: ['Personal Projects'],
  },
  {
    title: 'Librarian',
    description: 'Digital library management system.',
    github: 'https://github.com/KristijanKosmac/Librarian',
    industries: ['Personal Projects'],
  },
  {
    title: 'WeatherApp',
    description: 'Weather application with real-time data and forecasts.',
    github: 'https://github.com/KristijanKosmac/WeatherApp',
    industries: ['Personal Projects'],
  },
];

const industries = [
  'Cloud Infrastructure & DevOps',
  'Healthcare & Medical Technology',
  'Digital Media & Entertainment',
  'Publishing & EdTech',
  'Event Technology & Interactive Experiences',
  'EV Charging & Energy Technology',
  'HR, Culture & Organizational Development',
  'Personal Projects',
];

export default function Projects() {
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
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-white mb-4">
          Projects & Portfolio
        </motion.h2>
        <motion.p variants={item} className="text-gray-400 text-lg mb-16">
          Diverse experience across multiple industries and technologies
        </motion.p>

        {/* Industry Overview */}
        <motion.div variants={item} className="mb-16 bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Industry Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((industry) => (
              <div key={industry} className="bg-slate-700 rounded-lg p-3 text-gray-300 text-sm">
                {industry}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Industries Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.industries.map((industry) => (
                  <span
                    key={industry}
                    className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-700">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <FaExternalLinkAlt size={14} />
                    Visit
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <FaGithub size={14} />
                    Repository
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
