import Container from "./common/Container";
import SectionTitle from "./common/SectionTitle";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>

        <SectionTitle
          number="05."
          title="Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;