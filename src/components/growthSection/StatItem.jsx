export default function StatItem({ value, label }) {
  return (
    <div>
      {value}
      <span className="block text-xs text-gray-400 font-normal mt-1">
        {label}
      </span>
    </div>
  );
}
