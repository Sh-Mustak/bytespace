import { Link } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout.jsx";

export default function SignUp() {
  return (
    <AuthLayout
      eyebrow="Create an Account"
      pitch="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      formTitle={
        <>
          Welcome to
          <br />
          ByteSpace
        </>
      }
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col flex-1"
      >
        <label className="text-xs font-medium text-gray-700 mb-1.5 block">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Jamie Davis"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
        />

        <label className="text-xs font-medium text-gray-700 mt-4 mb-1.5 block">
          Email
        </label>
        <input
          type="email"
          placeholder="designer@example.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
        />

        <label className="text-xs font-medium text-gray-700 mt-4 mb-1.5 block">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
        />

        {/* Lime Submit Button */}
        <button
          type="submit"
          className="self-end mt-6 bg-[#D4F933] hover:bg-[#c2ed25] text-gray-900 font-semibold px-7 py-2.5 rounded-full text-xs transition-all shadow-sm active:scale-95"
        >
          Continue
        </button>

        {/* Bottom Link */}
        <div className="mt-auto text-center text-xs text-gray-500 pt-8">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
