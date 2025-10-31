"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import  {TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between px-10 md:px-32 py-20">
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-5 max-w-xl"
      >
        <motion.h1
          className="bg-gray-800 inline-block text-white rounded-3xl px-3 py-1 text-sm tracking-wide"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          .available for freelancing
        </motion.h1>

        <motion.h2
          className="text-5xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <span className="text-blue-400">Anuj</span>
        </motion.h2>

        <TypeAnimation
  sequence={[
    "Full Stack Developer", 
    1500, 

    "",
    500,
  ]}
  speed={50}
  repeat={Infinity}
  wrapper="span"
  className="text-3xl font-medium text-gray-300"
/>

        <p className="text-gray-400 leading-relaxed text-lg">
          I’m a Full Stack Developer passionate about building efficient,
          dynamic, and user-friendly web applications. I love turning ideas into
          reality — crafting smooth frontends and powerful backends with clean,
          modern code.
        </p>

        <div className="flex items-center gap-2 text-gray-400 mt-4">
          <MapPin size={20} />
          <p>Maharashtra, India</p>
        </div>

        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium shadow-md">
          Download CV
        </button>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-8">
          <Link
            href="https://github.com/anujtaywade"
            target="_blank"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anuj-taywade-326881270/"
            target="_blank"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://x.com/Anujjj69"
            target="_blank"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.instagram.com/anuj_taywade07/"
            target="_blank"
            className="hover:text-blue-400 transition-transform hover:scale-110"
          >
            <Instagram />
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SECTION - IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-10 md:mt-0"
      >
        <img
          src="\shibu coding.jpeg"
          alt="Anuj coding"
          className="h-80 w-80 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform"
        />
      </motion.div>
    </div>
  );
};

export default Page;
