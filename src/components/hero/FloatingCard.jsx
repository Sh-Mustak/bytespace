export default function FloatingCard({ style, className = '', children }) {
  return (
    <div
      style={style}
      className={`absolute bg-white text-black rounded-xl px-4 py-3 text-left text-[11.5px] shadow-[0_14px_34px_rgba(10,10,60,0.18)] z-[4] ${className}`}
    >
      {children}
    </div>
  )
}

export function AvatarStack({ count = 3, more }) {
  return (
    <div className="flex items-center mt-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <i
          key={i}
          className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white -ml-1.5 first:ml-0"
        />
      ))}
      {more && (
        <span className="w-5 h-5 rounded-full bg-gray-100 grid place-items-center text-[8.5px] font-bold text-mut border-2 border-white -ml-1.5">
          {more}
        </span>
      )}
    </div>
  )
}
