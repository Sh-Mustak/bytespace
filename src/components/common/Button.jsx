export default function Button({
  children,
  as: As = "button",
  className = "",
  
  ...rest
}) {
  return (
    <As
      className={`bg-[#D4FB20] text-[#242528] font-satoshi font-bold text-sm px-6 py-3 font-normal whitespace-nowrap inline-block ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}
