function Button({ children }) {
  return (
    <button
      className="
      border
      border-cyan-400
      text-cyan-400
      px-7
      py-3
      rounded-lg
      hover:bg-cyan-400
      hover:text-slate-950
      duration-300
      cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;