import { Link } from "react-router-dom";

export default function NavLinks({
  items,
  onItemClick,
  className = "",
  mobile = false,
}) {
  return (
    <div className={className}>
      {items.map((item) =>
        item.to ? (
          <Link
            key={item.label}
            to={item.to}
            onClick={onItemClick}
            className={
              mobile ? "py-3 border-b border-gray-100 font-medium" : undefined
            }
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className={
              mobile ? "py-3 border-b border-gray-100 font-medium" : undefined
            }
          >
            {item.label}
          </a>
        ),
      )}
    </div>
  );
}
