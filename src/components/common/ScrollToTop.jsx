import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      }

      else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <AnimatePresence>

      {visible && (

        <motion.button

          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}

          transition={{
            duration: 0.3,
          }}

          onClick={scrollToTop}

          className="
            fixed
            bottom-8
            right-8
            z-50

            w-14
            h-14

            rounded-full

            bg-purple-600
            hover:bg-purple-500

            flex
            items-center
            justify-center

            shadow-lg
            shadow-purple-500/40

            transition-all
            duration-300

            hover:scale-110
          "
        >

          <ChevronUp size={28} />

        </motion.button>

      )}

    </AnimatePresence>
  );
}