function CertificationCard({ certification }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white">
        {certification.name}
      </h3>

      <p className="text-cyan-400 mt-3">
        {certification.issuer}
      </p>
    </div>
  );
}

export default CertificationCard;