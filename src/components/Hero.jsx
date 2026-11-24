import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Intro */}
        <p className="text-cyan-400 text-lg font-mono mb-4">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
          {profile.name}
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "AI Engineer",
            2000,
            "5G/6G Wireless Enthusiast",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl font-bold text-slate-400 mt-6"
        />

        {/* Description */}
        <p className="mt-8 max-w-3xl text-slate-400 text-lg leading-8">
          {profile.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href={profile.resume}
            download="Gamana-Chirumamilla-Resume.pdf"
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <div className="w-7 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>

        <p className="text-slate-500 text-sm mt-3">
          Scroll Down
        </p>
      </div>
    </section>
  );
}

export default Hero;