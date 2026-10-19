"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Activity, Gauge, Cpu, CheckCircle2, TrendingUp, Layers } from "lucide-react";

export default function TelemetryBanner() {
  const icons = [Cpu, Gauge, TrendingUp, Activity, CheckCircle2, Layers];

  return (
    <section className="relative z-20 -mt-6 mb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1527]/90 via-[#0a1120]/90 to-[#0d1527]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                VERIFIED EXPERIENCE BENCHMARKS (FROM RESUME)
              </span>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-slate-500">
              NVIDIA & KPIT TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
            {resumeData.metricsFromExperience.map((metric, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col border-l-2 border-cyan-500/30 pl-3 group hover:border-cyan-400 transition-colors"
                >
                  <div className="flex items-center space-x-1.5 text-slate-400 text-xs font-mono mb-1">
                    <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{metric.label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {metric.context}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
