import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function VoteOption({
  option,
  selected,
  disabled,
  totalVotes,
  onClick
}: any) {
  const percent =
    totalVotes > 0
      ? Math.round((option.votes / totalVotes) * 100)
      : 0;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full
        relative
        rounded-lg
        px-4 py-3
        text-left
        transition-all
        ${
          selected
            ? "bg-[var(--surface-strong)] ring-2 ring-[var(--accent)]"
            : "glass hover:bg-white/20"
        }
      `}
    >
      {/* LEFT ACCENT STRIP */}
      {selected && (
        <span className="absolute left-0 top-0 h-full w-1 bg-[var(--accent)] rounded-l-lg" />
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium">
          {selected && (
            <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
          )}
          {option.text}
        </div>
        <span className="text-sm opacity-80">
          {option.votes}
        </span>
      </div>

      {/* RESULT BAR */}
      <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-[var(--accent-strong)]"
        />
      </div>

      <div className="text-xs mt-1 opacity-70">
        {percent}%
      </div>
    </motion.button>
  );
}
