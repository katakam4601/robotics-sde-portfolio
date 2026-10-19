"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, RosLogo } from "./Icons";
import { resumeData } from "@/data/resume";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06090e]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1px] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#06090e] rounded-[7px] flex items-center justify-center text-cyan-400">
              <RosLogo className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <span className="font-bold font-heading text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              KATAKAM<span className="text-cyan-400">.ROBOTICS</span>
            </span>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ROBOTICS SDE</span>
            </div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={resumeData.contact.resumePdf}
            download="KATAKAM_SAI_KUMAR_Robotics_Software_Engineer.pdf"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono tracking-wide bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME (PDF)</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href={resumeData.contact.resumePdf}
            download="KATAKAM_SAI_KUMAR_Robotics_Software_Engineer.pdf"
            className="p-2 text-xs font-mono rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#06090e]/95 backdrop-blur-xl border-b border-cyan-500/20"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1 border-b border-slate-800/40"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-3">
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-slate-800 text-slate-200"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-slate-800 text-slate-200"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={resumeData.contact.resumePdf}
                  download="KATAKAM_SAI_KUMAR_Robotics_Software_Engineer.pdf"
                  className="flex-1 text-center py-2 bg-cyan-500 text-black font-semibold rounded text-sm font-mono"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
