import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

import {
  MdApi,
  MdPayments,
} from "react-icons/md";

import {
  RiTokenSwapFill,
} from "react-icons/ri";

const backendFeatures = [
  {
    title: "JWT Authentication",
    description:
      "Implemented secure token-based authentication and role-based authorization using Spring Security and JWT.",

    icon: <RiTokenSwapFill />,
  },

  {
    title: "OAuth 2.0 Integration",
    description:
      "Integrated PayPal OAuth 2.0 flow for secure payment authorization and transaction verification.",

    icon: <FaShieldAlt />,
  },

  {
    title: "Transaction Management",
    description:
      "Designed backend logic for secure payment handling, validation, and database persistence.",

    icon: <MdPayments />,
  },

  {
    title: "REST API Architecture",
    description:
      "Built scalable REST APIs using layered architecture and clean separation of concerns.",

    icon: <MdApi />,
  },

  {
    title: "Database Engineering",
    description:
      "Worked with MySQL, JPA, Hibernate, and JDBC for optimized relational database operations.",

    icon: <FaDatabase />,
  },

  {
    title: "Backend Security",
    description:
      "Implemented password encryption, secure endpoints, and validation workflows.",

    icon: <FaLock />,
  },
];

export default function BackendProof() {
  return (
    <section
      id="backend-proof"
      className="py-28 px-6"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}

        className="text-4xl font-bold text-center mb-6"
      >
        Backend Engineering Proof
      </motion.h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-8">
        Demonstrating real-world backend engineering practices including
        secure authentication, API architecture, payment integrations,
        transaction management, and scalable system design.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {backendFeatures.map((feature, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: index * 0.1 }}

            className="glass rounded-3xl p-8 hover:border-purple-400 hover:scale-105 hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >

            {/* ANIMATED ICON */}
<motion.div

  animate={{
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
  }}

  transition={{
    duration: 4,
    repeat: Infinity,
  }}

  className="text-5xl text-purple-400"
>
  {feature.icon}
</motion.div>

            {/* TITLE */}
            <h3 className="mt-4 text-2xl font-semibold">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300 leading-8">
              {feature.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}