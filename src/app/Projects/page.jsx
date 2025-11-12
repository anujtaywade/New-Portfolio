"use client";
import React, { useState } from "react";
import {
  Code,
  Sparkles,
  Zap,
  Layers,
  ExternalLink,
  Github,
} from "lucide-react";

const Page = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Real Time Chat Application",
      category: "fullstack",
      description:
        "WebSocket-based chat platform with end-to-end encryption functionality and seamless UI",
      tech: ["React.js", "Node.js", "Tailwind", "Express.js", "Socket.io"],
      color: "from-purple-500 to-pink-500",
      icon: <Sparkles className="w-6 h-6" />,
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
      color: "from-blue-500 to-cyan-500",
      icon: <Layers className="w-6 h-6" />,
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
      color: "from-emerald-500 to-teal-500",
      icon: <Zap className="w-6 h-6" />,
      live: "https://store-rating-app-orcin.vercel.app/",
      Github: "https://github.com/anujtaywade/store_rating_app",
    },
    {
      id: 4,
      title: "Valor Vault (Valorant)",
      category: "frontend",
      description: "A valorant informantion /clone website.",
      tech: ["Node.js", "React.js"],
      color: "from-orange-500 to-red-500",
      icon: <Code className="w-6 h-6" />,
      live: "https://www.valorvault.info/",
      Github: "https://github.com/anujtaywade/Valor-Vault",
    },
    {
      id: 5,
      title: "Mini Chat Server",
      category: "backend",
      description: "A basic Express chat server using socket.io.",
      tech: ["Socket.io", "Express.js"],
      color: "from-indigo-500 to-blue-500",
      icon: <Layers className="w-6 h-6" />,
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
      color: "from-yellow-500 to-orange-500",
      icon: <Sparkles className="w-6 h-6" />,
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
      color: "from-yellow-500 to-orange-500",
      icon: <Sparkles className="w-6 h-6" />,
      live: "",
      Github: "https://github.com/anujtaywade/Todo_app",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 mb-6">
            ✨ Crafting digital experiences
          </div>
          <h1 className="text-6xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A showcase of my work in building efficient, dynamic, and
            user-friendly web applications.
          </p>
        </div>
      </div>

      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-slate-800/30 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:border-slate-600"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-6">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}
                  >
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 rounded-lg text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-white transition-colors ${
                        project.live
                          ? "bg-slate-700/50 hover:bg-slate-700 text-white"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed pointer-events-none"
                      }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      
                  

                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-white transition-colors `}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} blur-xl opacity-20`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
