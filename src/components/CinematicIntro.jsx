import React, { useState, useEffect } from "react";

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: black, 1: line, 2: text, 3: sweep, 4: exit

  useEffect(() => {
    // Stage 1: Electric blue laser line begins
    const t1 = setTimeout(() => setStage(1), 150);
    // Stage 2: Logo and subtitle reveal
    const t2 = setTimeout(() => setStage(2), 600);
    // Stage 3: Light sweep / flash transition
    const t3 = setTimeout(() => setStage(3), 1400);
    // Stage 4: Fade out and complete
    const t4 = setTimeout(() => {
      setStage(4);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#08090A] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        stage === 4 ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background subtle electric blue ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,163,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Branding Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Detailing Xpert Brand Wordmark / Emblem */}
        <div
          className={`h-20 sm:h-24 w-auto rounded-2xl bg-[#111214]/90 border border-white/10 p-3 flex items-center justify-center mb-6 shadow-2xl transition-all duration-700 ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src="/images/detailing-xpert-logo.svg"
            alt="Detailing Xpert Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Thin Expanding Electric Blue Laser Line */}
        <div className="relative w-64 sm:w-80 h-0.5 mb-6 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#4DA3FF] to-transparent shadow-[0_0_15px_#4DA3FF] transition-all duration-700 ease-out mx-auto ${
              stage >= 1 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Main Brand Title Reveal */}
        <div
          className={`transition-all duration-700 transform ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative inline-block overflow-hidden pb-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase font-['Outfit'] flex items-center justify-center gap-3">
              <span className="text-[#F5F5F5]">DETAILING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] via-[#70B8FF] to-[#0066E6] text-glow">
                XPERT
              </span>
            </h1>

            {/* Light sweep beam */}
            {stage === 3 && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 animate-[sweep_0.6s_ease-in-out_forwards] pointer-events-none" />
            )}
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#C5C9CE] mt-2 transition-all duration-500 delay-150 ${
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            MANSAROVAR, JAIPUR • AUTOMOTIVE STUDIO
          </p>
        </div>

        {/* Lower expanding electric blue accent line */}
        <div className="relative w-48 sm:w-64 h-0.5 mt-6 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#4DA3FF] to-transparent shadow-[0_0_12px_#4DA3FF] transition-all duration-700 ease-out mx-auto ${
              stage >= 2 ? "w-full opacity-70" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-[#111214]/80 hover:bg-[#1a1c22] text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
      >
        Skip Intro ⇥
      </button>
    </div>
  );
}
