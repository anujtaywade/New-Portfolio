import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-gray-400">
    
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/anujtaywade"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-taywade-326881270/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/Anujjj69"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/anuj_taywade07/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

   
      <p className="text-sm">
        © {new Date().getFullYear()} Available for Freelancing work. Dm on mail or Social handles 
      </p>
    </footer>
  );
};

export default Footer;
