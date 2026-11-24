import Container from "./common/Container";
import SectionTitle from "./common/SectionTitle";
import experiences from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>

        <SectionTitle
          number="03."
          title="Experience"
        />

        <div className="space-y-8">

          {experiences.map((exp) => (

            <div
              key={exp.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-white">
                {exp.role}
              </h3>

              <p className="text-cyan-400 mt-2">
                {exp.company}
              </p>

              <p className="text-slate-500 mb-5">
                {exp.duration}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-slate-300">

                {exp.description.map((point, index) => (

                  <li key={index}>
                    {point}
                  </li>

                ))}

              </ul>

              <div className="flex flex-wrap gap-2 mt-6">

                {exp.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;