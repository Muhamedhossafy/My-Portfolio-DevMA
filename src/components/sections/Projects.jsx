import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';


import GamingPlatformImage from './GamingPlatform.png';
import EcommercePlatformImage from './E-Commerce Platform.jpg';
import PythonGamesImage from './PythonGames.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Gaming Platform',
      description: 'Modern gaming platform with SSR, optimized animations, and real-time features',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: GamingPlatformImage, 
      github: 'https://github.com/Muhamedhossafy/GameZone',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce store with product management, user authentication, and Stripe payments',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: EcommercePlatformImage, 
      github: 'https://github.com/Muhamedhossafy/E-Commerce-Website',
    },
    {
      title: 'Python Games',
      description: 'Collection of interactive games developed using Python and Turtle graphics',
      tech: ['Python', 'Turtle Graphics'],
      image: PythonGamesImage, 
      github: 'https://github.com/Muhamedhossafy/Ping-Pong-Game',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A selection of projects I've developed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  alt={project.title}
                  src={project.image} 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;