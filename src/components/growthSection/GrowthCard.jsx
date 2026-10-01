export default function GrowthCard({
  children,
  className = "",
  tone = "white",
  ...rest
}) {
  const toneStyles =
    tone === "blue"
      ? "bg-[#0047FF] text-white shadow-xl border border-blue-600"
      : "bg-white text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100";

  return (
    <div className={`rounded-2xl ${toneStyles} ${className}`} {...rest}>
      {children}
    </div>
  );
}
