import { motion } from "framer-motion";

export default function FlowCard({ title, steps }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold text-purple-400">{title}</h3>

      <ul className="mt-4 space-y-2 text-gray-300">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-purple-400">→</span>
            {step}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}