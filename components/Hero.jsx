"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#banners" },
  { label: "Experience", href: "#experience" },
  { label: "Message", href: "#contact" },
];
const socialLinks = [
  { label: "Email", href: "mailto:Thanousone.msi@gmail.com" },
  { label: "TikTok", href: "#contact" },
  { label: "Facebook", href: "#contact" },
];
const menuEase = "cubic-bezier(0.76, 0, 0.24, 1)";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn text-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85" alt="" className="anim-fade-in absolute inset-0 h-full w-full object-cover" />

      <div className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]" style={{ animationDelay: "500ms" }}>
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[14vh] leading-none tracking-[-0.055em] text-cream sm:text-[22vh] lg:text-[24vh]">
          <span className="pr-[6vw]">Thanousone &mdash; Meksithong&nbsp;</span>
          <span className="pr-[6vw]" aria-hidden="true">Thanousone &mdash; Meksithong&nbsp;</span>
        </div>
      </div>

      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28" style={{ animationDelay: "1200ms" }} />

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 text-xs leading-relaxed sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: "1400ms" }}><p>Creative Designer</p><p>Video Editor</p><p>Content Strategist</p></div>
        <div className="anim-fade-up hidden text-right sm:block" style={{ animationDelay: "1550ms" }}><p>Based in</p><p>Vientiane, Laos</p></div>
      </footer>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/profile-image-full-body.png" alt="Thanousone Meksithong" className="editorial-portrait anim-rise-in pointer-events-none absolute bottom-0 left-1/2 z-20 h-[89dvh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom sm:h-[96dvh]" style={{ animationDelay: "300ms" }} />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a href="#top" className="anim-fade-up font-hn text-lg tracking-wide" style={{ animationDelay: "800ms" }}>Thanousone</a>
        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm" style={{ animationDelay: "900ms" }}>2026</span>
          <nav className="flex flex-col gap-0.5 text-sm">{navLinks.map((link, index) => <a key={link.label} href={link.href} className="anim-fade-up transition-opacity duration-300 hover:opacity-60" style={{ animationDelay: `${1000 + index * 80}ms` }}>{link.label}</a>)}</nav>
          <nav className="flex flex-col gap-0.5 text-sm">{socialLinks.map((link, index) => <a key={link.label} href={link.href} className="anim-fade-up transition-opacity duration-300 hover:opacity-60" style={{ animationDelay: `${1150 + index * 80}ms` }}>{link.label}</a>)}</nav>
        </div>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="anim-fade-up absolute right-5 top-5 z-50 h-10 w-10 sm:hidden" style={{ animationDelay: "900ms" }}>
          <span className="absolute left-2 top-3 h-4 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-cream transition-transform duration-500 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} style={{ transitionTimingFunction: menuEase }} />
            <span className={`absolute left-0 top-[7px] h-px w-6 bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-cream transition-transform duration-500 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} style={{ transitionTimingFunction: menuEase }} />
          </span>
        </button>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMenuOpen(false)}>
        <aside className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ${menuOpen ? "translate-x-0" : "translate-x-full"}`} style={{ transitionTimingFunction: menuEase }} onClick={(event) => event.stopPropagation()}>
          <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className={`absolute right-6 top-6 transition-all duration-500 ${menuOpen ? "rotate-0 opacity-100 delay-300" : "rotate-90 opacity-0"}`}><X size={26} strokeWidth={1.5} /></button>
          <div className="mt-16">
            <p className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: menuOpen ? "250ms" : "0ms" }}>Site Index</p>
            <nav className="mt-6 flex flex-col">{navLinks.map((link, index) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className={`text-4xl leading-tight transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: menuOpen ? `${300 + index * 80}ms` : "0ms" }}>{link.label}</a>)}</nav>
          </div>
          <div className="mt-16">
            <p className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}>Find Me</p>
            <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">{socialLinks.map((link, index) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className={`transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: menuOpen ? `${550 + index * 60}ms` : "0ms" }}>{link.label}</a>)}</nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
