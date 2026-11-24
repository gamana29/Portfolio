import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6">

      <a
        href="https://github.com/gamana29"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub
          size={22}
          className="hover:text-cyan-400 duration-300"
        />
      </a>

      <a
        href="https://linkedin.com/in/chirumamillagamana"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin
          size={22}
          className="hover:text-cyan-400 duration-300"
        />
      </a>

      <a href="mailto:2320040075ece@gmail.com">
        <FaEnvelope
          size={22}
          className="hover:text-cyan-400 duration-300"
        />
      </a>

      <div className="w-px h-24 bg-slate-500"></div>

    </div>
  );
}

export default SocialLinks;