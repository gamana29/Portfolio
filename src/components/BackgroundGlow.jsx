function BackgroundGlow() {
  return (
    <>
      <div
        className="fixed top-0 right-0 w-96 h-96 rounded-full bg-cyan-500 opacity-10 blur-3xl pointer-events-none"
      ></div>

      <div
        className="fixed bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl pointer-events-none"
      ></div>
    </>
  );
}

export default BackgroundGlow;