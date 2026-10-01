export function LimeSquiggle({ style, className = '' }) {
  return <img src="/img/lime-squiggle.png" alt="" style={style} className={`absolute z-[2] ${className}`} />
}
export function WhiteSquiggle({ style, className = '' }) {
  return <img src="/img/white-squiggle.png" alt="" style={style} className={`absolute z-[2] ${className}`} />
}
export function Ring({ className = '' }) {
  return (
    <span
      className={`absolute z-[2] w-[78px] h-[78px] rounded-full border-[19px] border-white left-[5%] bottom-9 ${className}`}
    />
  )
}
export function Triangle({ style, className = '' }) {
  return (
    <span
      style={style}
      className={`absolute z-[2] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[46px] border-b-white right-[15%] top-14 ${className}`}
    />
  )
}
export function Cube({ className = '' }) {
  return (
    <span
      className={`absolute z-[2] w-[70px] h-[70px] bg-lime rounded-lg -right-2.5 top-5 rotate-[18deg] ${className}`}
    />
  )
}
