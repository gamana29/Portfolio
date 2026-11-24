import SectionTitle from "./common/SectionTitle";
import Container from "./common/Container";

const skills = {
  Languages: ["Java", "Python", "JavaScript", "C"],
  Frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL", "MongoDB"],
  Cloud: ["AWS"],
  Tools: ["Git", "GitHub", "VS Code", "Linux"],
  Wireless: ["5G", "6G", "MIMO", "OFDM", "Beam Training"],
};

function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>

        <SectionTitle number="02." title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
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

export default Skills;