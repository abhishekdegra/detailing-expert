import React, { useState } from "react";
import { Shield, Sparkles, Disc, Armchair, Droplets, Wrench, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { SERVICES, STUDIO_INFO } from "../data/content";

const serviceIcons = {
  ppf: Shield,
  ceramic: Sparkles,
  detailing: Disc,
  interior: Armchair,
  wash: Droplets,
  accessories: Wrench,
};

const getServiceObjPosition = (id) => {
  if (id === "ppf") return "object-top";
  if (id === "ceramic") return "object-[center_35%]";
  return "object-center";
};

export default function Services({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#08090A] relative border-b border-white/10 carbon-mesh overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4DA3FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111214] border border-[#4DA3FF]/30 text-xs font-mono text-[#4DA3FF] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF]" />
              Precision Automotive Care
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
              STUDIO SERVICES
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Hover over each discipline to inspect our studio methods, optical standards, and warranty coverage in Mansarovar, Jaipur.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              data-cursor="QUOTE"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111214] hover:bg-[#4DA3FF] border border-white/10 hover:border-[#4DA3FF] text-xs font-mono font-bold uppercase text-white transition-all duration-200 cursor-pointer"
            >
              <span>Custom Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* DESKTOP: Large Interactive Service Panels (Split Master View) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch min-h-[580px]">
          {/* Left Service Menu Panels */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            {SERVICES.map((service, idx) => {
              const Icon = serviceIcons[service.id] || Shield;
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  data-cursor="EXPLORE"
                  className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-[#111214]/90 border-[#4DA3FF] shadow-xl shadow-blue-950/40 translate-x-2"
                      : "bg-[#0B0C10]/60 border-white/5 hover:border-white/20 hover:bg-[#111214]/50"
                  }`}
                >
                  {/* Left Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 inset-y-0 w-1 bg-[#4DA3FF] rounded-l-xl shadow-[0_0_12px_#4DA3FF]" />
                  )}

                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl font-black font-['Space_Grotesk'] ${
                        isActive ? "text-[#4DA3FF]" : "text-zinc-600"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div>
                      <h3
                        className={`text-base font-bold font-['Outfit'] tracking-wide transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        {service.name.split("(")[0]}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5 line-clamp-1">
                        {service.badge}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-[#4DA3FF] text-white" : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Service Detailed Stage */}
          <div className="col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#111214]/80 flex flex-col justify-between relative shadow-2xl">
            {/* Visual Hero Area */}
            <div className="relative h-72 w-full bg-black overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.name}
                className={`w-full h-full object-cover ${getServiceObjPosition(activeService.id)} transition-all duration-700`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200">
                  {activeService.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#111214]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#4DA3FF]">
                  {activeService.duration}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white font-['Outfit'] tracking-tight">
                  {activeService.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-300 font-light leading-relaxed">
                  {activeService.longDesc}
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenBooking(activeService.name)}
                  data-cursor="BOOK"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#4DA3FF] via-[#2B82F6] to-[#0066E6] hover:from-[#70B8FF] hover:to-[#0052BF] transition-all shadow-lg shadow-blue-950/50 cursor-pointer"
                >
                  <span>Book {activeService.name.split("(")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Detailing Xpert Jaipur, I want to inquire about ${activeService.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="WHATSAPP"
                  className="px-4 py-3 rounded-lg bg-[#111214] hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET: Stacked Interactive Cards */}
        <div className="lg:hidden space-y-5">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Shield;

            return (
              <div
                key={service.id}
                className="rounded-xl bg-[#111214]/70 border border-white/10 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full object-cover ${getServiceObjPosition(service.id)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-200">
                      0{idx + 1} • {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#4DA3FF] text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    {service.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(service.name)}
                      className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#4DA3FF] to-[#0066E6] text-white text-xs font-mono font-bold uppercase tracking-wider text-center"
                    >
                      Book Service
                    </button>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Detailing Xpert Jaipur, I want to inquire about ${service.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-lg bg-zinc-800 text-xs font-mono text-emerald-400 border border-white/5"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
