const projects = [
  {
    title: "PayPal Payment Integration",
    description:
      "Secure payment processing system using OAuth 2.0, Spring Boot, and MySQL.",
    tech: ["Spring Boot", "OAuth 2.0", "MySQL"],

    github: "https://github.com/ayusseth/paypal-integration",
  },

  {
    title: "OTP Authentication System",
    description:
      "Secure authentication flow with OTP validation and modular backend architecture.",
    tech: ["Java", "JWT", "Spring Boot"],

    github: "https://github.com/ayusseth/OTP-Generator",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >

      <h2 className="text-4xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:border-purple-400 block"
          >

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-purple-400">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300 leading-8">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex gap-3 flex-wrap mt-6">

              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* REPOSITORY TEXT */}
            <div className="mt-8">
              <span className="text-purple-400 font-medium">
                View Repository →
              </span>
            </div>

          </a>

        ))}

      </div>
    </section>
  );
}