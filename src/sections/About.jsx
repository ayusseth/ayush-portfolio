import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 max-w-5xl mx-auto"
    >

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass rounded-3xl p-10 text-gray-300 text-lg leading-9"
      >
        Backend-focused engineer specializing in Java, Spring Boot,
        JWT authentication, OAuth 2.0 integrations, transaction
        management, and scalable API development.

        <br /><br />

        I focus on building secure, production-ready backend systems
        with clean architecture and strong engineering practices.
      </motion.div>
    </section>
  );
}