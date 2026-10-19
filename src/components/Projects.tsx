"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Code2, Bot, FileText, CheckCircle2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-container relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Bot className="w-3.5 h-3.5" />
          <span>PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
          Key Technical <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Applied AI and intelligent systems engineered with modern toolchains and rigorous validation pipelines.
        </p>
      </div>

      {/* 2 Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {resumeData.projects.map((project, i) => {
          const isCopilot = project.title.toLowerCase().includes("copilot");
          const Icon = isCopilot ? Bot : FileText;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#0a1120] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400">
                      PROJECT
                    </div>
                  </div>
                </div>

                {/* Bullets directly from resume */}
                <ul className="space-y-4 my-6">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies from resume */}
              <div className="pt-6 border-t border-slate-800/80 mt-auto">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
