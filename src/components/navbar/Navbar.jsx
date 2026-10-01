import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Header_Logo.svg";
import Cart from "../../assets/Style=Outlined.svg";
import MobileMenu from "./MobileMenu";
import NavAuthActions from "./NavAuthActions";
import NavLinks from "./NavLinks";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and when the viewport grows to desktop size
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className="flex items-center justify-between py-6 text-sm relative z-[3]">
      <Link
        to="/"
        className="flex items-center gap-1.5 font-extrabold text-[19px] -tracking-[0.2px]"
      >
        <img src={Logo} alt="bytespace" />
      </Link>

      <NavLinks items={NAV_LINKS} className="hidden lg:flex gap-7" />

      <div className="flex gap-4 sm:gap-6 items-center">
        <NavAuthActions />

        <img src={Cart} alt="Cart" />

        {/* Hamburger (tablet + mobile) */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden p-1 -mr-1"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <MobileMenu items={NAV_LINKS} open={open} onClose={close} />
    </nav>
  );
}
