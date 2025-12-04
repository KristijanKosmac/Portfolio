'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  website?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Software Developer',
    company: 'Livey',
    period: '01/08/2022 - Present',
    website: 'https://watch.livey.events',
    description: [
      'Backend development (Node.js, NestJS) — building APIs for authentication, subscriptions, payments, event management, and video uploads.',
      'Infrastructure & DevOps on AWS — designing serverless architecture using Lambda, API Gateway, S3, DynamoDB, CloudFront, and EventBridge.',
      'Live streaming implementation — handling video pipelines, presigned URLs, multipart uploads, and global CDN delivery.',
      'Security & performance optimization — improving caching, optimizing queries, reducing infrastructure costs.',
      'Frontend (React, Next.js) — contributing to UI and streaming-player integrations.',
      'Subscription & payment systems — integrating with InPlayer and Stripe.',
    ],
  },
  {
    title: 'CEO & Founder',
    company: 'CodeCraft',
    period: '01/10/2023 – Present',
    website: 'https://codecraftweb.com',
    description: [
      'Founded a tech company with senior developers focused on scalable software.',
      'Managing client needs and project delivery.',
      'Leading teams to deliver efficient, robust, and maintainable solutions.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'SUMM',
    period: '01/08/2024 – 01/05/2025',
    website: 'https://summ.nl/en',
    description: [
      'Building scalable backend services with Node.js.',
      'Developing responsive React components.',
      'Implementing authentication, data workflows, and real-time updates.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Metergram',
    period: '01/08/2022 – 01/09/2024',
    website: 'https://metergram.com',
    description: [
      'Developed virtual EV charger web app using OCPP 1.6 protocol.',
      'Built video streaming platform for event hosts.',
      'Strong experience in streaming pipelines, security, and full-stack systems.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Miracle Mill (PCG)',
    period: '01/01/2022 – 01/08/2022',
    website: 'https://miraclemill.com/',
    description: [
      'Developed Funtoad — an interactive mobile event application enabling creators to engage audiences through phone control.',
      'Expanded expertise in SEO (Search Engine Optimization) and GDPR compliance with industry certifications.',
      'Obtained AWS Partner Accreditation (Technical) and AWS Certified Cloud Practitioner certifications.',
      'Worked on AWS template applications using AWS CDK (Cloud Development Kit).',
      'Gained hands-on experience in developing and deploying cloud-based systems on AWS infrastructure.',
      'Enhanced understanding of cloud architecture and best practices for scalable applications.',
    ],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Microtica',
    period: '01/11/2020 – 01/01/2022',
    website: 'https://microtica.com',
    description: [
      'Worked as full-stack developer (React + Node.js).',
      'Developed PET project — web app connected to X-ray scanner.',
      'Designed both front-end and back-end systems.',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Upwork & Independent Clients',
    period: '01/10/2019 - Present',
    website: 'https://www.upwork.com',
    description: [
      'Developed custom UI components and interactive web applications for diverse clients.',
      'Built multi-page websites with responsive design and modern technologies.',
      'Integrated third-party APIs and external services into client projects.',
      'Fixed bugs, optimized performance, and improved existing codebases.',
      'Collaborated with clients on requirements gathering, design feedback, and iterative improvements.',
      'Gained invaluable experience in client communication, project management, and working in real-world environments.',
      'Learned best practices for code quality, delivery timelines, and maintaining long-term client relationships.',
    ],
  },
];

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-slate-800 px-4 sm:px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-white mb-16">
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ x: 10 }}
              className="bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                </div>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex-shrink-0"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>

              <ul className="space-y-3 text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-400 mt-1">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
