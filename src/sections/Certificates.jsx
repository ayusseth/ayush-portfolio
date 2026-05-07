import { motion } from "framer-motion";

const certificates = [

  {
    title: "Java Programming",
    issuer: "NetCamp Pvt. Sol.",

    file: "/certificates/CoreJava_CRTFCT.pdf",
  },

  {
    title: "GitHub",
    issuer: "LinkedIn",

    file: "/certificates/CertificateOfCompletion_Career Essentials in GitHub Professional Certificate.pdf",
  }, 
  {
    title: "Java Developer Trainee",
    issuer: "Hulk Hire Tech",

    file: "/certificates/Completion Letter - HH- Tech.pdf",
  },

  {
    title: "BTech",
    issuer: "Dr. APJ Abdul Kalam Technical University",

    file: "/certificates/Degree-BTech.pdf",
  },
  {
  title: "Generative AI for Program Manager",
  issuer: "Infosys Springboard",

  file: "/certificates/Infosys_Gen_AI_Program_Manager.pdf",
},

{
  title: "Introduction to Generative AI on Azure",
  issuer: "Infosys Springboard",

  file: "/certificates/Introduction to Generative AI on Azure.pdf",
},

];

export default function Certificates() {

  return (
    <section
      id="certificates"
      className="py-28 px-6"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Certifications
      </h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-8">
        Certifications and technical learning experiences
        focused on backend engineering, security,
        scalable systems, and software development.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {certificates.map((certificate, index) => (

          <motion.div
            key={index}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            className="
              glass
              relative
              overflow-hidden
              rounded-3xl
              p-8
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

            {/* ICON */}
            <div className="text-5xl">
              📜
            </div>

            {/* TITLE */}
            <h3 className="mt-6 text-2xl font-semibold">
              {certificate.title}
            </h3>

            {/* ISSUER */}
            <p className="mt-3 text-gray-400">
              {certificate.issuer}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">

              {/* VIEW */}
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="glass px-5 py-3 rounded-xl hover:border-purple-400 transition-all duration-300">
                  View
                </button>
              </a>

              {/* DOWNLOAD */}
              <a
                href={certificate.file}
                download
              >
                <button className="bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl transition-all duration-300">
                  Download
                </button>
              </a>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}