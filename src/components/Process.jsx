import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Search, Sparkles, Wrench, Award, Clock } from "lucide-react";
import { PROCESS_STEPS } from "../data/content";

const stepIcons = [Search, Wrench, Sparkles, Award];

export default function Process({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#08090A] relative border-b border-white/10 carbon-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111214] border border-[#4DA3FF]/30 text-xs font-mono text-[#4DA3FF] uppercase tracking-widest mb-3">
            <Clock className="w-3.5 h-3.5" />
            Methodology & Protocol
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
            OUR 4-STEP PROTOCOL
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Every vehicle in our Mansarovar, Jaipur studio undergoes an uncompromising 4-stage systematic protocol to guarantee showroom-exceeding perfection.
          </p>
        </div>

        {/* Desktop Horizontal Stepper Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-[#111214] border-[#4DA3FF] shadow-xl shadow-blue-950/40"
                    : "bg-[#0B0C10]/60 border-white/10 hover:border-white/20 hover:bg-[#111214]/40"
                }`}
              >
                {/* Step Connector Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-2xl font-black font-['Space_Grotesk'] ${
                      isActive ? "text-[#4DA3FF]" : "text-zinc-600"
                    }`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive ? "bg-[#4DA3FF] text-white" : "bg-zinc-900 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-['Outfit'] uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                {/* Active Underline */}
                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-[#4DA3FF] rounded-b-xl" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase (Desktop) */}
        <div className="hidden lg:block p-8 rounded-2xl bg-[#111214]/90 border border-white/15 backdrop-blur-md">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-4">
              <div className="text-7xl font-black font-['Space_Grotesk'] text-[#4DA3FF]/20">
                {PROCESS_STEPS[activeStep].step}
              </div>
              <h3 className="text-3xl font-black text-white font-['Outfit'] uppercase -mt-4">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-sm font-mono text-[#4DA3FF] mt-1">
                {PROCESS_STEPS[activeStep].subtitle}
              </p>
            </div>

            <div className="col-span-8 border-l border-white/10 pl-8 space-y-4">
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {PROCESS_STEPS[activeStep].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {PROCESS_STEPS[activeStep].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="relative pl-8 border-l-2 border-[#4DA3FF]/30 pb-6 last:pb-0"
              >
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#111214] border-2 border-[#4DA3FF] flex items-center justify-center text-[#4DA3FF] font-bold text-xs font-mono">
                  {step.step}
                </div>

                <div className="p-5 rounded-xl bg-[#111214]/70 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Outfit'] uppercase">
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono text-[#4DA3FF]">
                        {step.subtitle}
                      </p>
                    </div>
                    <Icon className="w-5 h-5 text-[#4DA3FF]" />
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#4DA3FF] via-[#2B82F6] to-[#0066E6] hover:from-[#70B8FF] hover:to-[#0052BF] transition-all shadow-lg shadow-blue-950/40 cursor-pointer"
          >
            <span>Book Your Studio Slot</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
