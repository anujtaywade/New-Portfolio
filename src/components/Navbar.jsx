"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-lg text-white px-6 py-3 rounded-2xl shadow-lg border border-gray-700/40 w-auto">
      <div className="flex items-center justify-center">
     
        <button
          className="md:hidden text-2xl mr-3 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 flex flex-col items-center space-y-2 text-gray-300 border-t border-gray-700 pt-3"
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
