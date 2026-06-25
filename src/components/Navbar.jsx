"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/10 bg-zinc-950/72 px-3 py-3 text-white shadow-2xl shadow-black/30 backdrop-blur-xl md:top-5 md:px-4">
      <div className="flex items-center justify-between gap-4">

        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-2 py-1.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-sm font-black text-zinc-950">
            AT
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-zinc-100 sm:block">
            Anuj Taywade
          </span>
        </Link>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

       
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-zinc-950"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

     
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-3 grid gap-1 border-t border-white/10 pt-3 md:hidden"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white text-zinc-950"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
