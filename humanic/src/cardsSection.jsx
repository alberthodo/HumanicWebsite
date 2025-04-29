import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function CardsSection() {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false    // whether animation should happen only once
    });
  }, []);


  return (

    
    <div className="min-h-screen w-full bg-black flex flex-col items-center font-manrope-500 justify-center px-6 py-16 space-y-16 md:pt-[10%] font-manrope">
      
      {/* --- Top Heading --- */} 
      <div className="text-center space-y-4 font-manrope " data-aos = "fade-up">
        <h2 className="text-4xl md:text-5xl text-white pt-[25%] md:pt-[0%]">
          Real Insights. Real Time. Without Asking.
        </h2>
        <p className="text-gray-300 md:text-xl max-w-3xl mx-auto md:pt-[2%]">
        Humanic turns your sales playbook into instant intel, slipping you the perfect response before your prospect even finishes.
        </p>
      </div>

      

      {/* --- Gradient Box --- */}
      {/* <div className="relative w-full max-w-7xl h-[533px] overflow-hidden rounded-t-[2rem]  " data-aos = "fade-up">
        <div className="absolute inset-0 p-[1px] rounded-t-[2rem] bg-gradient-to-b from-[#EA7575] to-transparent z-0">
          <div className="w-full h-full rounded-t-[1.875rem] bg-gradient-to-b from-[#3F0716] to-black"></div>
        </div>  
        <div className="absolute bottom-0 left-0 w-full h-10 bg-black z-10 rounded-b-none"></div>
      </div> */}

      {/* --- Responsive Image Box with Gradient Border --- */}
{/* <div className="relative w-full max-w-7xl h-[570px] overflow-hidden rounded-t-[2rem]" data-aos="fade-up"> */}
  {/* Gradient border wrapper */}
  {/* <div className="absolute inset-0 p-[1px] rounded-t-[2rem] bg-gradient-to-b from-[#EA7575] to-transparent z-0">
    <div className="w-full h-full rounded-t-[0rem] overflow-hidden"> */}
      
      {/* Desktop Image */}
      {/* <img
        src="/desktopimg.png"
        alt="Desktop View"
        className="hidden md:block w-full h-full object-cover"
      /> */}

      {/* Mobile Image */}
      {/* <img
        src="/phoneimg.png"
        alt="Mobile View"
        className="block md:hidden w-[100%] h-full object-cover translate-x-[1%]"
      />
    </div>
  </div> */}

  {/* Bottom black strip (optional) */}
  {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-black z-10 rounded-b-none"></div>
</div> */}

<div className="relative w-full max-w-7xl mx-auto h-auto min-h-[543px] overflow-hidden rounded-t-[2rem]" data-aos="fade-up">
  {/* Outer Gradient Border */}
  <div className="absolute inset-0 p-[1px] rounded-t-[2rem] bg-gradient-to-b from-[#EA7575] to-transparent z-0">
    <div className="w-full h-full rounded-t-[2rem] bg-gradient-to-b from-[#1d070d] to-black"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 md:px-10 py-8 flex flex-col justify-between h-full text-white">

   {/* Top Row */}
<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
  <div className="leading-tight">
    <h2 className="text-xl sm:text-2xl font-semibold whitespace-nowrap mb-[5px]">
      Meeting w/Martha: GroundBlu Tech
    </h2>
    <p className="text-sm text-gray-300">Wednesday, April 25</p>
  </div>

  <div className="flex items-center justify-between w-full md:w-auto md:ml-auto md:gap-12 flex-wrap">
  {/* Humanic is listening... */}
  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-sm">
    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
    Humanic is listening...
  </div>

  {/* Play/Pause Buttons */}
  <div className="flex gap-2 items-center p-1 rounded-lg border border-[#F44876] bg-white/10">
    <button className="rounded-full p-2 hover:bg-white/20 transition-colors">
      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
    <button className="rounded-full p-2 hover:bg-white/20 transition-colors">
      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    </button>
  </div>
</div>

</div>


    {/* Martha's Question */}
    <div className="mt-6 w-full flex justify-end pr-4 sm:pr-6 md:pr-0 text-manrope">
      <div className="flex items-center gap-4 max-w-full sm:max-w-[80%] md:max-w-[60%]">
        <div className="bg-transparent rounded-lg border border-transparent p-5 text-base flex-1">
          <p className="text-[1.1rem] text-white/60 mb-[2%] text-manrope">Martha says:</p>
          <p className="text-white text-manrope">
            “We’re currently facing bottlenecks in our model training pipeline, particularly with data augmentation and hyper parameter tuning. How can your product help in this regard?”
          </p>
        </div>
        <img
          src="/user.png"
          width={50}
          height={50}
          className="rounded-full shrink-0"
          alt="Martha Avatar"
        />
      </div>
    </div>

    {/* Conversation */}
    <div className="mt-10 w-full pl-4 sm:pl-6 md:pl-0">
      <div className="flex flex-row gap-4 items-start max-w-full sm:max-w-[80%] md:max-w-[70%]">
        {/* Dialogbox Logo */}
        <div className="min-w-[50px]">
          <img src="/smallwhite.png" width={50} height={50} alt="Dialogbox Logo" />
        </div>

        {/* Speech Bubble */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-5 text-lg flex-1">
          <p>
            Our platform accelerates model training by automating data augmentation with pre-configured pipelines and optimizing hyper parameter tuning using <strong>Bayesian optimization, cutting iteration time by up to 40%.</strong>
          </p>
          <br />
          <p>
            For instance, in a previous deployment with a leading e-commerce company, we <strong>reduced their model training time from 12 hours to under 4 hours</strong>, significantly improving their time-to-market for personalized recommendations.
          </p>

          {/* Source Buttons */}
          <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
            <img src="/public/sources.png" alt="Sources" className="h-6 w-auto" />
            <img src="/public/copypinrecycle.png" alt="Copy Pin Recycle" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </div>

  </div>
</div>





      {/* --- Middle Heading --- */}
      <div className="text-center space-y-4 " data-aos = "fade-up">
        <h2 className="md:pt-[5%] text-[2.5rem] md:text-5xl text-white " >
          Context. Confidence. Content.
        </h2>
        <p className="text-[rgba(255,255,255,0.8)] md:pt-[2%] md:text-xl max-w-4xl mx-auto pt-[8%]" >  
        Our AI agent delivers actionable, conversational insights, empowering sales teams to close faster, and handle objections like pros—all while on a live call!

        </p>
      </div>

      {/* --- Cards Section with Spinning Borders --- */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full pt-12 font-manrope" data-aos="fade-in">
  {[
    {
      title: '<3 second response time',
      text: 'Humanic listens and thinks faster than you can panic, delivering ultra fast insights that  is truly seamless and captivating every single time',
    },
    {
      title: '18% increase in win rates',
      text: "Out-sell rival reps: Humanic lets you multi-thread accounts, drive MAPs, negotiate in real time, and deliver knockout demos that close",
    },
    {
      title: '97% accuracy',
      text: 'Access perfectly-phrased, context-aware talk track in < 3 sec. Never say “Let me get back to you” ever again to your customers',
    },
    {
      title: '7 hours saved / sales rep',
      text: 'No more digging through Slack threads and Notion docs. Humanic surfaces what you need for every call, before you even say “hello”',
    },
    {
      title: 'Seamless integration',
      text: 'Humanic integrates seamlessly with your sales stack to effortlessly extract context without manually uploading to the knowledge base',
    },
    {
      title: 'Automation',
      text: "Keep conversations tight, accurate, and run lean sales cycles—without cutting corners. Win trust faster by  delivering at every step",
    },
  ].map((card, i) => (
    <div className="relative border border-transparent rounded-[24px] media-object p-[1px]" key={i}>
      <div className="bg-black rounded-[22px] p-6 h-full transition-all duration-300">
        <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-[rgba(255,255,255,0.5)]">{card.text}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
