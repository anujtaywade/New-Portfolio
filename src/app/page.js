"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Projects from "@/app/Projects/page";
import About from "@/app/About/page";
import Image from "next/image";

const socialLinks = [
  { href: "https://github.com/anujtaywade", icon: Github, label: "Github" },
  {
    href: "https://www.linkedin.com/in/anuj-taywade-326881270/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Anujjj69", icon: Twitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/anuj_taywade07/",
    icon: Instagram,
    label: "Instagram",
  },
];

const Page = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen px-6 pb-20 pt-32 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100"
            >
              <Sparkles className="size-4" />
              .available for freelancing
            </motion.div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] text-balance text-white sm:text-6xl lg:text-7xl">
                Hi I&apos;m <span className="text-teal-300">Anuj</span>
              </h1>

              <div className="h-12 text-2xl font-semibold text-zinc-200 sm:text-3xl">
                <TypeAnimation
                  sequence={["Full Stack Developer", 1000, "", 500]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </div>

              <p className="max-w-2xl text-lg leading-8 text-zinc-300 text-pretty">
                I&apos;m a Full Stack Developer who like to build Web apps and
                games. With a growing passion for exploring the world of AI.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                <MapPin className="size-4 text-amber-300" />
                Maharashtra, India
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                2023 - Present
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/Anuj_resume_updated.pdf"
                download="Anuj_resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
              >
                <Download className="size-5" />
                Download CV
              </a>
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-300/60 hover:text-amber-200"
              >
                <Mail className="size-5" />
                Contact
              </Link>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:-translate-y-1 hover:border-teal-300/60 hover:text-teal-200"
                >
                  <item.icon className="size-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="surface noise relative overflow-hidden rounded-[2rem] p-4">
              <div className="grid gap-4 md:grid-cols-[0.78fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.78fr_1fr]">
                <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src="/my pfp croped.jpg"
                    alt="Anuj Taywade"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="text-sm font-semibold text-white">Anuj Taywade</p>
                    <p className="text-xs text-zinc-300">Full Stack Developer</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-300" />
                      <span className="h-3 w-3 rounded-full bg-teal-300" />
                    </div>
                    <pre className="overflow-hidden text-sm leading-7 text-zinc-300">
{`const focus = [
  "Web apps",
  "Games",
  "AI"
];`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-3xl font-black text-white">8</p>
                      <p className="mt-1 text-sm text-zinc-400">Projects</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-3xl font-black text-teal-300">AI</p>
                      <p className="mt-1 text-sm text-zinc-400">Exploring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] p-3 text-zinc-300 transition hover:text-white md:grid"
        >
          <ArrowDown className="size-5" />
        </a>
      </section>

      <div id="about">
        <About />
      </div>
      <Projects />
    </div>
  );
};

export default Page;
