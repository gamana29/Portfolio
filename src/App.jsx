import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BackgroundGlow from "./components/BackgroundGlow";
import SocialLinks from "./components/SocialLinks";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <BackgroundGlow />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <SocialLinks />

      <Contact />
    </>
  );
}

export default App;