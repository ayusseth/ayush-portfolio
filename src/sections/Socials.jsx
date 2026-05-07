import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Socials() {
  return (
    <section className="py-28 px-6">

      <h2 className="text-4xl font-bold text-center mb-14">
        Connect With Me
      </h2>

      <div className="flex justify-center gap-8">

        {/* GITHUB */}
        <a
          href="https://github.com/ayusseth"
          target="_blank"
          className="glass p-6 rounded-2xl hover:scale-110 transition-all duration-300 text-3xl hover:text-purple-400"
        >
          <FaGithub />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/ayuseth/"
          target="_blank"
          className="glass p-6 rounded-2xl hover:scale-110 transition-all duration-300 text-3xl hover:text-purple-400"
        >
          <FaLinkedin />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/ayusseth_"
          target="_blank"
          className="glass p-6 rounded-2xl hover:scale-110 transition-all duration-300 text-3xl hover:text-purple-400"
        >
          <FaInstagram />
        </a>

      </div>
    </section>
  );
}