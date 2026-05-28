import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const skillsData = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda, DynamoDB, S3, EC2, SQS)",
      "Google Cloud",
      "Serverless Architecture",
    ],
  },
  {
    category: "Mobile & Performance",
    items: [
      "Flutter",
      "Firebase (Firestore, Cloud Functions)",
      "C++ Performance Optimization",
      "WebSockets",
      "ONNX Runtime",
    ],
  },
  {
    category: "Backend & Tooling",
    items: ["Python (uv ecosystem)", "Node.js", "FastAPI", "Distributed Systems"],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
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
        Core Weaponry
      </motion.h2>

      <motion.div
        className="mt-10 max-w-4xl grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {skillsData.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="pointer-events-auto group rounded-xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/20 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
          >
            <h3 className="font-mono text-sm font-semibold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              {skill.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-xs leading-relaxed text-gray-400">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
