import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "./ImageModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projectsData = [
  {
    title: "EduStream Enterprise",
    description:
      "Won 1st Position in National Web Hackathon (out of 45 teams). Rapidly prototyped and deployed full-stack AI platform under extreme time pressure.",
    badge: "🏆 1st Place",
    badgeColor: "from-amber-400 to-orange-500",
  },
  {
    title: "Asynchronous Video Transcoding Daemon",
    description:
      "Engineered with Python, AWS EC2, FFmpeg, and SQS. Successfully reduced client-side blocking latency by 85%.",
    badge: "⚡ -85% Latency",
    badgeColor: "from-cyan-400 to-blue-500",
  },
  {
    title: "Tayyab Chat",
    description:
      "Real-time global broadcast system achieving sub-100ms message synchronization using Cloud Firestore WebSocket streams.",
    badge: "🌍 <100ms Sync",
    badgeColor: "from-emerald-400 to-teal-500",
  },
];

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentAlt, setCurrentAlt] = useState("");

  const openModal = (src, alt) => {
    setCurrentImage(src);
    setCurrentAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
    setCurrentAlt("");
  };

  const actionButtonClass =
    "rounded-full border border-cyan-500/20 bg-cyan-950/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-cyan-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/20 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]";

  return (
    <motion.section
      id="projects"
      className="pointer-events-none relative z-20 px-6 py-16 md:px-12 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        variants={itemVariants} 
        className="font-mono text-lg font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent md:text-xl"
      >
        High-Impact Projects
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="pointer-events-auto mt-8 max-w-4xl rounded-2xl border border-cyan-500/30 bg-cyan-950/15 p-6 backdrop-blur-md shadow-[0_0_32px_rgba(34,211,238,0.2)] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300/80">
              Featured Achievement
            </p>
            <h3 className="mt-3 font-mono text-lg font-semibold text-white md:text-xl">
              1st Place - AUREX '26 Web Development Competition
            </h3>
            <p className="mt-2 text-xs font-mono bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent md:text-sm">
              Team: Coders Den
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 md:text-base">
              Secured first place in the national web development competition.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              openModal("/hackathon-award.png", "AUREX '26 Award")
            }
            className={actionButtonClass}
          >
            View Award
          </button>
          <a
            href="https://codersden.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonClass}
          >
            Team Website
          </a>
        </div>
      </motion.div>

      <motion.div className="mt-10 max-w-4xl space-y-6" variants={containerVariants}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="pointer-events-auto group relative rounded-xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/20 hover:-translate-y-2 hover:shadow-[0_0_32px_rgba(34,211,238,0.3)] md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-mono text-base font-semibold text-white md:text-lg">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400 text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
            <div
              className={`mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r ${project.badgeColor} px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.35)]`}
            >
              {project.badge}
            </div>

            {project.title === "EduStream Enterprise" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openModal("/edustream-arch.png", "EduStream Architecture")
                  }
                  className={actionButtonClass}
                >
                  View Architecture
                </button>
              </div>
            ) : null}

            {project.title === "Tayyab Chat" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://tayyab-chat.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                >
                  Live Demo
                </a>
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={currentImage}
        alt={currentAlt}
        onClose={closeModal}
      />
    </motion.section>
  );
}
