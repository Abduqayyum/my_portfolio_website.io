interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  isDarkMode: boolean;
  align?: "center" | "left";
}

const SectionHeading = ({ index, kicker, title, isDarkMode, align = "center" }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-8 sm:mb-12`}>
      <span
        className={`font-mono text-xs sm:text-sm tracking-widest mb-3 flex items-center gap-2 ${
          isDarkMode ? "text-brand-1" : "text-brand-1"
        }`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-2 animate-pulse" />
        {`// ${index} — ${kicker}`}
      </span>
      <h2
        className={`text-3xl sm:text-4xl font-bold transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
