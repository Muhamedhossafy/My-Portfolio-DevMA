
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Faculty of Computers and Information',
      period: '2022 - Present',
      location: 'Kafr El Sheikh, Egypt',
      description: [
        'Developed an e-commerce platform using C# and SQL Server for backend, HTML/CSS/JavaScript for frontend',
        'Implemented CRUD operations, payment integration, and user authentication',
      ],
    },
    {
      title: 'Intern',
      company: 'Suez Canal Authority',
      period: 'Summer 2023',
      location: 'Egypt',
      description: [
        'Built a web application using HTML, CSS, and JavaScript with Oracle Database integration',
        'Enhanced UI/UX and accessibility',
      ],
    },
    {
      title: 'Freelance Developer',
      company: 'Self-employed',
      period: '2022 - Present',
      location: 'Remote',
      description: [
        'Created Python games (Snake, Ping Pong, Falling Shapes) using Turtle graphics',
        'Developed REST APIs using Node.js with MongoDB and JWT authentication',
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 bg-gray-800/30 rounded-xl p-6 backdrop-blur-lg shadow-xl hover:transform hover:scale-102 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                  <div className="text-xl text-gray-300">{exp.company}</div>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-4">
                <Briefcase className="w-4 h-4 mr-2" />
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
