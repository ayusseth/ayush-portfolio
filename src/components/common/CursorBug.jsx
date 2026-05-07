import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBug } from "react-icons/fa";

export default function CursorBug() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveBug = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveBug);

    return () =>
      window.removeEventListener("mousemove", moveBug);

  }, []);

  return (

    <motion.div

      animate={{
        x: position.x - 20,
        y: position.y - 20,
      }}

      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5,
      }}

      className="
        fixed
        top-0
        left-0
        z-[9999]
        pointer-events-none
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          w-12
          h-12
          bg-purple-500/30
          rounded-full
          blur-2xl
        "
      />

      {/* BUG ICON */}
      <motion.div

        animate={{
          rotate: [0, 8, -8, 0],
        }}

        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}

        className="
          relative
          text-purple-400
          drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]
        "
      >

        <FaBug size={28} />

      </motion.div>

    </motion.div>
  );
}