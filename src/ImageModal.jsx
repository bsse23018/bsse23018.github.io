import { AnimatePresence, motion } from "framer-motion";

export default function ImageModal({ isOpen, imageSrc, alt, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && imageSrc ? (
        <motion.div
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-100 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/60 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
              aria-label="Close image modal"
            >
              X
            </button>
            <img
              src={imageSrc}
              alt={alt}
              className="max-h-[85vh] w-full rounded-2xl border border-cyan-500/20 object-contain shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
