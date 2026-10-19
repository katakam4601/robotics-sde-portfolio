"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu } from "lucide-react";
import { resumeData } from "@/data/resume";
import { NvidiaLogo } from "./Icons";

export default function Experience() {
  return (
    <section id="experience" className="section-container relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>WORK EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Around 4 years delivering autonomy, perception, and robot learning systems in C++ and Python.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0a1120]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-1/4 w-96 h-32 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {exp.company.toLowerCase().includes("nvidia") ? (
                      <NvidiaLogo className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    )}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {exp.role}
                  </h3>
                </div>
                <div className="text-cyan-400 font-semibold text-lg font-mono">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.duration}</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Bullet points verbatim from resume */}
            <ul className="space-y-4">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start space-x-3 group/item">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover/item:text-white transition-colors">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
