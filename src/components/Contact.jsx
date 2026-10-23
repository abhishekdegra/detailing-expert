import React from "react";
import { MapPin, Phone, MessageCircle, Clock, Navigation, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Contact({ onOpenBooking }) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#060709] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111214] border border-[#4DA3FF]/30 text-xs font-mono text-[#4DA3FF] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Studio Location & Inquiries
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-none">
            DETAILING XPERT <br />
            <span className="text-[#4DA3FF]">MANSAROVAR, JAIPUR</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Conveniently located on New Sanganer Road opposite Varun Path. Bring your vehicle in for a complimentary digital paint inspection and custom consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#111214]/80 border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Studio Info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4DA3FF]/15 border border-[#4DA3FF]/30 flex items-center justify-center text-[#4DA3FF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Studio Location
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {STUDIO_INFO.name}
                  </p>
                  <p className="text-xs text-zinc-300 font-light mt-0.5 leading-relaxed">
                    {STUDIO_INFO.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Studio Timings
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {STUDIO_INFO.hours}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Open 7 Days a Week
                  </p>
                </div>
              </div>

              {/* Verified Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-[#4DA3FF] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-lg font-bold text-white hover:text-[#4DA3FF] transition-colors font-mono mt-0.5 block"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Call for immediate assistance or slot booking
                  </p>
                </div>
              </div>

              {/* Verified Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-[#4DA3FF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-[#4DA3FF] transition-colors font-mono mt-0.5 block"
                  >
                    {STUDIO_INFO.email}
                  </a>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Send inquiries, quotes & partnership requests
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={STUDIO_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#4DA3FF]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4DA3FF]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Detailing Xpert Jaipur, I would like to book a detailing slot.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Embed / Styled Detailing Hub Display */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 relative min-h-[400px] flex flex-col justify-between">
            {/* Interactive Google Map iframe targeting Mansarovar, Jaipur */}
            <iframe
              title="Detailing Xpert Jaipur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.603704285994!2d75.7525381871582!3d26.864388100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f555555555%3A0x123456789abcdef!2sMansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Studio Badge on top of Map */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 max-w-xs shadow-xl pointer-events-none">
              <span className="text-[10px] font-mono text-[#4DA3FF] uppercase font-bold tracking-wider">
                FLAGSHIP STUDIO
              </span>
              <p className="text-xs font-bold text-white font-['Outfit'] mt-0.5">
                Detailing Xpert • Mansarovar, Jaipur
              </p>
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                Opposite Varun Path, New Sanganer Road
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
