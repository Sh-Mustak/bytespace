export default function TestimonialCard({ name, role, quote, avatar }) {
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-full text-left">
      <div>
        {/* Avatar Image */}
        <div className="mb-5">
          <img
            src={avatar || "/img/Ellipse 1.png"}
            alt={name}
            className="w-14 h-14 rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Name & Role */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-900 tracking-tight mb-0.5">
            {name}
          </h4>
          <span className="text-xs font-medium text-[#0047FF] block">
            {role}
          </span>
        </div>

        {/* Quote */}
        <p className="text-lg leading-relaxed text-gray-500 font-normal">
          "{quote}"
        </p>
      </div>
    </div>
  );
}
