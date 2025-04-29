import React, { useState } from "react";


export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const isMonthly = billingCycle === "monthly";

  return (
    
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-16 space-y-16 overflow-hidden font-manrope">

      {/* Top Wave SVG */}
      <div className="absolute w-[100%] md:w-[100%] h-[100%] opacity-100 pointer-events-none select-none object-cover pt-[1%]">
        <img src="/Capa 1.svg" alt="Wave background" className="w-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="relative z-10 text-center px-4 mt-32 md:mt-48 pt-[6%] font-manrope" data-aos = "fade-up">
        <h1 className="text-4xl md:text-5xl leading-tight text-white">
          Priced to close deals—not drain budgets
        </h1>
        <p className="mt-4 text-[rgba(255,255,255,0.8)] text-lg md:text-xl max-w-5xl mx-auto pt-[2%]">
        Choose that plan that arms you with the unfair advantage because in sales, second place gets nothing.
        </p>
      </div>

      {/* --- Behind Cards Line SVG --- */}
      <div className="absolute left-[-26%] top-[80%] md:top-[10%] z-0">
  <img
    src="/Line 10.svg"
    alt="Background Line SVG"
    className="opacity-25 w-full scale-[110%] origin-top-left"
  />
</div>



<div className="relative z-10 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl w-full px-4 pt-[5%] font-manrope" data-aos="fade-in">
  {/* Free Plan */}
  <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#290c14] to-transparent via-transparent backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] w-full mx-auto ">
    <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
    <div className="relative z-10 flex flex-col items-start">
      <h3 className="text-2xl font-semibold mb-2 text-white text-left">Free</h3>
      <p className="text-gray-400 mb-6 text-left">See how Humanic powers your sales calls!</p>
      <div className="flex items-baseline gap-2 mb-6 transition-all duration-500">
        <div className="md:text-7xl text-7xl font-semibold text-white">$0</div>
        <p className="text-gray-400 text-lg transition-opacity duration-500 opacity-100">/ per month</p>
      </div>
      <button className="bg-[rgba(169,169,169,0.1)] border-0 shadow-[0_0_0_0.5px_rgba(169,169,169,0.5)] rounded-xl px-6 py-2 text-white transition w-[90%] max-w-[calc(90%-2px)] mx-auto">
        Get Started
      </button>
      <hr className="w-full my-6 border-gray-700" />
      <div className="w-full text-left">
        <h4 className="text-lg font-semibold mb-4 text-white">What you will get</h4>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li>Sixty minutes of Agent run time</li>
          <li>Standard AI models</li>
          <li>Limited uploads to knowledge base</li>
        </ul>
      </div>
    </div>
  </div>

 
{/* Pro Plan */}
<div className="relative z-20 p-8 transform rounded-2xl bg-gradient-to-b from-transparent to-[#290c14] via-transparent backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.1] scale-[105%] w-full md:w-[calc(100%+0rem)] mx-auto">

  {/* Border Glow */}
  <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-b from-[#F44876] to-transparent z-0">
    <div className="w-full h-full rounded-t-2xl bg-gradient-to-b from-black to-[#2a0c14]"></div>
  </div>

  <div className="relative z-10 flex flex-col items-start">
    <h3 className="text-2xl font-semibold mb-2 text-white text-left">Pro</h3>
    <p className="text-gray-400 mb-6 text-left">For 10x Sales Personnel</p>

    {/* Pricing with transition */}
    <div className="relative h-[80px] mb-6">
      {/* Monthly Price */}
      <div
        className={`absolute inset-0 flex items-end gap-2 transition-opacity duration-300 ease-in-out ${
          isMonthly ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-baseline">
          <span className="text-7xl text-white font-semibold">$19</span>
          <span className="md:text-5xl text-4xl text-white font-semibold">.99</span>
        </div>
        <p className="text-gray-400 text-lg whitespace-nowrap">/ per month</p>
      </div>

      {/* Yearly Price */}
      <div
        className={`absolute inset-0 flex items-end transition-opacity duration-300 ease-in-out ${
          isMonthly ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-7xl text-white font-semibold">$99</span>
      </div>
    </div>

    {/* CTA Button */}
    <button className="bg-[rgba(169,169,169,0.1)] rounded-xl px-6 py-2 border-0 shadow-[0_0_0_0.5px_rgba(169,169,169,0.5)] text-white transition md:w-[90%] w-[94%] mx-auto">
      Get Started
    </button>

    <hr className="w-full my-6 border-gray-700" />

    {/* Features */}
    <div className="w-full text-left">
      <h4 className="text-lg font-semibold mb-4 text-white">What you will get</h4>
      <ul className="space-y-4 text-gray-300 text-sm">
        <li>Unlimited Agent run time</li>
        <li>Most powerful AI models</li>
        <li>Unlimited uploads to knowledge base</li>
        <li>24/7 customer support</li>
      </ul>
    </div>
  </div>
</div>


  {/* Enterprise Plan */}
  <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#290c14] to-transparent via-transparent backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] w-full mx-auto">
    <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
    <div className="relative z-10 flex flex-col items-start">
      <h3 className="text-2xl font-semibold mb-2 text-white text-left">Enterprise</h3>
      <p className="text-gray-400 mb-6 text-left">For 10x Sales and GTM teams</p>
      <div className="md:text-7xl text-6xl mb-2 text-white font-semibold transition-all duration-500">Custom</div>
      <p className="text-gray-400 mb-6 transition-opacity duration-500"> </p>
      <button className="bg-[rgba(169,169,169,0.1)] rounded-xl px-6 py-2 border-0 shadow-[0_0_0_0.5px_rgba(169,169,169,0.5)] text-white transition w-[90%] max-w-[calc(90%-2px)] mx-auto">
        Get Started
      </button>
      <hr className="w-full my-6 border-gray-700" />
      <div className="w-full text-left">
        <h4 className="text-lg font-semibold mb-4 text-white">What you will get</h4>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li>Unlimited Agent run time</li>
          <li>Most powerful AI models</li>
          <li>Unlimited uploads to knowledge base</li>
          <li>Unlimited Integrations</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Toggle Buttons */}
  <div className="col-span-full flex justify-center mt-10 space-x-2">
    <button
      onClick={() => setBillingCycle("monthly")}
      className={`px-5 py-2 text-sm rounded-md border transition duration-300 ${isMonthly ? "border-[#F44876] text-white" : "border-transparent text-gray-300 hover:border-[#F44876]"}`}
    >
      Monthly
    </button>
    <button
      onClick={() => setBillingCycle("yearly")}
      className={`px-5 py-2 text-sm rounded-md border transition duration-300 ${!isMonthly ? "border-[#F44876] text-white" : "border-transparent text-gray-300 hover:border-[#F44876]"}`}
    >
      Yearly
    </button>
  </div>
</div>






{/* --- Bottom Heading --- */}
<div className="text-center space-y-4 pt-[0%] font-manrope" data-aos = "fade-up">
        <h2 className="text-3xl md:text-5xl text-white md:pt-[5%]">
          We are changing how humans sell forever.
        </h2>
        <h2 className="text-3xl md:text-5xl text-white pt-[2%]">
          Join the revolution.
        </h2>
      </div>


      {/* Buttons */}
<div className="flex flex-col md:flex-row gap-4 items-center md:items-start md:justify-center justify-center w-full no-scrollbar z-10 relative font-manrope" >
  {/* Transparent Waitlist Button */}
  <button className="flex items-center justify-center gap-2 border border-[#F44876] text-white hover:bg-[#F44876] hover:text-white px-5 py-3 md:px-6 md:py-3 rounded-lg text-lg md:text-lg transition w-full max-w-[300px] md:max-w-[300px] md:w-auto">
  {/* Apple SVG Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="currentColor"
    className="w-7 h-7 translate-y-[2px]"
  >
    {/* Leaf */}
    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
    {/* Body */}
    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
  </svg>
            Download for Mac
            </button>

  {/* Contact Button */}
  <button className="border border-[rgba(255,255,255,0.5)] hover:bg-white hover:text-black text-[rgba(255,255,255,0.8)] px-5 py-3 md:px-6 md:py-3 rounded-lg text-lg md:text-lg transition duration-300 w-full max-w-[300px] md:max-w-[300px] md:w-auto z-10">
    Contact for enterprise sales!
  </button>
</div>


    </div>
  );
}
