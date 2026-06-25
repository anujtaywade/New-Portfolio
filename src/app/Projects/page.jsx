"use client";

import React, { useState } from "react";
import {
  Code,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real Time Chat Application",
    category: "fullstack",
    description:
      "WebSocket-based chat platform with end-to-end encryption functionality and seamless UI",
    tech: ["React.js", "Node.js", "Tailwind", "Express.js", "Socket.io"],
    color: "from-fuchsia-400 to-rose-400",
    icon: Sparkles,
    live: "https://real-time-chat-app-r51u.vercel.app/",
    Github: "https://github.com/anujtaywade/Real-Time-Chat-App",
  },
  {
    id: 2,
    title: "AI-based-attendence-monitoring",
    category: "fullstack",
    description:
      "My Final year Project AI-based Attendance Monitoring (Online Classroom Attention Tracker - OCAT).",
    tech: ["next.js", "Node.js", "Python"],
    color: "from-teal-300 to-sky-400",
    icon: Layers,
    live: "",
    Github: "https://github.com/anujtaywade/AI-based-attendence-monitoring",
  },
  {
    id: 3,
    title: "Store Rating App ",
    category: "fullstack",
    description:
      "A role based store rating app where user can add and rate store according to role",
    tech: ["React", "PostgressSQL", "Express"],
    color: "from-emerald-300 to-lime-300",
    icon: Zap,
    live: "https://store-rating-app-orcin.vercel.app/",
    Github: "https://github.com/anujtaywade/store_rating_app",
  },
  {
    id: 4,
    title: "Valor Vault (Valorant)",
    category: "frontend",
    description: "A valorant informantion /clone website.",
    tech: ["Node.js", "React.js"],
    color: "from-orange-300 to-red-400",
    icon: Code,
    live: "https://www.valorvault.info/",
    Github: "https://github.com/anujtaywade/Valor-Vault",
  },
  {
    id: 5,
    title: "Mini Chat Server",
    category: "backend",
    description: "A basic Express chat server using socket.io.",
    tech: ["Socket.io", "Express.js"],
    color: "from-indigo-300 to-violet-400",
    icon: Layers,
    live: "",
    Github: "https://github.com/anujtaywade/mini-chat-server",
  },
  {
    id: 7,
    title: "Hungman Game",
    category: "frontend",
    description:
      "Classic word-guessing game where the player tries to reveal a hidden word by guessing letters before running out of attempts.",
    tech: ["React.js, "],
    color: "from-yellow-300 to-orange-300",
    icon: Sparkles,
    live: "",
    Github: "https://github.com/anujtaywade/hungman_game",
  },
  {
    id: 8,
    title: "Todo list app",
    category: "frontend",
    description:
      "A react project to create, manage, and track personal or professional tasks, featuring options to mark items as complete..",
    tech: ["React.js"],
    color: "from-amber-300 to-pink-300",
    icon: Sparkles,
    live: "",
    Github: "https://github.com/anujtaywade/Todo_app",
  },
  {
    id: 9,
    title: "Vyom Garud",
    category: "frontend",
    description:
      "A simple frontend project for a company basically for internship",
    tech: ["React.js"],
    color: "from-lime-300 to-teal-300",
    icon: Sparkles,
    live: "",
    Github: "https://github.com/anujtaywade/VyomGarud",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <main className="min-h-screen px-6 py-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <section className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              Crafting digital experiences
            </div>
            <h1 className="mt-6 text-5xl font-black leading-none text-balance md:text-6xl">
              My <span className="text-teal-300">Projects</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400 text-pretty">
              A showcase of my work in building efficient, dynamic, and
              user-friendly web applications.
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] p-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? "bg-white text-zinc-950"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group surface relative overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.06}s both` }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}
                />

                <div className="mb-8 flex items-start justify-between gap-5">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.color} text-zinc-950 shadow-lg shadow-black/20`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium capitalize text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-20 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.live || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={!project.live}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      project.live
                        ? "bg-white text-zinc-950 hover:bg-teal-200"
                        : "cursor-not-allowed bg-white/[0.04] text-zinc-600"
                    }`}
                  >
                    <ExternalLink className="size-4" />
                    Live
                  </a>

                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Github`}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-300 transition hover:border-teal-300/50 hover:text-teal-200"
                  >
                    <Github className="size-5" />
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Page;
