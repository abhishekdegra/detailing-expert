import React, { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

export default function OfferBanner({ onOpenBooking }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Studio Announcement" className="relative z-30 bg-gradient-to-r from-[#0C121E] via-[#101A2B] to-[#0A0E17] border-b border-[#4DA3FF]/30 py-1.5 px-4 text-[11px] sm:text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3 h-3" />
            Studio Consultation
          </span>
          <p className="text-[#C5C9CE]">
            <strong className="text-white font-semibold">COMPLIMENTARY DIGITAL PAINT AUDIT:</strong> Ultrasonic clear coat & swirl mapping at our Mansarovar, Jaipur studio.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking("PPF")}
            className="hidden sm:inline-flex items-center gap-1 text-[#4DA3FF] hover:text-white transition-colors underline underline-offset-4 font-semibold cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setVisible(false)}
            className="text-zinc-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
