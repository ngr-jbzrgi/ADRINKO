export default function PageIntro({ title, subtitle, children }) {
  return (
    <div className="text-center mb-14">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">{title}</h1>
      {subtitle ? <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

