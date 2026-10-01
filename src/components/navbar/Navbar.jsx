import { Link } from "react-router-dom";
import Logo from "../../assets/Header_Logo.svg";
import Cart from "../../assets/Style=Outlined.svg";
import Button from "../common/Button";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 text-sm relative z-[3]">
      <Link
        to="/"
        className="flex items-center gap-1.5 font-extrabold text-[19px] -tracking-[0.2px]"
      >
        <img src={Logo} alt="bytespace" />
      </Link>
      <div className="hidden md:flex gap-7">
        <Link to="/">Home</Link>
        <a href="#courses">Courses</a>
        <a href="#creators">Creators</a>
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/signin">Sign In</Link>
        <Button as={Link} to="/signup" className="!px-5 !py-2.5 rounded-full">
          Join Us
        </Button>
        <img src={Cart} alt="Cart" />
      </div>
    </nav>
  );
}
