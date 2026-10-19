"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="education" className="section-container relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PROFESSIONAL SUMMARY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6 text-white">
            Robotics Software <span className="gradient-text">Engineer</span>
          </h2>

          <div className="p-6 rounded-3xl bg-[#0a1120] border border-slate-800 mb-8">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              &ldquo;{resumeData.summary}&rdquo;
            </p>
          </div>

          {/* Quick Metrics from Resume Work */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0a1120] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 mb-1">
                ~4 Years
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Robotics Engineering Experience
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0a1120] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mb-1">
                C++ & Python
              </div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Core Autonomy & Learning Systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Education & Standards from Resume */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#0a1120] border border-slate-800 rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">Education</h3>
              <p className="text-xs font-mono text-slate-400">Graduate Degree</p>
            </div>
          </div>

          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-6">
              <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
              <p className="text-cyan-400 font-semibold text-base mb-3">{edu.institution}</p>

              <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}

          {/* Safety & Standards from Resume */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Safety & Standards:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills["Safety & Standards"].map((std, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
