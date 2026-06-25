"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-300" },
  { name: "Express.js", icon: SiExpress, color: "text-zinc-100" },
  { name: "TypeScript", icon: SiTypescript, color: "text-sky-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-300" },
  { name: "Docker", icon: SiDocker, color: "text-sky-300" },
  { name: "Python", icon: SiPython, color: "text-amber-300" },
  { name: "Git", icon: SiGit, color: "text-orange-300" },
  { name: "javascript", icon: SiJavascript, color: "text-yellow-300" },
];

const education = [
  {
    degree: "10th HSC ",
    field: "-",
    institution: "Alphonsa sr sec school",
    year: "2020",
  },
  {
    degree: "12th SSC ",
    field: "-",
    institution: "Alphonsa sr sec school",
    year: "2022",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering ",
    institution: "G H Raisoni Institute of Engineering and Business Management",
    year: "2022-2026",
  },
];

const AboutPage = () => {
  return (
    <main className="text-white">
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
                <Sparkles className="size-4" />
                About Me
              </span>
              <h1 className="mt-6 text-5xl font-black leading-none text-balance md:text-6xl">
                About <span className="text-amber-300">Me</span>
              </h1>
            </div>

            <div className="surface rounded-[2rem] p-6 md:p-8">
              <p className="text-lg leading-8 text-zinc-300 text-pretty">
                My name is Anuj Taywade i&apos;m a 21 year old with a passion for
                web & Game Developement. I like to make intractive web apps and
                games.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-300">
                <MapPin className="size-5 text-teal-300" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">
                Tech <span className="text-teal-300">Stack</span>
              </h2>
              <p className="mt-3 text-zinc-400">Technologies I work with daily</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.025 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-teal-300/50 hover:bg-white/[0.07]"
                >
                  <Icon className={`mb-5 size-9 ${tech.color}`} />
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {tech.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black md:text-5xl">Education</h2>
            <p className="mt-3 text-zinc-400">
              My academic journey and continuous learning
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {education.map((edu, index) => (
              <motion.article
                key={`${edu.degree}-${edu.year}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="surface rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-amber-300/40"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300/15 text-amber-200">
                    <GraduationCap className="size-6" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="mt-2 font-semibold text-teal-300">{edu.field}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {edu.institution}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
