
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
<div className="mb-8">
  <div className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-lg overflow-hidden">
    <img 
      className="w-full h-full object-contain"
      alt="Muhamad Ammar"
      src="muhamad2.jpg" 
    />
  </div>
</div>


          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Muhamad Ammar
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-purple-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'JavaScript Developer',
                2000,
                'React Developer',
                2000,
                'Python Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A passionate software developer dedicated to transforming ideas into innovative technical solutions.
            Specialized in developing modern web applications using cutting-edge technologies.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="outline"
              className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://github.com/Muhamedhossafy', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/muhamad-ammar-18b427306', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
              onClick={() => window.location.href = 'mailto:Muhamad.ammar09001@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
