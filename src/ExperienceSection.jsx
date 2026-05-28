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

const experienceData = [
  {
    role: "Teaching Assistant (Object-Oriented Programming)",
    company: "Information Technology University",
    description:
      "Redesigned lab distribution via GitHub Classroom and engineered automated testing frameworks using GitHub Actions CI.",
  },
  {
    role: "Flutter Development Intern",
    company: "Granjur Technologies",
    description:
      "Shipped production-ready cross-platform applications and optimized mobile auth pipelines.",
  },
];

export default function ExperienceSection() {
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
      id="experience"
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
        Experience Timeline
      </motion.h2>

      <motion.div className="mt-10 max-w-4xl space-y-6" variants={containerVariants}>
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="pointer-events-auto group relative rounded-xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md p-6 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/20 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full border border-cyan-400 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 shadow-[0_0_12px_rgba(34,211,238,0.4)]" />
              <div className="flex-1">
                <h3 className="font-mono text-base font-semibold text-white md:text-lg">
                  {exp.role}
                </h3>
                <p className="mt-1 text-xs font-mono bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent md:text-sm">
                  @ {exp.company}
                </p>
                <p className="mt-3 leading-relaxed text-gray-400 text-sm md:text-base">
                  {exp.description}
                </p>

                {exp.company === "Granjur Technologies" ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        openModal(
                          "/internship_certificate.jpeg",
                          "Granjur Technologies Internship Certificate"
                        )
                      }
                      className={actionButtonClass}
                    >
                      View Certificate
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
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
