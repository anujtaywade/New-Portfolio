import React from "react";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const links = [
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
    {
      href: "mailto:anujtaywade456@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/35 px-6 py-10 text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-300">
            Anuj Taywade
          </p>
          <p className="mt-2 max-w-xl text-sm">
            Available for Freelancing work. Dm on mail or Social handles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={item.label}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-200"
            >
              <item.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-zinc-600 md:text-left">
        (c) {new Date().getFullYear()} Anuj Taywade
      </p>
    </footer>
  );
};

export default Footer;
