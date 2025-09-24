// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJsonwebtokens, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl animate-spin-slow" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "JSON", icon: <SiJsonwebtokens className="text-green-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300 text-5xl" /> },
];

// Variantes de animación
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // efecto tipo "stagger"
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
    <section
      className="relative z-10 py-20 px-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
      id="skills"
    >
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-12">🚀 Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:shadow-xl"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

