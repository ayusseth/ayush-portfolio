import { motion } from "framer-motion";

export default function SkillCard({ skill }) {

  return (
    <motion.div

      whileHover={{
        scale: 1.05,
        y: -8,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
      }}

      className="
        glass
        relative
        overflow-hidden
        rounded-3xl
        p-8
        text-center
        border
        border-white/10
        hover:border-purple-400
        hover:shadow-purple-500/20
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full" />

      {/* ICON */}
      <motion.div

        animate={{
          y: [0, -8, 0],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
        }}

        className="
          text-5xl
          text-purple-400
          flex
          justify-center
        "
      >
        {skill.icon}
      </motion.div>

      {/* NAME */}
      <h3 className="mt-6 text-lg font-medium text-gray-200">
        {skill.name}
      </h3>

    </motion.div>
  );
}