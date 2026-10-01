export default function CategoryCard({ name, icon }) {
  return (
    <div className="rounded-2xl border border-[#CED0D3] px-2 py-6 text-center text-[12.5px] font-semibold transition hover:border-blue">
      <div className="mx-auto mb-3.5 grid h-[50px] w-[50px] place-items-center rounded-full bg-lime">
        {icon && (
          <img
            src={icon}
            alt={`${name} icon`}
            className="h-[40px] w-[40px]"
          />
        )}
      </div>

      {name}
    </div>
  );
}