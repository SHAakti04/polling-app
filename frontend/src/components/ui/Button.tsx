import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: any) {
  const styles =
    variant === "danger"
      ? "bg-red-500/30 hover:bg-red-500/40"
      : "bg-indigo-500/30 hover:bg-indigo-500/40";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className={`px-4 py-2 rounded-xl backdrop-blur-md 
      text-white font-medium transition-all ${styles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
