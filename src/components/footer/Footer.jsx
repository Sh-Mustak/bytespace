import { Link } from "react-router-dom";
import Logo from "../../assets/logoFooter.svg";
import Button from "../common/Button";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-[#242528] font-normal">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-16 pb-10">
          <div>
            <Link
              to="/"
              className="flex items-center gap-1.5 font-extrabold text-[19px]"
            >
              <img src={Logo} alt="bytespace" />
            </Link>
            <p className="mt-3.5 text-[#242528]/70">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-8 mt-10 max-w-[420px] mt-10"
            >
              <input
                placeholder="Enter your email"
                className="flex-1 border border-[#CED0D3] rounded-full px-3.5 py-2.5 text-sm text-[#242528] placeholder:text-[#242528]/50 focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
              />
              <Button className="rounded-full">Search</Button>
            </form>
            <p className="mt-7 text-[12px] text-[#242528]/50">
              By subscribing you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          {columns.map((col, i) => (
            <div key={i}>
              {col.map((link) => (
                <a key={link} className="block my-4 text-xs text-[#242528]/70 cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-15 border-t border-[#CED0D3] text-[11px]">
          <span className="text-[#242528]/50 pt-5">
            © 2023 ByteSpace. All rights reserved.
          </span>
          <span className="text-[#242528]/50 pt-5">
            Privacy Policy&nbsp;&nbsp;&nbsp;Terms of
            Service&nbsp;&nbsp;&nbsp;Cookie Settings
          </span>
        </div>
      </div>
    </footer>
  );
}
