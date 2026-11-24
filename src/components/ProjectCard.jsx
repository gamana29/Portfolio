function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="text-slate-400 mt-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech?.map((skill, index) => (
          <span
            key={index}
            className="text-sm bg-slate-800 text-cyan-400 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>


      {project.github && project.github !== "#" && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-cyan-400 hover:text-cyan-300 transition"
        >
          View GitHub →
        </a>
      )}

    </div>
  );
}

export default ProjectCard;