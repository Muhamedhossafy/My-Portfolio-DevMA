
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Express.js', level: 82 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Oracle', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'REST APIs', level: 85 },
        { name: 'Agile', level: 80 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Skills and technologies I've mastered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20} }
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-lg shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-purple-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
