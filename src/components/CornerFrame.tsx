interface CornerFrameProps {
  accent?: "cyan" | "lime";
  visible?: boolean;
}

/** Viewfinder-style corner brackets, absolutely positioned over a `relative` parent. */
const CornerFrame = ({ accent = "cyan", visible = true }: CornerFrameProps) => {
  const color = accent === "cyan" ? "border-brand-1" : "border-brand-2";
  const opacity = visible ? "opacity-100" : "opacity-0 group-hover:opacity-100";
  const base = `pointer-events-none absolute h-5 w-5 transition-opacity duration-300 ${opacity} ${color}`;

  return (
    <>
      <span className={`${base} -top-px -left-px border-l-2 border-t-2`} />
      <span className={`${base} -top-px -right-px border-r-2 border-t-2`} />
      <span className={`${base} -bottom-px -left-px border-l-2 border-b-2`} />
      <span className={`${base} -bottom-px -right-px border-r-2 border-b-2`} />
    </>
  );
};

export default CornerFrame;
