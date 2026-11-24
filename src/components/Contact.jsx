import contact from "../data/contact";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-3">
          Get In Touch
        </h2>

        <p className="text-center text-slate-400 mb-16">
          I'm always interested in internships, software engineering,
          AI, networking, cybersecurity, and 5G/6G opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-cyan-400" />

                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-cyan-400"
                >
                  {contact.email}
                </a>

              </div>

              <div className="flex items-center gap-4">

                <FaPhone className="text-cyan-400" />

                {contact.phone}

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-cyan-400" />

                {contact.location}

              </div>

              <div className="flex items-center gap-4">

                <FaGithub className="text-cyan-400" />

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  GitHub
                </a>

              </div>

              <div className="flex items-center gap-4">

                <FaLinkedin className="text-cyan-400" />

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  LinkedIn
                </a>

              </div>

            </div>

            <a
              href={contact.resume}
              download="Gamana-Chirumamilla-Resume.pdf"
              className="inline-flex items-center gap-3 mt-10 bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <FaDownload />

              Download Resume

            </a>

          </div>

          {/* Right */}

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h3 className="text-2xl font-bold mb-8">
              Let's Connect
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-slate-800 outline-none resize-none"
              ></textarea>

              <button
                className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;