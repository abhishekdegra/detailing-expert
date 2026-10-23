import React, { useState, useEffect } from "react";
import { Calendar, MessageCircle, ChevronDown, Sparkles, Shield, Droplets, Camera } from "lucide-react";
import { STUDIO_INFO } from "../data/content";
import HeroWaterCanvas from "./HeroWaterCanvas";

export default function Hero({ onOpenBooking }) {
  const [activeHeroImg, setActiveHeroImg] = useState("/images/detailing-xpert-hero.jpg");
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Parallax tracking only on desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroStats = [
    { label: "Dust-Free", value: "100%", sub: "Sealed Detailing Bays" },
    { label: "Surface Hardness", value: "10H", sub: "Nano-Ceramic Bond" },
    { label: "PPF Protection", value: "Self-Healing", sub: "Premium Grade TPU" },
    { label: "Studio Standard", value: "6500K", sub: "True-Color CRI Lights" },
  ];

  const studioViews = [
    { id: "hero", label: "🏎️ Studio Bay", src: "/images/detailing-xpert-hero.jpg" },
    { id: "foam", label: "🌊 Foam Wash", src: "/images/snow-foam-wash.jpg" },
    { id: "ceramic", label: "✨ 10H Ceramic", src: "/images/ceramic-beading.jpg" },
    { id: "bay", label: "🏁 Active Bay", src: "/images/detailing-xpert-bay.jpg" },
  ];

  return (
    <section id="hero" className="relative w-full border-b border-white/10 bg-[#060709] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. DESKTOP / LAPTOP HERO (Widescreen Full-Bleed Parallax) */}
      {/* ======================================================== */}
      <div className="hidden lg:flex relative w-full min-h-[calc(100vh-80px)] max-h-[820px] items-center justify-center py-4">
        {/* Background Visual Stage with Parallax */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0) scale(1.05)`,
          }}
        >
          <img
            src={activeHeroImg}
            alt="Detailing Xpert Studio Jaipur - Luxury Automotive Detailing"
            className={`w-full h-full object-cover ${
              activeHeroImg.includes("ceramic")
                ? "object-[center_35%]"
                : activeHeroImg.includes("bay")
                ? "object-[center_30%]"
                : activeHeroImg.includes("foam")
                ? "object-[center_40%]"
                : "object-center"
            } transition-all duration-1000 ease-out`}
          />

          {/* Dynamic Water Mist, Snow Foam Bubbles & Laser Scan Canvas */}
          <HeroWaterCanvas isFoamMode={activeHeroImg.includes("foam")} />

          {/* High-End Cinematic Translucent Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-black/30 to-[#08090A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090A]/75 via-transparent to-[#08090A]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#08090A_95%)]" />

          {/* Ambient Pulsing Studio Electric Blue Glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#4DA3FF]/15 rounded-full blur-[140px] transition-transform duration-500 ease-out pointer-events-none"
            style={{
              transform: `translate3d(calc(-50% + ${mouseOffset.x * 2}px), ${mouseOffset.y * 2}px, 0)`,
            }}
          />
        </div>

        {/* Hexagonal Detailing Bay Ceiling Grid Pattern */}
        <div className="absolute inset-0 hex-pattern opacity-25 pointer-events-none z-0" />

        {/* Top Electric Blue Horizon Line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4DA3FF]/60 to-transparent" />

        {/* Desktop Content Overlay */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-8 py-2 flex flex-col items-center text-center"
          style={{
            transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          }}
        >
          {/* Live Studio Camera Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md mb-3 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold flex items-center gap-1.5">
              <Camera className="w-3 h-3 text-[#4DA3FF] shrink-0" />
              <span>BAY 01 • ACTIVE DETAILING & PPF • JAIPUR</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-['Outfit'] w-full max-w-4xl leading-[0.95]">
            YOUR CAR. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              OUR{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] via-[#70B8FF] to-[#0066E6] text-glow">
              OBSESSION.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-2.5 text-base text-zinc-300 w-full max-w-xl font-light leading-snug">
            Precision snow foam washes, computer-cut TPU paint armor, and 10H ceramic crystallization engineered for car connoisseurs in Mansarovar, Jaipur.
          </p>

          {/* Key Feature Badges */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-mono text-zinc-200">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 text-[#4DA3FF]" />
              Active Snow Foam
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
              <Shield className="w-3 h-3 text-[#4DA3FF]" />
              Self-Healing TPU
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
              <Droplets className="w-3 h-3 text-[#4DA3FF]" />
              10H Ceramic Gloss
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              data-cursor="BOOK"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#4DA3FF] via-[#2B82F6] to-[#0066E6] hover:from-[#70B8FF] hover:to-[#0052BF] shadow-md shadow-blue-950/60 transition-all active:scale-95 cursor-pointer overflow-hidden whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Book Detailing</span>
            </button>

            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Detailing Xpert Jaipur, I would like to inquire about detailing my car.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CHAT"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-zinc-100 bg-black/75 hover:bg-zinc-900 border border-white/20 hover:border-emerald-500/50 hover:text-emerald-400 backdrop-blur-md transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Interactive Studio Camera View Switcher */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5 p-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md shadow-xl">
            {studioViews.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveHeroImg(item.src)}
                data-cursor="SWITCH"
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center ${
                  activeHeroImg === item.src
                    ? "bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] text-white font-bold shadow-md shadow-blue-950/80 scale-102"
                    : "text-zinc-400 hover:text-white bg-transparent"
                }`}
              >
                <span>{item.label}</span>
                {activeHeroImg === item.src && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping inline-block" />
                )}
              </button>
            ))}
          </div>

          {/* Micro-Interaction Hint */}
          <div className="mt-1 text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1 opacity-80">
            <span className="text-[#4DA3FF]">💧</span>
            <span>Move cursor to spray detailing mist</span>
          </div>

          {/* Bottom Trust Stat Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 w-full max-w-4xl grid grid-cols-4 gap-2.5">
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="py-2 px-3 rounded-lg bg-black/60 border border-white/5 backdrop-blur-md flex flex-col items-center text-center group hover:border-[#4DA3FF]/30 transition-colors"
              >
                <span className="text-lg lg:text-xl font-black text-white font-['Space_Grotesk'] tracking-tight group-hover:text-[#4DA3FF] transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] font-semibold text-zinc-300 uppercase mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[9px] text-zinc-400 font-mono mt-0.5 truncate w-full">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Minimal Scroll Indicator */}
          <a
            href="#services"
            data-cursor="EXPLORE"
            className="mt-3 inline-flex flex-col items-center gap-0.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-200">
              SCROLL TO EXPLORE ↓
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#4DA3FF] animate-bounce" />
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE / TABLET HERO                                 */}
      {/* ======================================================== */}
      <div className="lg:hidden relative w-full px-4 pt-4 pb-14 flex flex-col items-center text-center z-10 min-w-0">
        {/* Ambient background lighting */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#4DA3FF]/10 to-transparent pointer-events-none" />

        {/* Live Studio Camera Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-white/15 shadow-lg mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-200 font-semibold flex items-center gap-1">
            <Camera className="w-3 h-3 text-[#4DA3FF] shrink-0" />
            <span>BAY 01 • ACTIVE DETAILING & PPF</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-['Outfit'] leading-[1.05] max-w-xs sm:max-w-md">
          YOUR CAR. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            OUR{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] via-[#70B8FF] to-[#0066E6] text-glow">
            OBSESSION.
          </span>
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm px-1">
          Precision snow foam washes, computer-cut TPU paint armor & 10H ceramic crystallization in Mansarovar, Jaipur.
        </p>

        {/* WIDESCREEN VEHICLE SHOWCASE WINDOW */}
        <div className="w-full max-w-md mt-3.5 relative rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl shadow-blue-950/30 aspect-[16/10]">
          <img
            src={activeHeroImg}
            alt="Detailing Xpert Studio Jaipur"
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
          />

          {/* Interactive Water Mist, Snow Foam & Laser Canvas */}
          <HeroWaterCanvas isFoamMode={activeHeroImg.includes("foam")} />

          {/* Subtle Studio Corner Vignette for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top-Left Live Feed Badge */}
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] animate-pulse" />
            <span className="text-[9px] font-mono text-zinc-200 font-bold uppercase tracking-wider">
              XPERT LIVE
            </span>
          </div>

          {/* Bottom Interactive Tap Hint & Gloss Standard */}
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between pointer-events-none px-1">
            <span className="text-[9px] font-mono text-white/90 bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 flex items-center gap-1">
              <span>💧 Tap screen to spray mist</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 font-bold">
              10H GLOSS
            </span>
          </div>
        </div>

        {/* 4-Camera View Switcher */}
        <div className="w-full max-w-md mt-2.5 grid grid-cols-4 gap-1 p-1 rounded-xl bg-zinc-900/90 border border-white/10">
          {studioViews.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveHeroImg(item.src)}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center truncate ${
                activeHeroImg === item.src
                  ? "bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] text-white font-bold shadow-md shadow-blue-950/80"
                  : "text-zinc-400 hover:text-white bg-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Direct Thumb-Friendly CTA Buttons */}
        <div className="w-full max-w-md mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] shadow-lg shadow-blue-950/50 active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Detailing</span>
          </button>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Detailing Xpert Jaipur, I would like to inquire about detailing my car.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase text-zinc-100 bg-zinc-900 border border-white/20 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Key Feature Badges */}
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-300">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10">
            <Sparkles className="w-3 h-3 text-[#4DA3FF]" />
            Snow Foam
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10">
            <Shield className="w-3 h-3 text-[#4DA3FF]" />
            Self-Healing TPU
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10">
            <Droplets className="w-3 h-3 text-[#4DA3FF]" />
            10H Ceramic
          </span>
        </div>

        {/* 2x2 Trust Stats Grid */}
        <div className="w-full max-w-md mt-3 grid grid-cols-2 gap-2">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="py-2 px-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center"
            >
              <span className="text-base font-black text-white font-['Space_Grotesk'] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] font-semibold text-zinc-300 uppercase mt-0.5">
                {stat.label}
              </span>
              <span className="text-[8px] text-zinc-500 font-mono mt-0.5 truncate w-full">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#services"
          className="mt-3 inline-flex flex-col items-center gap-0.5 text-zinc-400 hover:text-white transition-colors"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            SCROLL TO EXPLORE ↓
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#4DA3FF] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
