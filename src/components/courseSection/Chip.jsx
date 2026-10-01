export default function Chip({ label, active }) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-xs cursor-pointer ${
        active ? 'bg-[#D4FB20] text-blue-d font-bold' : 'bg-gray-100 text-gray-500'
      }`}
    >
      {label}
    </span>
  )
}
