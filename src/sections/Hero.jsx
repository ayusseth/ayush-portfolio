import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ayushImage from "../assets/ayush.png";
import FloatingElements from "../components/common/FloatingElements";

export default function Hero() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center px-6">

      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* PORTRAIT IMAGE */}
        <img
          src={ayushImage}
          alt="Ayush Seth"

          className="
            absolute
            right-0
            bottom-0
            h-[100vh]
            w-auto
            max-w-none
            object-contain
            object-right
            opacity-30
            blur-[0.5px]
            mix-blend-lighten
            scale-[1.02]
          "
        />
         {/* FLOATING ELEMENTS */}
  <FloatingElements />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[#020617]/72
          "
        />

        {/* LEFT SIDE FADE */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#020617]
            via-[#020617]/65
            to-transparent
          "
        />

      </div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 z-0">

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

      </div>

      {/* PURPLE GLOW */}
      <motion.div

        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
        }}

        className="
          absolute
          top-[-150px]
          left-[-150px]
          w-[500px]
          h-[500px]
          bg-purple-500/30
          rounded-full
          blur-[140px]
          z-0
        "
      />

      {/* BLUE GLOW */}
      <motion.div

        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}

        transition={{
          duration: 15,
          repeat: Infinity,
        }}

        className="
          absolute
          bottom-[-150px]
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-blue-500/30
          rounded-full
          blur-[140px]
          z-0
        "
      />

      {/* CENTER GLOW */}
      <motion.div

        animate={{
          scale: [1, 1.2, 1],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="
          absolute
          w-[400px]
          h-[400px]
          bg-fuchsia-500/20
          rounded-full
          blur-[120px]
          z-0
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center">

        {/* NAME */}
        <motion.h1

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          className="
            text-6xl
            md:text-8xl
            font-bold
            tracking-tight
          "
        >
          Ayush Seth
        </motion.h1>

        {/* TITLE */}
        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 0.3,
          }}

          className="
            mt-4
            text-xl
            md:text-2xl
            text-gray-400
          "
        >
          Software Engineer | Backend Developer
        </motion.p>

        {/* TYPEWRITER */}
        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 0.5,
          }}

          className="
            mt-6
            text-2xl
            md:text-3xl
            text-purple-400
            font-medium
          "
        >

          <Typewriter

            words={[
              "Java Developer",
              "Spring Boot Engineer",
              "Building Secure Backend Systems",
            ]}

            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />

        </motion.div>

        {/* DESCRIPTION */}
        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 0.8,
          }}

          className="
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            text-gray-300
            leading-9
          "
        >
          I build scalable, secure, and production-ready backend systems
          focused on authentication, performance, clean architecture,
          and real-world engineering solutions.
        </motion.p>

        {/* BUTTONS */}
        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 1,
          }}

          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-5
            justify-center
          "
        >

          {/* VIEW PROJECTS */}
          <a href="#projects">

            <button
              className="
                glass
                px-8
                py-4
                rounded-2xl
                hover:scale-105
                transition-all
                duration-300
                hover:border-purple-400
              "
            >
              View Projects
            </button>

          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/Ayush_Seth_Software_Engineer.pdf"
            download
          >

            <button
              className="
                bg-purple-600
                hover:bg-purple-500
                px-8
                py-4
                rounded-2xl
                transition-all
                duration-300
                shadow-lg
                shadow-purple-500/30
                hover:scale-105
              "
            >
              Download Resume
            </button>

          </a>

        </motion.div>

      </div>

    </section>
  );
}