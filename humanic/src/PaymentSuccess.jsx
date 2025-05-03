import React from "react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-16 font-manrope relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute w-full h-full opacity-100 pointer-events-none select-none object-cover z-10 top-0 left-0">
        <img src="/Capa 1.svg" alt="Wave background" className="w-full object-cover" />
      </div>
      {/* Navbar */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-7xl px-4 md:px-16 py-6">
        <img src="/humanictitle.png" alt="Humanic Logo" className="h-8 md:h-10" />
        <div className="flex items-center gap-6">
          <span className="text-white font-semibold">Doctrine</span>
          <button className="border border-white px-4 py-2 rounded-lg text-sm text-white hover:bg-white hover:text-black transition">Book a demo</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-start justify-center w-full max-w-2xl mt-24">
        <h1 className="text-white text-5xl md:text-6xl font-semibold mb-6">Payment successful!</h1>
        <p className="text-white text-lg mb-8 max-w-xl">
          Thank you for your payment! You may now open the app on your desktop or download it from the link below.
        </p>
        <a
          href="https://storage.googleapis.com/humanic-macos-updates/HumanicInstaller.dmg"
          download
          className="flex items-center gap-2 border border-[#F44876] text-white hover:bg-[#F44876] hover:text-white px-5 py-3 rounded-lg text-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-6 h-6">
            <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
            <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
          </svg>
          Download for Mac
        </a>
      </div>
      {/* Footer */}
      <footer className="w-full py-0 bg-black relative z-20 mt-24">
        <div className="w-[90%] max-w-7xl h-[60px] sm:h-[80px] flex items-center justify-between px-4 sm:px-6 mx-auto border-t border-l border-r border-[rgba(255,255,255,0.2)] rounded-t-xl">
          <img src="/humanictitle.png" alt="Humanic Logo" className="h-5 sm:h-8 object-contain" />
          <div className="text-white text-xs sm:text-sm text-right">Humanic Inc. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
} 