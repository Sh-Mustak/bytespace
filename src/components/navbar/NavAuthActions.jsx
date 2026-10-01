import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function NavAuthActions({ mobile = false, onClick }) {
  if (mobile) {
    return (
      <div className="sm:hidden flex flex-col gap-3 pt-4">
        <Link
          to="/signin"
          onClick={onClick}
          className="text-center py-2.5 font-medium"
        >
          Sign In
        </Link>
        <Button
          as={Link}
          to="/signup"
          onClick={onClick}
          className="!py-2.5 rounded-full text-center"
        >
          Join Us
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden sm:flex gap-6 items-center">
      <Link to="/signin">Sign In</Link>
      <Button as={Link} to="/signup" className="!px-5 !py-2.5 rounded-full">
        Join Us
      </Button>
    </div>
  );
}
