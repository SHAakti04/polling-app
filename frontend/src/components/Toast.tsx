import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message }: { message: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-xl"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
