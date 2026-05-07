export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-purple-400">
          Ayush Seth
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}