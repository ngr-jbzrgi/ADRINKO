export default function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      <h2 className="text-5xl font-bold mb-4 text-gradient">{title}</h2>
      {subtitle ? <p className="text-xl text-gray-400">{subtitle}</p> : null}
    </div>
  );
}

