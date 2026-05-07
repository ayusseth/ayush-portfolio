import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-xl"
    >
      <h3 className="text-xl">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.desc}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {project.tech.map((t, i) => (
          <span key={i} className="bg-accent px-3 py-1 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}