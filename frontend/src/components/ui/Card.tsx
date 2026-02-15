// import { motion } from "framer-motion";

// export default function Card({ children }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.25 }}
//       className="
//         glass
//         w-full
//         max-w-md
//         rounded-xl
//         px-5 pt-5 pb-6
//         overflow-visible
//         h-fit
//       "
//     >
//       {children}
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";

export default function Card({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        glass
        w-full
        max-w-md
        rounded-xl
        px-5
        pt-5
        pb-6
        h-auto
        mt-6            /* ⬅️ important */
        overflow-visible
      "
    >
      {children}
    </motion.div>
  );
}
