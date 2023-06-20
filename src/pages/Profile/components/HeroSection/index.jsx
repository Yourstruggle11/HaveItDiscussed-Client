import React from 'react';

function HeroSection() {
  return (
    <section className="relative block h-[500px]">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/random/900%C3%97700/?nature,software,love,romantic')" }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{ transform: "translateZ(0px)" }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-[#94a3b85c] fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
