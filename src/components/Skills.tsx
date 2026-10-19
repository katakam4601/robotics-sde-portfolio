"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import {
  Code,
  Bot,
  Compass,
  Brain,
  Eye,
  Layers,
  Cpu,
  Cloud,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const categoryConfig: {
    [key: string]: { icon: any; color: string; border: string; bg: string };
  } = {
    "Programming Languages": {
      icon: Code,
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
    },
    "Robotics Frameworks": {
      icon: Bot,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
    "Autonomy & Motion Planning": {
      icon: Compass,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    "Embodied AI & Robot Learning": {
      icon: Brain,
      color: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
    },
    "Perception & Edge AI": {
      icon: Eye,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
    "Simulation & Sim-to-Real": {
      icon: Layers,
      color: "text-teal-400",
      border: "border-teal-500/30",
      bg: "bg-teal-500/10",
    },
    "Embedded & Control": {
      icon: Cpu,
      color: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-500/10",
    },
    "Deployment & Infrastructure": {
      icon: Cloud,
      color: "text-sky-400",
      border: "border-sky-500/30",
      bg: "bg-sky-500/10",
    },
    "Safety & Standards": {
      icon: ShieldCheck,
      color: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/10",
    },
  };

  const skillEntries = Object.entries(resumeData.skills);

  return (
    <section id="skills" className="section-container relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
          Robotics Software & AI <span className="gradient-text">Toolbox</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Comprehensive suite of frameworks, algorithms, simulators, embedded stacks, and functional safety standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillEntries.map(([title, items], i) => {
          const cfg = categoryConfig[title] || {
            icon: Wrench,
            color: "text-cyan-400",
            border: "border-cyan-500/30",
            bg: "bg-cyan-500/10",
          };
          const Icon = cfg.icon;

          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0a1120] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`p-3 rounded-2xl ${cfg.bg} ${cfg.border} border ${cfg.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold font-heading text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
