"use client" ;
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Next.js', icon: '▲', color: '#ffffff' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'Express.js', icon:  (<div className="flex justify-center"><SiExpress className="text-5xl"/></div>), color: 'fffff' },
    { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
    { name: 'MongoDB', icon: '🍃', color: '#47a248' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'Tailwind', icon: '🎨', color: '#06b6d4' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'Python', icon: '🐍', color: '#50C878' },
    { name: 'Git', icon: '📦', color: '#CD9F61' },
    { name: 'javascript', icon: (<div className="flex justify-center"><IoLogoJavascript  className="text-5xl" /></div>), color: '#FFFFE0 ' },
    
  ];

  const education = [
    
    {
      degree: '10th HSC ',
      field: '84%',
      institution: 'Alphonsa sr sec school',
      year: '2020',
    },
     {
      degree: '12th SSC ',
      field: '64%',
      institution: 'Alphonsa sr sec school',
      year: '2022',
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering ',
      institution: 'G H Raisoni Institute of Engineering and Business Management',
      year: '2022-2026',
    },
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building custom web applications for clients worldwide'
    },
    {
      role: 'Web Developer',
      company: 'Previous Company',
      period: '2022 - 2023',
      description: 'Developed responsive web applications using React and Node.js'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">

   
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <h1 className="text-6xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h1>
          
          <div className="grid gap-12 items-start">
            <div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                My name is Anuj Taywade i'm a 22 year old with a passion for web Developement i like to make intractive web apps and games. I Specialize in building responsive web applications using <br /><br />
                <span className='text-2xl font-semibold'>Languages:</span>  Javascript , Python <br />
                <span className='text-2xl font-semibold'> Framework: </span>React.js, Next.js, Express.js <br />
                <span className='text-2xl font-semibold'> Database: </span> MongoDB , PostgresSQL <br />
                
                

              </p>
              
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Based in Maharashtra, India, I specialize in creating scalable web solutions 
                that solve real-world problems. My approach combines technical expertise with 
                creative problem-solving to deliver exceptional digital experiences.
              </p>

              <div className="flex items-center gap-3 text-gray-400 mb-8">
                <MapPin className='size-5'/>
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>


<div className="py-20 px-6 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-center">
      Tech <span className="text-blue-400">Stack</span>
    </h2>
    <p className="text-gray-400 text-center mb-12">
      Technologies I work with daily
    </p>

    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          drag
          dragElastic={0.6}
          dragConstraints={{ top: 10, bottom: 0, left: 0, right: 10 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          whileHover={{
            scale: 1.15,
            rotate: Math.random() * 10 - 5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 shadow-lg cursor-grab active:cursor-grabbing"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">{tech.icon}</div>
            <h3 className="font-semibold text-sm" style={{ color: tech.color }}>
              {tech.name}
            </h3>
          </div>
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
            style={{
              background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</div>

  
      <div className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Education 
          </h2>
          <p className="text-gray-400 text-center mb-12">My academic journey and continuous learning</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold">{edu.field}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-400 mb-3">{edu.institution}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;