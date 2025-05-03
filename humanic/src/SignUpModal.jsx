import React, { useState } from "react";

const STRIPE_LINKS = {
  monthly: "https://buy.stripe.com/test_28o6oAgYhc7w4k8fYY",
  yearly: "https://buy.stripe.com/5kA2bJcRs1IB0s87su"
};

export default function SignUpModal({ open, onClose, billingCycle = "monthly" }) {
  const [isLogin, setIsLogin] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#18181b] rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative border border-[#2a2a2a] flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        {/* Logo */}
        <img src="/apple-touch-icon.png" alt="Humanic Logo" className="h-10 mb-6" />
        {/* Heading */}
        <h2 className="text-white text-2xl font-semibold mb-1 text-center">
          {isLogin ? "Sign in" : "Create an account"}
        </h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          {isLogin ? "Welcome back! Log in to your account" : "Sign up now and unlock Humanic"}
        </p>
        {/* Google Sign In */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#232323] border border-[#333] rounded-md py-2 mb-4 text-white hover:bg-[#232323]/80 transition">
          <img src="/google_icon.svg" alt="Google" className="h-5 w-5" />
          Sign in with Google
        </button>
        {/* Divider */}
        <div className="flex items-center w-full mb-4">
          <div className="flex-1 h-px bg-[#333]" />
          <span className="mx-2 text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-[#333]" />
        </div>
        {/* Email */}
        <div className="w-full mb-3">
          <label className="block text-xs text-gray-400 mb-1">Email <span className="text-[#F44876]">*</span></label>
          <input
            type="email"
            placeholder="name@email.com"
            className="w-full px-3 py-2 rounded-md bg-[#232323] border border-[#333] text-white text-sm focus:outline-none focus:border-[#F44876]"
          />
        </div>
        {/* Password */}
        <div className="w-full mb-6">
          <label className="block text-xs text-gray-400 mb-1">Password <span className="text-[#F44876]">*</span></label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 rounded-md bg-[#232323] border border-[#333] text-white text-sm focus:outline-none focus:border-[#F44876]"
          />
        </div>
        {/* Sign Up/Login Button */}
        <button
          className="w-full bg-transparent border border-[#F44876] text-white rounded-md py-2 mb-2 hover:bg-[#F44876] hover:text-white transition"
          onClick={() => {
            window.location.href = STRIPE_LINKS[billingCycle] || STRIPE_LINKS["monthly"];
          }}
        >
          {isLogin ? "Login" : "Sign up"}
        </button>
        {/* Toggle Link */}
        <p className="text-xs text-gray-400 mt-2 text-center">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <button className="text-[#F44876] hover:underline" onClick={() => setIsLogin(false)}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-[#F44876] hover:underline" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
} 