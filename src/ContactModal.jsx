import { AnimatePresence, motion } from "framer-motion";

const contactItems = [
  {
    label: "Email",
    value: "muhammadtayyab35201@gmail.com",
    href: "mailto:muhammadtayyab35201@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+923274416179",
    href: "tel:+923274416179",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M7 5a2 2 0 0 1 2-2h2a1 1 0 0 1 1 1l.5 3a1 1 0 0 1-.27.9l-1.4 1.4a12 12 0 0 0 5.3 5.3l1.4-1.4a1 1 0 0 1 .9-.27l3 .5a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-1C9.4 18.2 5.8 14.6 5.8 10V9a2 2 0 0 1 1.2-1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/muhammad-tayyab-41a0b6213",
    href: "https://www.linkedin.com/in/muhammad-tayyab-41a0b6213",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M7 9v8m0-11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM11 17V9m0 3.5c.8-1.2 2-2 3.5-2 2.2 0 3.5 1.4 3.5 4V17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6 shadow-[0_0_32px_rgba(34,211,238,0.25)] backdrop-blur-md"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-100 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/60 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
              aria-label="Close contact modal"
            >
              X
            </button>

            <h3 className="font-mono text-base font-semibold text-white">
              Contact Channels
            </h3>
            <p className="mt-1 text-xs text-cyan-200/70">
              Direct lines for collaboration and opportunities.
            </p>

            <div className="mt-6 space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-950/10 px-4 py-3 text-xs font-mono text-cyan-100 transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/5"
                >
                  <span className="flex items-center gap-3 text-cyan-200">
                    {item.icon}
                    {item.label}
                  </span>
                  <span className="text-cyan-100/80">{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
