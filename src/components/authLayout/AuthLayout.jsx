import { Link } from "react-router-dom";
import Logo from "../../assets/Header_Logo.svg";

export default function AuthLayout({
  eyebrow,
  pitch,
  description,
  formTitle,
  children,
}) {
  return (
    <div className="min-h-screen w-full bg-[#0047FF] text-white font-sans flex flex-col justify-between p-6 md:p-12 relative overflow-hidden bg-[radial-gradient(#0052FF_1px,transparent_1px)] [background-size:32px_32px]">
      {/* Top Header Logo */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between z-10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ByteSpace Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8 z-10">
        {/* Left Side: Copy + Hero Cards Graphic */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
              {pitch}
            </h2>
            <p className="text-sm leading-relaxed text-blue-100/80">
              {description}
            </p>
          </div>

          {/* Graphical Mockup Image */}
          <div className="relative pt-6 max-w-lg">
            <img
              src="/img/Group 8.png"
              alt="ByteSpace Showcase"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: White Auth Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-white rounded-[32px] p-8 md:p-12 shadow-2xl text-gray-900 flex flex-col min-h-[580px]">
            {eyebrow && (
              <span className="text-xs font-semibold text-[#2563EB] mb-2 block">
                {eyebrow}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              {formTitle}
            </h1>

            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-4" />
    </div>
  );
}
