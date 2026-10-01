export default function Button({
  children,
  as: As = "button",
  className = "",
  ...rest
}) {
  return (
    <As
      className={`bg-lime text-blue-d font-bold text-sm px-6 py-3 rounded-lg whitespace-nowrap inline-block ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}
