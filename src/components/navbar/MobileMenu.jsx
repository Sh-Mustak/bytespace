import NavAuthActions from "./NavAuthActions";
import NavLinks from "./NavLinks";

export default function MobileMenu({ items, open, onClose }) {
  return (
    <div
      id="mobile-menu"
      className={`lg:hidden absolute top-full inset-x-0 origin-top rounded-2xl bg-white text-gray-900 shadow-2xl p-5 transition-all duration-200 ${
        open
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-95 pointer-events-none"
      }`}
    >
      <div className="flex flex-col">
        <NavLinks items={items} onItemClick={onClose} mobile />
      </div>

      <NavAuthActions mobile onClick={onClose} />
    </div>
  );
}
