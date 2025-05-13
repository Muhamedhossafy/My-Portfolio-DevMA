import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Twitter } from 'lucide-react'; // إضافة أيقونة X (Twitter)

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: 'Email',
      value: 'Muhamad.ammar09001@gmail.com',
      link: 'mailto:Muhamad.ammar09001@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: 'Phone',
      value: '+201270527160',
      link: 'tel:+201270527160',
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: 'Location',
      value: 'Alexandria, Egypt',
      link: '#',
    },
    {
      icon: <Linkedin className="w-6 h-6 text-purple-400" />,
      title: 'LinkedIn',
      value: 'Muhamad Ammar',
      link: 'https://www.linkedin.com/in/muhamad-ammar-18b427306',
    },
    {
      icon: <Github className="w-6 h-6 text-purple-400" />,
      title: 'GitHub',
      value: 'Muhamedhossafy',
      link: 'https://github.com/Muhamedhossafy',
    },
    {
      icon: <Twitter className="w-6 h-6 text-purple-400" />, // أيقونة X
      title: 'X',
      value: 'MuhamadAmm36641',
      link: 'https://x.com/MuhamadAmm36641',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Contact Me
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can bring it to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank" // فتح الرابط في نافذة جديدة
              rel="noopener noreferrer" // تحسين الأمان
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center p-4 bg-gray-800/30 rounded-xl backdrop-blur-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
            >
              <div className="p-3 bg-gray-700/50 rounded-full mr-4">
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;