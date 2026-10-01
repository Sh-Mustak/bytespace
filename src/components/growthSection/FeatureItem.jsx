export default function FeatureItem({ text }) {
  return (
    <li className="text-xs md:text-sm font-semibold text-gray-800 flex items-center gap-3">
      <span className="w-5 h-5 rounded-full bg-[#0047FF] text-white grid place-items-center text-[10px] shrink-0 font-bold">
        ✓
      </span>
      {text}
    </li>
  );
}
