import React, { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle, ExternalLink } from "lucide-react";
import { REVIEWS, STUDIO_INFO } from "../data/content";

export default function Reviews() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(REVIEWS.length - 1, Math.max(0, index)));
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 340;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollToIndex(Math.min(REVIEWS.length - 1, activeIndex + 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#08090A] relative border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#4DA3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111214] border border-[#4DA3FF]/30 text-xs font-mono text-[#4DA3FF] uppercase tracking-widest mb-2.5">
              <Star className="w-3.5 h-3.5 fill-[#4DA3FF] text-[#4DA3FF]" />
              Verified Client Feedback
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
              CUSTOMER TESTIMONIALS
            </h2>
            <p className="mt-1 text-zinc-400 text-xs sm:text-sm font-light">
              Swipe horizontally to read verified car owners' feedback in Mansarovar and across Jaipur.
            </p>
          </div>

          {/* Desktop & Mobile Navigation Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={STUDIO_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111214] hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#4DA3FF]" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                data-cursor="PREV"
                className="w-8 h-8 rounded-lg bg-[#111214] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#4DA3FF] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={activeIndex === REVIEWS.length - 1}
                data-cursor="NEXT"
                className="w-8 h-8 rounded-lg bg-[#111214] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#4DA3FF] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Swipeable Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {REVIEWS.map((rev, idx) => (
            <div
              key={rev.id}
              className={`w-[84vw] sm:w-[360px] md:w-[380px] shrink-0 snap-center p-5 sm:p-6 rounded-2xl bg-[#111214]/80 border transition-all duration-300 flex flex-col justify-between ${
                activeIndex === idx
                  ? "border-[#4DA3FF]/50 shadow-xl shadow-blue-950/20 bg-[#111214]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                {/* 5 Stars + Verified Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-[#4DA3FF]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#4DA3FF]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle className="w-2.5 h-2.5" />
                    Verified Client
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {rev.car}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#4DA3FF] mt-0.5">
                  Service: {rev.service} • {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Hint & Dot Indicators */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            <span>←</span> Swipe to browse <span>→</span>
          </span>

          <div className="flex items-center gap-1.5">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-[#4DA3FF]" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
