"use client";

import Link from "next/link";
import { useState } from "react";
import {X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/7 md:left-1/2 -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-lg text-white px-4 py-2 rounded-2xl shadow-lg border border-gray-700/40 w-auto">
      <div className="flex items-center justify-center relative">

     
        <button
          className="md:hidden text-2xl mr-1 focus:outline-none "
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-8"/> : "☰"}
        </button>

       
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/About" className="hover:text-blue-400 transition">About</Link>
          <Link href="/Projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/Contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>

     
      <AnimatePresence>
        {open && (
          <motion.div
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -20, opacity: 0 }}

  transition={{ duration: 0.25, ease: "easeOut" }}
  className="md:hidden absolute left-full top-1/2 -translate-y-1/2 ml-3 
             flex flex-row items-center gap-3 
             bg-gray-900/90 backdrop-blur-lg
             text-gray-300 px-4 py-3 
             rounded-xl border border-gray-700 shadow-lg "
>

            <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Home</Link>
            <Link href="/About" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">About</Link>
            <Link href="/Projects" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/Contact" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
