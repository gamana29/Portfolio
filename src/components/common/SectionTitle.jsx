function SectionTitle({ title, number }) {
  return (
    <div className="flex items-center gap-4 mb-12">

      <span className="text-cyan-400 font-mono">
        {number}
      </span>

      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <div className="h-px flex-1 bg-slate-700"></div>

    </div>
  );
}

export default SectionTitle;