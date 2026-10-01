import { Link } from "react-router-dom";
import AuthLayout from "../components/authLayout/AuthLayout.jsx";

export default function SignIn() {
  return (
    <AuthLayout
      eyebrow="Sign In"
      pitch="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      formTitle="Welcome Back"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col flex-1"
      >
        <label className="text-xs font-medium text-gray-700 mb-1.5 block">
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
          Sign In
        </button>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100" />
          </div>
          <span className="relative bg-white px-4 text-xs text-gray-400 font-normal">
            or
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            type="button"
            className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-black fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          <button
            type="button"
            className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-black fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>
        </div>

        {/* Bottom Link */}
        <div className="mt-auto text-center text-xs text-gray-500 pt-4">
          New user?{" "}
          <Link
            to="/signup"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Create an account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
