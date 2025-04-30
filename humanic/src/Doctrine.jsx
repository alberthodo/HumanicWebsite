import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Doctrine() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // short delay to ensure DOM is ready
    return () => clearTimeout(timeout);
  }, []);
  
    useEffect(() => {
      AOS.init({
        duration: 800, // animation duration in ms
        once: false    // whether animation should happen only once
      });
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, []);
  

  return (
    <div className="relative min-h-screen bg-black text-white font-manrope overflow-hidden">
      {/* Navbar */}
      <div className={`relative z-10 flex items-center justify-between px-6 md:px-16 py-6 no-scrollbar transition-opacity duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}>
        <div className="flex items-center">
        <Link to="/">
  <img src="/humanictitle.png" alt="Humanic Logo" className="h-8 md:h-10 cursor-pointer" />
</Link>
        </div>
        <div className="flex items-center font-manrope">
          <a
            href="/"
            className="text-sm font-medium transition pb-1 text-pink-400 border-b-2 border-pink-400"
          >
            Doctrine
          </a>
          <div className="hidden lg:block" style={{ width: '4.058vw' }}></div>
          <div className="lg:hidden" style={{ width: '5vw' }}></div>
          <button className="border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition no-scrollbar">
            Book a demo
          </button>
        </div>
      </div>

      {/* Top Wave SVG */}
      <div className="absolute w-[100%] md:w-[100%] h-[100%] opacity-100 pointer-events-none select-none object-cover pt-[1%]">
        <img src="/Capa 1.svg" alt="Wave background" className="w-full object-cover" />
      </div>

      {/* Text Content */}
      <div className={`relative z-10 max-w-3xl mx-auto px-6 md:px-0 pt-[9%] pb-40 text-left space-y-10 font-manrope transition-opacity duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`} >
        <h1 className="text-4xl leading-tight md:leading-tight md:text-6xl  ">
          Close every sales call.<br />
          No exceptions.
        </h1>

        <div className="space-y-6 text-lg text-gray-200" data-aos="fade-up">
          <p className="md:pt-[10%] text-2xl" ><strong>Sales isn’t fair. It never was.</strong></p>
          <p className="text-[1.1rem] leading-loose" >Some people fumble through objections. Others steamroll them. We’re here for the ones who refuse to lose.</p>

          <p className="md:pt-[2%] text-2xl" ><strong>Humanic is your unfair advantage.</strong></p>
          <p className="text-[1.1rem] leading-loose" >It listens in real time. Spots objections before they hit. Feeds you answers before you blink. <br /> No prep. No stalling. No “I’ll get back to you.” You’re not guessing. <br /> You’re controlling the outcome.</p>

          <p className="md:pt-[2%] text-2xl" > <strong>Your competition is stuck in Google Docs and Slack threads.</strong></p>
          <p className="text-[1.1rem] leading-loose" > You’re out here closing before they finish their intro. They’re playing checkers. You’re running a casino.</p>

          <p className="text-[1.1rem] leading-loose" >We don’t care about “best practices.” <br />We care about Winners. <strong>Speed. Control. Dominance.</strong> <br /> If that makes you uncomfortable, you’re probably the one getting outsold.</p>

          <p className="md:pt-[2%] text-2xl" ><strong>This isn’t software. It’s a weapon.</strong></p>
          <p className="text-[1.1rem] leading-loose" >For closers. Killers. People who walk into calls knowing the deal is already done. <br />Humanic doesn’t help you sell — it makes sure you win. <br />So if you’re still asking “is this fair?” — you’re already behind.</p>

          <p className="md:pt-[4%] text-2xl md:leading-relaxed" ><strong>Welcome to the future of selling.<br />
          It’s rigged. And you’re holding the controls.</strong></p>
        </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start w-full no-scrollbar z-10 relative pt-[4%] font-manrope" data-aos="fade-up">

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

      {/* Bottom SVG */}
      {/* <img src="/Line 10.svg" alt="Bottom wave" className="absolute bottom-0 left-0 w-full z-0 pointer-events-none" /> */}
      <div className="absolute left-[-26%] top-[80%] md:top-[10%] z-0">
  <img
    src="/Line 10.svg"
    alt="Background Line SVG"
    className="opacity-25 w-full scale-[110%] origin-top-left"
  />
</div>

      {/* Footer */}
<footer className="w-full py-6 bg-black">
  <div className="bg-black w-[90%] max-w-7xl h-[100px] flex items-center justify-between px-4 sm:px-6 rounded-3xl mx-auto border-t border-l border-r border-[rgba(255,255,255,0.2)] pt-[0%] ">
    {/* Left: Logo */}
    <div className="flex items-center">
      <img
        src="/humanictitle.png"
        alt="Humanic Logo"
        className="h-12"
      />
    </div>

    {/* Right: Text */}
    <div className="text-white text-sm text-right">
      Humanic Inc. All Rights Reserved
    </div>
  </div>
</footer>

    </div>
  );
}
