import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";
import Contact from "./sections/Contact";
import BackendProof from "./sections/BackendProof";
import Certificates from "./sections/Certificates";
import ScrollToTop from "./components/common/ScrollToTop";
import CursorBug from "./components/common/CursorBug";

export default function App() {
  return (
    <>
    <CursorBug />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <BackendProof />
      <Socials />
      <Contact />
      <ScrollToTop />
    </>
  );
}