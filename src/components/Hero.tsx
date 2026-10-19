"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Cpu, Zap } from "lucide-react";
import Image from "next/image";
import { resumeData } from "@/data/resume";
import { RosLogo } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber radar circles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/30 animate-pulse-slow" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-cyan-500/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ROBOTICS SOFTWARE ENGINEER • ~4 YEARS EXP • {resumeData.contact.location.toUpperCase()}</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-white"
            >
              Hi, I&apos;m <span className="gradient-text">{resumeData.name}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="h-0.5 w-8 bg-cyan-400 hidden sm:block" />
              <h2 className="text-xl sm:text-2xl font-mono text-cyan-300 tracking-wide">
                {resumeData.role}
              </h2>
            </motion.div>

            {/* Summary directly from resume */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl lg:mx-0 mx-auto mb-8 leading-relaxed font-normal"
            >
              {resumeData.summary}
            </motion.p>

            {/* Resume Skills pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
            >
              {["C++", "Python", "ROS2", "Nav2", "Isaac Sim", "Isaac Lab", "TensorRT", "Jetson", "FreeRTOS", "CAN Bus"].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#experience"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-xl font-bold font-mono text-sm flex items-center justify-center space-x-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/25"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={resumeData.contact.resumePdf}
                download="KATAKAM_SAI_KUMAR_Robotics_Software_Engineer.pdf"
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/90 border border-cyan-500/30 text-cyan-300 rounded-xl font-semibold font-mono text-sm flex items-center justify-center space-x-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto px-5 py-3.5 text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>PROJECTS &gt;</span>
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              {/* Outer Rotating Calibration Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-emerald-500/20 animate-spin-reverse-slow pointer-events-none" />

              {/* Glowing Corner Crosshairs */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 rounded-full overflow-hidden border-4 border-cyan-500/30 bg-slate-900 shadow-2xl shadow-cyan-500/20 group">
                <Image
                  src="/assets/dp.jpg"
                  alt={resumeData.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090e]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badges with Exact Resume Metrics */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:-right-6 px-3 py-1.5 rounded-lg bg-[#0d1527]/90 border border-cyan-400/40 backdrop-blur-md shadow-lg shadow-cyan-500/10 flex items-center space-x-2"
              >
                <RosLogo className="w-4 h-4 text-cyan-400" />
                <div className="text-left font-mono text-[10px]">
                  <div className="text-slate-400 leading-tight">Isaac Lab Parallel</div>
                  <div className="text-cyan-300 font-bold">4,096 Envs</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-left-6 px-3 py-1.5 rounded-lg bg-[#0d1527]/90 border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-500/10 flex items-center space-x-2"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                <div className="text-left font-mono text-[10px]">
                  <div className="text-slate-400 leading-tight">Jetson TensorRT</div>
                  <div className="text-emerald-300 font-bold">19ms • 30 FPS</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 right-0 px-2.5 py-1 rounded-full bg-slate-900/90 border border-amber-400/50 font-mono text-[9px] text-amber-300 flex items-center space-x-1"
              >
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Sim-to-Real: 89%</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
