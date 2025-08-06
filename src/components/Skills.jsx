// src/components/Skills.jsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiJsonwebtokens } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-5xl animate-spin-slow" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: 'JSON', icon: <SiJsonwebtokens className="text-green-400 text-5xl" /> },
];

export default function Skills() {
  return (
    <section
      className="relative z-10 py-20 px-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4">
            {skill.icon}
            <span className="mt-2 text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
