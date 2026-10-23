import React, { useState } from "react";
import { ShieldCheck, Shield, Sparkles, Check, ArrowRight, Layers, Flame, Award } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function PPFFeature({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("full");

  const packages = {
    full: {
      name: "Full Body TPU Armor",
      coverage: ["All Body Panels", "Hood & Fenders", "Doors & Roof", "Bumpers & Mirrors", "Headlights & Piano Trims"],
      desc: "Complete bumper-to-bumper wrap using high-grade self-healing TPU with precision computer-cut alignment and wrapped edges.",
      warranty: "Manufacturer Warranty",
    },
    front: {
      name: "Front High-Impact Package",
      coverage: ["Full Front Bumper", "Full Hood", "Both Front Fenders", "Side Mirror Caps", "Headlights"],
      desc: "Maximum physical shielding for high-strike zones against highway gravel, stone-chips, and road debris on Rajasthan highways.",
      warranty: "High-Impact Defense",
    },
    track: {
      name: "City Defense Package",
      coverage: ["Front Bumper", "Partial Hood & Fenders", "Door Edges", "Door Cups", "Rear Boot Lip"],
      desc: "Strategic protection for high-risk contact areas, parking scratches, and key-flick vulnerable points in daily Jaipur driving.",
      warranty: "Daily Driver Defense",
    },
  };

  const featurePillars = [
    {
      label: "Instant Self-Healing Topcoat",
      desc: "Elastomeric polymers automatically flow back into place when exposed to sunlight or warm water, erasing swirl marks and light scratches.",
    },
    {
      label: "Stone-Chip & Gravel Defiance",
      desc: "High-density polyurethane absorbs high-velocity impact energy without puncturing or tearing the vehicle's original factory paint.",
    },
    {
      label: "Optically Clear High Gloss / Satin",
      desc: "Zero orange-peel texture. Preserves OEM metallic flake clarity and depth without yellowing or hazy distortion over time.",
    },
    {
      label: "Hydrophobic & Stain Resistant",
      desc: "Non-porous fluoropolymer barrier repels bird acid, tree sap, road tar, bug splatter, and hard mineral water deposits.",
    },
  ];

  return (
    <section id="ppf" className="py-24 lg:py-32 bg-[#08090A] relative border-b border-white/10 overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#4DA3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Immersive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Real PPF Installation Showcase */}
          <div className="lg:col-span-7 relative w-full min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl shadow-black/80 flex flex-col group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[600px] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/images/detailing-xpert-ppf.jpg"
                  alt="Detailing Xpert Master Technicians Installing Paint Protection Film"
                  className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />
                {/* Subtle base gradient for clean contrast */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                {/* Top Clean Badge Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#4DA3FF]" />
                    <span>Real Studio PPF Installation</span>
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#4DA3FF]/20 border border-[#4DA3FF]/40 text-[10px] font-mono text-[#80C4FF] uppercase">
                    Self-Healing TPU
                  </span>
                </div>
              </div>

              {/* Integrated Bottom Info Bar */}
              <div className="p-4 bg-[#111214] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#4DA3FF] font-bold">
                    DETAILING XPERT STUDIO • JAIPUR
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    TPU Edge-Wrapping & Precision Installation
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4DA3FF]/15 border border-[#4DA3FF]/30 text-white text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#4DA3FF]" />
                  <span>Certified TPU Film</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Narrative & Features */}
          <div className="lg:col-span-5 space-y-6 w-full min-w-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111214] border border-[#4DA3FF]/30 text-xs font-mono text-[#4DA3FF] uppercase tracking-widest mb-3">
                <Shield className="w-3.5 h-3.5" />
                Physical Defense Architecture
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
                PROTECT THE FINISH. <br />
                <span className="text-[#4DA3FF]">PRESERVE THE LOOK.</span>
              </h2>

              {/* Animated Electric Blue Line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#4DA3FF] to-transparent shadow-[0_0_10px_#4DA3FF] my-4" />

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                Our thermoplastic polyurethane (TPU) film is an invisible, optically clear sacrificial armor over your factory clear coat. Edge-wrapped with surgical precision for a virtually undetectable fit in Mansarovar, Jaipur.
              </p>
            </div>

            {/* 4 Exact Feature Items */}
            <div className="space-y-3 pt-2">
              {featurePillars.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#111214]/60 border border-white/5 hover:border-[#4DA3FF]/30 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#4DA3FF]/20 border border-[#4DA3FF]/40 flex items-center justify-center text-[#4DA3FF] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                      {feat.label}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Package Selector Tabs */}
            <div className="pt-3 border-t border-white/10 space-y-3 w-full min-w-0">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
                {Object.keys(packages).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    data-cursor="SELECT"
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === key
                        ? "bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] text-white font-bold shadow-md shadow-blue-950/50"
                        : "bg-[#111214] text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {packages[key].name}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#111214] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">{packages[activeTab].name}</span>
                  <span className="text-[#4DA3FF] font-semibold">{packages[activeTab].warranty}</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  {packages[activeTab].desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {packages[activeTab].coverage.map((c, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300">
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(`PPF - ${packages[activeTab].name}`)}
                data-cursor="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#4DA3FF] via-[#2B82F6] to-[#0066E6] hover:from-[#70B8FF] hover:to-[#0052BF] transition-all shadow-lg shadow-blue-950/40 cursor-pointer"
              >
                <span>Book PPF Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Detailing Xpert Jaipur, I would like to inquire about ${packages[activeTab].name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111214] hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
