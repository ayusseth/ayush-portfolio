import { motion } from "framer-motion";

export default function FloatingElements() {

  return (

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* LARGE ORB */}
      <motion.div

        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="
          absolute
          top-[20%]
          left-[10%]
          w-40
          h-40
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
      />

      {/* BLUE ORB */}
      <motion.div

        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="
          absolute
          bottom-[20%]
          left-[15%]
          w-52
          h-52
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* ROTATING RING */}
      <motion.div

        animate={{
          rotate: 360,
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          top-[35%]
          left-[18%]
          w-32
          h-32
          border
          border-purple-400/20
          rounded-full
        "
      />

      {/* SMALL PARTICLES */}
      {[...Array(8)].map((_, i) => (

        <motion.div

          key={i}

          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}

          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}

          className="
            absolute
            w-2
            h-2
            rounded-full
            bg-purple-400
          "

          style={{
            top: `${20 + i * 8}%`,
            left: `${8 + i * 3}%`,
          }}
        />

      ))}

    </div>
  );
}