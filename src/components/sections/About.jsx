
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      title: 'Frontend Development',
      description: 'Experience with React.js and Next.js, focusing on user experience and application performance',
    },
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: 'Backend Development',
      description: 'Web services development using Node.js and Python with various databases',
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Databases',
      description: 'Experience with MongoDB, SQL Server, and Oracle Database',
    },
    {
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      title: 'Game Development',
      description: 'Simple game development using Python and Turtle graphics',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A Full-Stack developer specializing in building scalable web applications. Passionate about creating
            seamless user experiences through optimized frontend interfaces and robust backend solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-700/50 rounded-full">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
