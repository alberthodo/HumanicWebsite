import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import CardsSection from './cardsSection.jsx';
import Pricing from './Pricing.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

  export default function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      AOS.init({
        duration: 800, // animation duration in ms
        once: false    // whether animation should happen only once
      });
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, []);
  
useEffect(() => {
  const timeout = setTimeout(() => {
    setIsVisible(true);
  }, 100);
  return () => clearTimeout(timeout);
}, []);

 





    return (
      <div className="relative bg-black text-white font-manrope">
        {/* Background SVG with animation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none select-none z-0 animate-float max-h-screen">
          <img
            src="/Line 2.svg"
            alt="Background Waves"
            // className="w-[200%] md:w-full h-auto max-w-none object-cover"
            className="absolute w-[200%] h-[100%] opacity-60 pointer-events-none select-none object-cover"
            style={{
              filter: "brightness(100%)",
            }}
          />
        </div>

        {/* Navbar */}
        <div
  className={`relative z-10 flex items-center justify-between px-6 md:px-16 py-6 no-scrollbar transition-opacity duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}
>
  {/* Logo */}
  <div className="flex items-center">
    <img src="/humanictitle.png" alt="Humanic Logo" className="h-8 md:h-10" />
  </div>

  {/* Navbar Right Section */}
  <div className="flex items-center font-manrope ml-auto">
  {/* Doctrine Link */}
  <NavLink
    to="/doctrine"
    className={({ isActive }) =>
      `text-sm font-medium transition pb-1 ${
        isActive
          ? 'text-white border-b-2 border-[#F44876]'
          : 'text-white hover:border-b-2 hover:border-[#F44876]'
      }`
    }
  >
    Doctrine
  </NavLink>

  {/* Spacer between Doctrine and Book a demo */}
  <div className="hidden lg:block" style={{ width: '4.058vw' }}></div>
  <div className="lg:hidden" style={{ width: '0vw' }}></div>

  {/* Book a demo - only visible on md+ */}
  <button className="hidden md:inline-flex border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
    Book a demo
  </button>
</div>


</div>





       {/* Main Content */}
<div
  className={`relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-100px)] px-8 md:px-16 py-10 md:pl-[15%] md:pb-[5%] md:pt-[5%] overflow-hidden no-scrollbar font-manrope transition-opacity duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}
>
  {/* Wrapper for consistent left alignment */}
<div className="w-full max-w-5xl">

{/* Beta Info */}
<p className="text-xs sm:text-[0.8rem] mb-8 text-left">
  <NavLink
    to="/doctrine"
    className="inline-block border border-[rgba(255,255,255,0.5)] rounded-md px-3 pt-1 pb-[6px] md:pb-[6px] text-[rgba(255,255,255,0.8)] underline"
  >
    Read: Why we are building Humanic
  </NavLink>
</p>







    {/* Heading */}
    <h1 className="text-[3rem] md:text-7xl leading-tight md:mb-[5%] mb-[10%] text-left no-scrollbar font-manrope">
      <span>Hijack any sales call with</span>
      <br className="hidden md:block" />
      <span className="block md:mt-[10px] mt-0">this unfair advantage</span>
    </h1>

    {/* Subtext */}
    <p className="text-[1.1rem] md:text-lg mb-10 max-w-3xl text-left no-scrollbar">
    Meet Humanic—your personal AI Sales Agent. It listens live, spots objections, and drops deal-saving answers before you fumble
    </p>

    {/* Buttons */}
    <div className="hidden md:flex flex-col md:flex-row gap-4 items-start justify-start w-full no-scrollbar md:pt-[2%]">
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
      <button className="border border-[rgba(255,255,255,0.5)] hover:bg-white hover:text-black text-[rgba(255,255,255,0.8)] px-5 py-3 md:px-6 md:py-3 rounded-lg text-lg md:text-lg transition w-full max-w-[300px] md:max-w-[300px] md:w-auto">
        Contact for enterprise sales!
      </button>
    </div>
  </div>
</div>

{/* Buttons for Mobile - appear only after scroll */}
<div className="block md:hidden px-8 py-10 bg-black font-manrope" >
  <div className="flex flex-col gap-4 items-center justify-center w-full no-scrollbar" >
  <button className="flex items-center justify-center gap-2 border border-[#F44876] text-white hover:bg-[#F44876] font-manrope  hover:text-white px-5 py-3 md:px-6 md:py-3 rounded-lg text-lg md:text-lg transition w-full max-w-[300px] md:max-w-[300px] md:w-auto" data-aos="fade-up">
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

    <button className="border border-[rgba(255,255,255,0.5)] hover:bg-white hover:text-black text-[rgba(255,255,255,0.8)] px-5 py-3 rounded-lg text-lg w-full max-w-[300px]" data-aos="fade-up" >
      Contact for enterprise sales!
    </button>
  </div>
</div>



        <CardsSection />
        <Pricing />

        {/* Footer */}
<footer className="w-full py-0 bg-black">
  <div className="w-[90%] max-w-7xl h-[60px] sm:h-[80px] flex items-center justify-between px-4 sm:px-6 mx-auto border-t border-l border-r border-[rgba(255,255,255,0.2)] rounded-t-xl">
    
    {/* Left: Logo */}
    <div className="flex items-center h-full">
      <img
        src="/humanictitle.png"
        alt="Humanic Logo"
        className="h-5 sm:h-8 object-contain"
      />
    </div>

    {/* Right: Text */}
    <div className="text-white text-xs sm:text-sm text-right">
      Humanic Inc. All Rights Reserved
    </div>
    
  </div>
</footer>



      </div>
    );
  }