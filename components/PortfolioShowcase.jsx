"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone, Play, Maximize2, X, Sparkles, Filter } from "lucide-react";
import CampaignGallery from "./CampaignGallery";
import { experience, profile } from "@/data/profile";
import { websites } from "@/data/websites";
import VideoPortfolio from "./VideoPortfolio";

const ease = [0.22, 1, 0.36, 1];

export default function PortfolioShowcase() {
  return (
    <main className="showcase-site bg-[#050505] text-white">
      <AnimatedHero />
      <PersonalIntro />
      <Contents />
      <WorkGrid />
      <DigitalWork />
      <VideoWork />
      <Experience />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section id="top" className="showcase-hero relative min-h-[100svh] overflow-hidden">
      <div className="showcase-halftone absolute inset-0" />
      <nav className="relative z-30 flex items-center justify-between px-5 py-5 md:px-10 md:py-8">
        <a href="#top" className="text-sm font-black uppercase tracking-[.18em]">TM<span className="text-[#6ea8ff]">.</span></a>
        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.16em] md:flex">
          <a href="#work" className="hover:text-[#77aaff]">Work</a>
          <a href="#about" className="hover:text-[#77aaff]">About</a>
          <a href="#contact" className="hover:text-[#77aaff]">Contact</a>
        </div>
        <span className="font-mono text-[10px] text-white/55">VTE · LAOS / 2026</span>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-84px)] max-w-[1500px] grid-cols-12 items-end px-5 pb-10 md:px-10 md:pb-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease }} className="col-span-12 pb-[52vh] md:col-span-8 md:pb-20">
          <p className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-white/60"><span className="h-px w-10 bg-white/60" /> Multidisciplinary creative</p>
          <h1 className="max-w-[8ch] text-[clamp(4.4rem,11vw,10.5rem)] font-black uppercase leading-[.78] tracking-[-.075em]">Visual<br /><span className="text-stroke">Impact</span></h1>
          <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/62 md:text-base">Graphic design, motion, digital products and campaigns built to stop the scroll—and hold attention.</p>
        </motion.div>

        <img src="/profile-image-full-body.png" alt="Thanousone Meksithong" className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[74svh] -translate-x-1/2 object-contain object-bottom md:h-[91svh]" />

        <div className="absolute bottom-8 right-5 z-20 text-right md:bottom-14 md:right-10">
          <p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/45">Creative portfolio</p>
          <p className="mt-2 text-lg font-bold md:text-2xl">Thanousone<br />Meksithong</p>
          <a href="#work" className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white text-black transition hover:scale-105"><ArrowDownRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function AnimatedHero() {
  return (
    <section id="top" className="desktop-hero relative min-h-[100svh] overflow-visible text-[#10131b]">
      <div className="desktop-dots absolute inset-0" />
      <div className="desktop-landscape absolute inset-0" />
      <div className="desktop-background-wash absolute inset-0" />
      <div className="browser-bar relative z-30 flex h-12 items-center gap-3 border-b border-black/10 bg-white/80 px-4 backdrop-blur md:h-14 md:px-7">
        <span className="h-3 w-3 rounded-full bg-[#ff654c]" /><span className="h-3 w-3 rounded-full bg-[#ffc84c]" /><span className="h-3 w-3 rounded-full bg-[#58c552]" />
        <span className="ml-3 rounded-t-lg bg-white px-5 py-2 font-mono text-[9px] font-bold uppercase tracking-[.12em] shadow-sm md:text-[10px]">Portfolio 2026</span>
        <span className="hidden font-mono text-[10px] text-black/35 sm:block">Thanousone — Creative workspace</span>
        <a href="#work" className="ml-auto rounded-lg bg-[#0755d5] px-4 py-2 text-[10px] font-black uppercase tracking-[.12em] text-white">View work</a>
      </div>
      <nav className="relative z-30 flex items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="text-sm font-black uppercase tracking-[.18em]">TM<span className="text-[#0755d5]">.</span></a>
        <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-[.14em] md:gap-8"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      </nav>
      <motion.div initial={{ opacity: 0, x: 45, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: .55, duration: .8, ease }} className="pointer-events-none absolute right-[-1%] top-[6%] z-20 hidden lg:block">
        <div className="ux-toolbar-live relative">
          <img src="/hero-ux-toolbar.png" alt="Creative workspace toolbar" className="w-[500px] drop-shadow-[0_18px_28px_rgba(2,16,48,.2)] xl:w-[590px]" />
          <span className="ux-status-pulse" />
          <span className="ux-share-glow" />
          <span className="ux-sparkle">✦</span>
        </div>
      </motion.div>
      <div className="relative z-10 mx-auto min-h-[calc(100svh-104px)] max-w-[1500px] px-4 pb-12 md:px-10">
        <div className="hero-canvas hero-canvas-enter absolute left-1/2 top-[44%] h-[52vh] w-[84vw] max-w-[900px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#090b10]/92 shadow-[0_30px_80px_rgba(0,0,0,.65)] backdrop-blur-md md:top-[46%] md:h-[59vh] md:w-[62vw]">
          <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-2 border-b border-white/10 bg-black/40 px-4 z-20"><span className="h-2 w-2 rounded-full bg-[#3b82f6]" /><span className="font-mono text-[9px] uppercase tracking-[.15em] text-white/45">Visual playground / 01</span><span className="hero-spinner ml-auto h-4 w-4 rounded-full border-2 border-white/20 border-t-[#3b82f6]" /></div>
          <p className="absolute left-5 top-14 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#6ea8ff] md:left-9 z-20">Multidisciplinary creative</p>
          <div className="absolute inset-x-0 top-10 bottom-12 flex items-center justify-center p-2 z-10 pointer-events-none">
            <img
              src="/Motion_graphics_animation_logo.gif"
              alt="Motion graphics animation logo"
              className="h-full w-full object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <p className="absolute bottom-5 left-1/2 z-20 w-max max-w-[80%] -translate-x-1/2 text-center text-[10px] font-medium leading-relaxed text-white/60 md:bottom-8 md:text-xs">Design · Marketing · Motion · Digital experiences</p>
        </div>
        <motion.div initial={{ opacity: 0, x: -55, rotate: -10 }} animate={{ opacity: 1, x: 0, rotate: -5 }} transition={{ delay: .65, duration: .75, ease }} className="absolute left-[2%] top-[19%] z-20 hidden md:block"><img src="/hero-illustrator-file.png" alt="Adobe Illustrator project file" className="collage-file-float w-[100px] drop-shadow-[0_18px_20px_rgba(0,0,0,.2)] lg:w-[130px]" /></motion.div>
        <motion.div initial={{ opacity: 0, x: 50, rotate: 9 }} animate={{ opacity: 1, x: 0, rotate: 4 }} transition={{ delay: .8, duration: .75, ease }} className="absolute right-[3%] top-[20%] z-20 hidden md:block"><img src="/hero-after-effects-file.png" alt="Adobe After Effects video file" className="collage-file-float collage-file-delay w-[92px] drop-shadow-[0_18px_20px_rgba(0,0,0,.2)] lg:w-[118px]" /></motion.div>
        <motion.div initial={{ opacity: 0, y: 35, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ delay: .95, duration: .65, ease }} className="absolute bottom-[12%] left-[5%] z-[38]"><img src="/sticky-work-projects.png" alt="Work Projects" className="sticky-note-float w-[112px] drop-shadow-[0_18px_18px_rgba(0,0,0,.22)] md:w-[165px]" /></motion.div>
        <motion.div initial={{ opacity: 0, x: -25, y: 25, rotate: 8 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }} transition={{ delay: 1.12, duration: .7, ease }} className="absolute bottom-[34%] left-[4%] z-[38] hidden md:block"><img src="/sticky-personal-projects.png" alt="Personal Projects" className="sticky-note-float sticky-note-delay w-[145px] drop-shadow-[0_18px_18px_rgba(0,0,0,.2)]" /></motion.div>
        <div className="pointer-events-none absolute bottom-[-18%] right-[-8%] z-[35] hidden md:block">
          <img src="/hero-ipod-full.png" alt="iPod music player artwork" className="w-[230px] object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,.22)] lg:w-[285px] xl:w-[320px]" />
        </div>
        <motion.div initial={{ opacity: 0, x: -60, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1.0, duration: .9, ease }} className="pointer-events-none absolute bottom-[-4%] left-[15%] z-[15] hidden md:block">
          <img src="/hero-retro-computer.png" alt="Retro Apple computer" className="w-[190px] object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,.25)] lg:w-[230px] xl:w-[260px]" style={{ transform: 'rotate(2deg)' }} />
        </motion.div>
        <motion.figure initial={{ opacity: 0, x: -45, rotate: -6 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ delay: 1.2, duration: .9, ease }} className="vinyl-player pointer-events-none absolute bottom-[-32%] left-[-5%] z-[35] hidden w-[270px] md:block lg:w-[310px]">
          <div className="vinyl-image-wrap"><img src="/let-it-be-vinyl.png" alt="Let It Be vinyl record" className="vinyl-image-spin" /></div>
          <figcaption className="vinyl-caption"><div><span className="vinyl-kicker">Now playing</span><strong className="vinyl-song-title">Let It Be</strong></div><div className="vinyl-equalizer" aria-hidden><i /><i /><i /><i /><i /></div></figcaption>
        </motion.figure>
        <div className="job-title-stack absolute right-[12%] top-[42%] z-20 hidden flex-col items-start gap-2 md:flex">
          <img src="/hero-cursor-3d.png" alt="" aria-hidden className="job-title-cursor" />
          <span className="skill-pill"><b>01</b>Marketing</span>
          <span className="skill-pill"><b>02</b>Content Creator</span>
          <span className="skill-pill"><b>03</b>Graphic Design</span>
          <span className="skill-pill"><b>04</b>Motion Design</span>
          <span className="skill-pill"><b>05</b>Web Designer</span>
          <span className="skill-pill"><b>06</b>UI/UX</span>
        </div>
        <a href="#work" className="absolute bottom-5 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-black/15 bg-white/85 px-5 py-3 text-[10px] font-black uppercase tracking-[.15em] shadow-lg backdrop-blur">Explore portfolio <ArrowDownRight size={15} /></a>
      </div>
    </section>
  );
}

function PersonalIntro() {
  return (
    <section id="about" className="intro-paper relative overflow-hidden px-5 py-20 text-[#141414] md:px-10 md:py-28">
      <div className="intro-orb intro-orb-one" aria-hidden />
      <div className="intro-orb intro-orb-two" aria-hidden />
      <div className="relative z-20 mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -36, scale: .94 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .9, ease }} className="relative min-h-[440px] md:min-h-[560px]">
          <div className="about-image-glow absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden />
          <div className="about-laptop-float absolute inset-0 flex items-center justify-center">
            <img src="/about-laptop-profile.png" alt="Thanousone Meksithong appearing from a laptop" className="relative z-10 w-full max-w-[680px] object-contain drop-shadow-[0_28px_28px_rgba(7,31,84,.2)]" />
          </div>
          <div className="about-laptop-cursor hidden md:block" aria-hidden>
            <img src="/hero-cursor-3d.png" alt="" />
            <span className="about-cursor-click" />
          </div>
          <div className="hidden absolute inset-x-2 bottom-0 h-[310px] rounded-[1.5rem] border-2 border-black bg-[#1b1b1b] shadow-[14px_18px_0_#b7b7b7] md:inset-x-10">
            <div className="absolute inset-x-3 top-3 h-[235px] overflow-hidden rounded-xl bg-gradient-to-br from-[#d9dde6] to-white">
              <img src="/profile-image.jpg" alt="Thanousone Meksithong profile" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute bottom-4 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-white/15" />
          </div>
          <span className="chrome-star absolute bottom-2 left-1 text-7xl">✦</span>
          <span className="chrome-star absolute bottom-24 right-0 text-5xl">✦</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, ease }}>
          <p className="section-kicker text-[#0755d5]">Hello, I’m</p>
          <h2 className="mt-3 text-[clamp(3.2rem,6.2vw,5.8rem)] font-black leading-[.82] tracking-[-.065em]">THANOUSONE<br /><span className="font-normal italic">here!</span></h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/65 md:text-lg">I’m a multidisciplinary creative and marketer based in Vientiane, combining graphic design, video, content strategy and technology to build clear, memorable brand experiences.</p>
          <p className="mt-5 max-w-xl text-lg italic leading-relaxed">I believe effective design is more than decoration—it gives every idea its strongest possible version.</p>
          <div className="mt-9 border-t border-black/15 pt-6">
            <p className="text-sm font-black uppercase tracking-[.08em]">Get to know me</p>
            <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3"><Mail size={18} /><span>{profile.email}</span></a>
              <span className="flex items-center gap-3"><MapPin size={18} /><span>Vientiane, Laos</span></span>
              <a href={`tel:${profile.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-3"><Phone size={18} /><span>{profile.phones[0]}</span></a>
              <span className="flex items-center gap-3"><span className="grid h-[18px] w-[18px] place-items-center rounded border border-black text-[9px] font-black">TM</span><span>Designer · Marketer</span></span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Robot Flower Artwork on Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: .9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: .3 }}
        transition={{ duration: .9, ease }}
        className="pointer-events-none absolute bottom-[-8%] right-[-20%] z-10 hidden w-[440px] lg:block xl:right-[-16%] xl:w-[520px] 2xl:right-[-13%] 2xl:w-[580px]"
      >
        <img
          src="/about-robot-art.png"
          alt="Robot holding flowers artwork"
          className="w-full object-contain drop-shadow-[0_28px_44px_rgba(7,31,84,.26)]"
        />
      </motion.div>
    </section>
  );
}

function Contents() {
  const items = [["01", "Visual Design"], ["02", "Digital & Web"], ["03", "Video & Motion"], ["04", "Experience"], ["05", "Contact"]];
  return (
    <section className="bg-[#f1f4f8] px-5 py-24 text-[#071b50] md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="section-kicker text-[#0755d5]">Portfolio / Index</p>
        <div className="mt-10 grid gap-px overflow-hidden border border-[#0755d5]/20 bg-[#0755d5]/20 md:grid-cols-2">
          {items.map(([n, label]) => <a key={n} href={n === "01" ? "#work" : n === "02" ? "#digital" : n === "03" ? "#video" : n === "04" ? "#experience" : "#contact"} className="group flex items-center gap-6 bg-[#f1f4f8] p-6 transition hover:bg-white md:p-9"><span className="pixel-number text-[#0755d5]">{n}</span><span className="text-xl font-black uppercase tracking-[-.04em] md:text-3xl">{label}</span><ArrowUpRight className="ml-auto transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>)}
        </div>
      </div>
    </section>
  );
}

function Chapter({ number, title, subtitle }) {
  return <div className="chapter-band"><div className="mx-auto flex max-w-[1400px] items-end gap-5 px-5 py-12 md:px-10 md:py-16"><span className="pixel-number text-white/30">{number}</span><div className="pb-2"><p className="section-kicker text-white/55">{subtitle}</p><h2 className="mt-2 text-3xl font-black uppercase tracking-[-.05em] md:text-6xl">{title}</h2></div></div></div>;
}

function WorkGrid() {
  return <section id="work" className="relative bg-[#08090b] pb-24 md:pb-32">
    <Chapter number="01" title="Visual Design" subtitle="Campaigns / Banners / Social" />
    <CampaignGallery />
  </section>;
}
function DigitalWork() {
  const project = websites[0];
  return (
    <section id="digital" className="bg-[#050505] pb-28">
      <Chapter number="02" title="Digital & Web" subtitle="UX / Development / Strategy" />
      <div className="mx-auto max-w-[1400px] px-5 pt-12 md:px-10 md:pt-16">
        <a href={project.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-[1.6rem] border border-white/15 bg-gradient-to-br from-[#155cff] to-[#071331] p-3 md:p-6">
          <img src={project.image} alt={project.title} className="w-full rounded-[1rem] transition duration-700 group-hover:scale-[1.01]" />
          <div className="flex flex-col gap-4 px-2 pb-2 pt-6 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker text-white/50">Featured digital project</p><h3 className="mt-2 text-2xl font-black uppercase tracking-[-.04em] md:text-4xl">{project.title}</h3></div><span className="inline-flex items-center gap-2 text-sm font-bold uppercase">Visit project <ArrowUpRight size={16} /></span></div>
        </a>
        <div className="mt-5 grid gap-5 md:grid-cols-2"><a href="#contact" className="rounded-[1.4rem] border border-white/15 bg-[#101010] p-7"><Play className="text-[#75a7ff]" /><h3 className="mt-16 text-3xl font-black uppercase">Motion & AI Video</h3><p className="mt-2 text-sm text-white/50">Short-form storytelling, reels and campaign edits.</p></a><a href="#contact" className="rounded-[1.4rem] bg-[#adff00] p-7 text-black"><span className="pixel-number">09</span><h3 className="mt-10 text-3xl font-black uppercase">Campaign systems</h3><p className="mt-2 text-sm text-black/60">Content strategy built to scale across platforms.</p></a></div>
      </div>
    </section>
  );
}

function VideoWork() {
  return <section id="video" className="bg-[#08090b] pb-24 md:pb-32">
    <Chapter number="03" title="Video & Motion" subtitle="Brand films / Food stories / Campaigns" />
    <VideoPortfolio />
  </section>;
}
function Experience() {
  return (
    <section id="experience" className="bg-[#050505] pb-28">
      <Chapter number="04" title="Experience" subtitle="Selected roles / 2019—Now" />
      <div className="mx-auto max-w-[1400px] px-5 pt-12 md:px-10 md:pt-16">
        {experience.map((job, index) => <div key={`${job.org}-${index}`} className="grid gap-4 border-t border-white/20 py-7 md:grid-cols-12 md:py-9"><span className="font-mono text-[10px] text-white/40 md:col-span-2">{job.periodEn}</span><h3 className="text-xl font-black uppercase md:col-span-4 md:text-3xl">{job.role}</h3><div className="md:col-span-6"><p className="font-bold">{job.org}</p><div className="mt-3 flex flex-wrap gap-2">{job.tags.slice(0, 5).map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[.1em] text-white/50">{tag}</span>)}</div></div></div>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="chapter-band px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]"><p className="section-kicker text-white/55">05 / Start a project</p><h2 className="mt-6 max-w-[10ch] text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[.82] tracking-[-.07em]">Make it impossible to ignore.</h2><a href={`mailto:${profile.email}`} className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-black uppercase text-[#071b50] transition hover:scale-105"><Mail size={17} />{profile.email}</a><div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/30 pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-white/55 md:flex-row"><span>Thanousone Meksithong © 2026</span><span>Vientiane · Laos</span></div></div>
    </footer>
  );
}



