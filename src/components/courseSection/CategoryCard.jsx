import { categoryIcons } from '../icons/Icons'

export default function CategoryCard({ name }) {
  const Icon = categoryIcons[name]
  return (
    <div className="border border-line rounded-2xl py-6 px-2 text-center text-[12.5px] font-semibold transition hover:border-blue">
      <i className="not-italic grid place-items-center w-[38px] h-[38px] mx-auto mb-3.5 rounded-full bg-lime">
        {Icon && <Icon className="w-[17px] h-[17px]" />}
      </i>
      {name}
    </div>
  )
}
