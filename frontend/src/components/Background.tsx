import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* MAIN GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--bg-from), var(--bg-via), var(--bg-to))",
          backgroundSize: "300% 300%",
          animation: "gradientMove 14s ease infinite"
        }}
      />

      {/* AURORA BLOBS */}
      <motion.div
        className="
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-indigo-400/30
          blur-[120px]
          top-[-200px]
          left-[-200px]
        "
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-400/30
          blur-[120px]
          bottom-[-200px]
          right-[-200px]
        "
        animate={{ x: [0, -60, 0], y: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* MID LAYER GLOW */}
      <motion.div
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          bg-sky-300/20
          blur-[100px]
          top-[30%]
          left-[50%]
          -translate-x-1/2
        "
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* NOISE / GRAIN */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/noise.png')]
          opacity-[0.035]
          pointer-events-none
        "
      />
    </div>
  );
}
