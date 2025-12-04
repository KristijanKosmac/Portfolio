"use client";

import { motion } from "framer-motion";
import { FaCode, FaCloud, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "SCSS", "Redux", "Framer Motion", "Responsive Design", "Figma", "UI/UX Implementation", "Performance Optimization"],
    },
    {
      title: "Backend",
      icon: FaDatabase,
      skills: ["Node.js", "NestJS", "REST APIs", "Authentication", "Payment Systems", "Streaming Pipelines", "SQL", "MongoDB", "DynamoDB", "Database Design", "Query Optimization", "API Development", "Microservices", "Caching Strategies"],
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: ["AWS", "Serverless", "Terraform", "Lambda", "API Gateway", "S3", "DynamoDB", "CloudFront", "Infrastructure as Code", "Server Management", "Auto Scaling", "Security (SSL/TLS)", "CDN Distribution", "File Management", "Hosting & Deployment", "Monitoring & Logging", "Automation"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
        <motion.h2 variants={item} className="text-4xl font-bold text-white mb-16 text-center">
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500 rounded-lg text-white">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={item} className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-2xl">✓</span> AWS Certified Cloud Practitioner
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✓</span> AWS Partner Accreditation (Technical)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✓</span> GDPR: The Big Picture
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✓</span> Advanced SEO: Developing an SEO-Friendly Website
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
