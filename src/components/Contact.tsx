"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, RosLogo } from "./Icons";
import { resumeData } from "@/data/resume";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Direct Email",
      value: resumeData.contact.email,
      href: `mailto:${resumeData.contact.email}`,
      actionText: "Send Email",
    },
    {
      icon: Phone,
      label: "Phone / Signal",
      value: resumeData.contact.phone,
      href: `tel:${resumeData.contact.phone.replace(/[^0-9+]/g, "")}`,
      actionText: "Call Direct",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Network",
      value: "sai-kumar-katakam-821552209",
      href: resumeData.contact.linkedin,
      actionText: "Connect on LinkedIn",
    },
    {
      icon: GithubIcon,
      label: "GitHub Repositories",
      value: "github.com/katakam4601",
      href: resumeData.contact.github,
      actionText: "View Code",
    },
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Send className="w-3.5 h-3.5" />
          <span>CONTACT & RECRUITMENT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-4 text-white">
          Let&apos;s Deploy Next-Gen <span className="gradient-text">Robotics</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Available for Robotics Software Engineer, Autonomy Engineer, and Robot Learning roles across the United States. Open to relocate.
        </p>

        {/* Copy Email Fast Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "EMAIL COPIED TO CLIPBOARD" : "COPY EMAIL TO CLIPBOARD"}</span>
          </button>

          <a
            href={resumeData.contact.resumePdf}
            download="Katakam_Saikumar_Robotics_SDE_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black text-xs font-mono font-bold hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contactCards.map((card, i) => (
          <motion.a
            key={i}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-6 rounded-3xl bg-[#0a1120] border border-slate-800 hover:border-cyan-500/40 hover:scale-[1.02] transition-all group shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <card.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  {card.label}
                </p>
                <p className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                  {card.value}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06090e] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <RosLogo className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-bold font-heading text-white">
              {resumeData.name} • Robotics Software Engineer
            </p>
            <p className="text-xs font-mono text-slate-500">
              Autonomous Navigation • Sim-to-Real • Embodied AI • Edge Jetson
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={resumeData.contact.resumePdf}
            download="Katakam_Saikumar_Robotics_SDE_Resume.pdf"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
