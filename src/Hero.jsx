import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.section
        id="home"
        className="pointer-events-none relative z-20 px-6 pb-20 pt-6 md:px-12 md:pb-28 md:pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
          variants={itemVariants}
          className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.12)] md:px-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            <img
              src="/mypic.png"
              alt="Tayyab Nasir"
              className="h-8 w-8 rounded-full border border-cyan-500/30 object-cover shadow-[0_0_16px_rgba(34,211,238,0.3)]"
            />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-200/80">
              Tayyab Nasir
            </span>
          </div>
          <div className="hidden items-center gap-6 font-mono text-xs text-cyan-100/70 md:flex">
            <a href="#home" className="transition-colors hover:text-cyan-200">
              Home
            </a>
            <a href="#skills" className="transition-colors hover:text-cyan-200">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-cyan-200">
              Projects
            </a>
            <a href="#experience" className="transition-colors hover:text-cyan-200">
              Experience
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="rounded-full border border-cyan-500/40 bg-cyan-950/20 px-4 py-2 text-xs font-mono text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-950/40 hover:shadow-[0_0_26px_rgba(34,211,238,0.35)]"
          >
            Download Resume
          </a>
        </motion.nav>

      <div className="mx-auto mt-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 md:grid-cols-2">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            variants={itemVariants}
            className="pointer-events-auto flex flex-col items-start justify-center gap-6 py-4 md:py-0"
          >
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300/80">
              Hey, I am Tayyab
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Cloud Architecture & Real-Time Systems
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
              Building low-latency mobile experiences, high-throughput asynchronous pipelines, and
              high-performance serverless infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Work
              </a>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="rounded-full border border-cyan-500/30 bg-cyan-950/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cyan-100 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Contact
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Canvas Area - Transparent, Allows Mouse Through */}
          <motion.div
            variants={itemVariants}
            className="pointer-events-none relative hidden h-full min-h-[360px] items-center justify-center md:flex"
          >
            {/* Glassmorphic Container - Transparent to Mouse */}
            <div className="h-full w-full rounded-3xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm shadow-[0_0_60px_rgba(34,211,238,0.08)]" />

            {/* Floating Stat Card - Clickable */}
            <div className="pointer-events-auto absolute -left-8 top-10 w-52 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4 backdrop-blur-md shadow-[0_0_24px_rgba(34,211,238,0.25)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.6)]">
                  <span className="text-sm font-bold">≡</span>
                </div>
                <div className="text-xs font-mono text-cyan-100">
                  Sub-100ms
                  <span className="mt-1 block text-[10px] text-cyan-200/70">
                    WebSocket Sync
                  </span>
                </div>
              </div>
            </div>

            {/* Data Core Label */}
            <div className="absolute bottom-6 right-6 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1 text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-200/80 backdrop-blur-md">
              Data Core
            </div>
          </motion.div>
        </div>

        {/* Mobile Fallback: Show floating card below on small screens */}
        <motion.div
          variants={itemVariants}
          className="pointer-events-auto mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4 backdrop-blur-md shadow-[0_0_24px_rgba(34,211,238,0.25)] md:hidden"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.6)]">
              <span className="text-sm font-bold">≡</span>
            </div>
            <div className="text-xs font-mono text-cyan-100">
              Sub-100ms
              <span className="mt-1 block text-[10px] text-cyan-200/70">
                WebSocket Sync
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      </motion.section>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
