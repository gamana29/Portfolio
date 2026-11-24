import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Side */}

        <div>

          <p className="text-slate-300 leading-8 text-lg">

            {profile.description}

          </p>

        </div>

        {/* Right Side */}

        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">

          <h3 className="text-2xl font-semibold mb-5">
            Education
          </h3>

          <p className="text-slate-400">

            🎓 B.Tech – Electronics and Communication Engineering

          </p>

          <p className="text-slate-500 mt-2">

            KL University

          </p>

          <hr className="my-6 border-slate-700"/>

          <h3 className="text-2xl font-semibold mb-5">
            Interests
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>✔ Software Engineering</li>

            <li>✔ Artificial Intelligence</li>

            <li>✔ 5G/6G Wireless Technologies</li>

            <li>✔ Cloud Computing</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;