import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 90, color: 'bg-cyan-500' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85, color: 'bg-yellow-400' },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: 'bg-orange-500' },
      { name: 'CSS3', icon: <SiCss3 />, level: 90, color: 'bg-blue-500' },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 85, color: 'bg-purple-500' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: 'bg-sky-400' },
    ],
  },
  {
    category: 'Backend (Learning)',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 60, color: 'bg-green-500' },
      { name: 'Express', icon: <SiExpress />, level: 55, color: 'bg-gray-400' },
      { name: 'REST APIs', icon: <SiPostman />, level: 65, color: 'bg-orange-400' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 75, color: 'bg-blue-600' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 65, color: 'bg-green-600' },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 80, color: 'bg-red-500' },
      { name: 'GitHub', icon: <SiGithub />, level: 85, color: 'bg-gray-300' },
      { name: 'VS Code', icon: <DiVisualstudio />, level: 90, color: 'bg-blue-400' },
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        My Skills
      </h2>

      {skillsData.map(({ category, skills }) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6 border-b-2 border-indigo-500 pb-2">
            {category}
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map(({ name, icon, level, color }) => (
              <motion.div
                key={name}
                variants={cardAnimation}
                className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className={`text-4xl ${color}`}>{icon}</span>
                  <span className="ml-4 text-lg font-medium text-white">{name}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-300">Level</span>
                  <span className="text-sm font-semibold text-white">{level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`${color} h-full rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
