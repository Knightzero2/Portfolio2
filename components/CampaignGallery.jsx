"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { banners } from "@/data/banners";
import { campaigns } from "@/data/campaigns";

const brands = ["All work", "Cám Ơn", "Kaogee", "Senglao", "Archive"];
export default function CampaignGallery() {
  const [filter, setFilter] = useState("All work");
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const origin = useRef(null);
  const archive = banners.map(b => ({ ...b, brand: "Archive", description: "Selected campaign artwork from the portfolio archive." }));
  const items = filter === "Archive" ? archive : campaigns.filter(b => filter === "All work" || b.brand === filter);
  const visible = expanded ? items : items.slice(0, 9);
  const selected = active === null ? null : items[active];
  useEffect(() => {
    if (active === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = e => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive(i => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setActive(i => (i - 1 + items.length) % items.length);
      if (e.key === "Tab") {
        const controls = [...document.querySelectorAll('[data-campaign-dialog] button, [data-campaign-dialog] a')];
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", key); origin.current?.focus(); };
  // Keep focus and scroll locked while navigating between artworks.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active !== null, filter]);

  return <div className="campaign-gallery mx-auto max-w-[1400px] px-5 pt-14 md:px-10 md:pt-20">
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
      <div><p className="section-kicker text-[#a8c7ff]">Selected campaigns / Visual storytelling</p><h3 className="mt-5 max-w-[16ch] text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[.98] tracking-[-.055em]">Visual Craft &<br /><span className="text-[#a8c7ff]">Campaign Media.</span></h3></div>
      <div><p className="max-w-md text-sm leading-7 text-white/60 md:text-base">Food, feeling, and a reason to stop scrolling. A collection of restaurant launches, signature menus, café stories, and seasonal campaigns—each with its own visual personality.</p><div className="mt-6 flex gap-7 border-t border-white/15 pt-5"><div><strong className="text-2xl">{campaigns.length}</strong><p className="mt-1 text-xs text-white/50">New artworks</p></div><div><strong className="text-2xl">03</strong><p className="mt-1 text-xs text-white/50">Brand collections</p></div><div><strong className="text-2xl">{banners.length}</strong><p className="mt-1 text-xs text-white/50">Archive pieces</p></div></div></div>
    </div>

    <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/15 bg-[#101318] lg:grid-cols-[.85fr_1.15fr]">
      <div className="flex flex-col justify-between p-7 md:p-10"><div><p className="section-kicker text-[#e6bd79]">In focus / Cám Ơn</p><h4 className="mt-6 text-4xl font-bold leading-tight tracking-[-.04em] md:text-5xl">A new destination.<br />An unmistakable<br /><span className="text-[#e6bd79]">first impression.</span></h4><p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Warm cream, deep red, and vibrant yellow bring the Wattay launch to life. Food-led visuals connect the new location with the flavours at the heart of the brand.</p></div><div className="mt-8"><div className="flex flex-wrap gap-2">{["Launch campaign", "Menu storytelling", "Social design"].map(s => <span key={s} className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] text-white/70">{s}</span>)}</div><button onClick={() => { setFilter("Cám Ơn"); setExpanded(true); }} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#e6bd79]">Explore the collection <ArrowUpRight size={17} /></button></div></div>
      <button className="group relative bg-[#e9d5b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a8c7ff]" aria-label="View Cám Ơn Wattay launch artwork" onClick={e => { origin.current = e.currentTarget; setFilter("All work"); setActive(campaigns.findIndex(b => b.id === "camon-wattay")); }}><img src="/banners/campaigns/camon-wattay.jpg" alt="Cám Ơn Now Landing Wattay restaurant launch campaign" className="h-auto w-full" /><span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs text-white"><Maximize2 size={13} /> View artwork</span></button>
    </div>

    <div className="mt-12 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 md:flex-row md:items-center"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter campaign artwork">{brands.map(brand => <button key={brand} aria-pressed={filter === brand} onClick={() => { setFilter(brand); setExpanded(false); }} className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition ${filter === brand ? "border-[#a8c7ff] bg-[#a8c7ff] text-[#081323]" : "border-white/20 text-white/60 hover:border-white/60 hover:text-white"}`}>{brand}</button>)}</div><p className="font-mono text-[10px] uppercase tracking-[.15em] text-white/45">{String(items.length).padStart(2,"0")} artworks / Click to explore</p></div>
    <div className="mt-7 columns-1 gap-6 sm:columns-2 lg:columns-3">{visible.map((item, i) => <article key={item.src} className="mb-8 break-inside-avoid"><button onClick={e => { origin.current = e.currentTarget; setActive(i); }} aria-label={`View ${item.title}`} className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-[#131313] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a8c7ff]"><img src={item.src} alt={`${item.brand}: ${item.title}`} loading="lazy" decoding="async" className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" /><span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-black/65 text-white"><Maximize2 size={14} /></span></button><div className="pt-4"><p className="font-mono text-[10px] uppercase tracking-[.15em] text-[#a8c7ff]">{item.brand} <span className="text-white/30">/ {item.tag}</span></p><h4 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h4><p className="mt-2 text-xs leading-6 text-white/50">{item.description}</p></div></article>)}</div>
    {items.length > 9 && <div className="mt-6 text-center"><button onClick={() => setExpanded(v => !v)} className="rounded-full border border-white/25 px-7 py-3 text-sm hover:bg-white hover:text-black">{expanded ? "Show less" : `View all ${items.length} artworks`} <span className="ml-2">{expanded ? "−" : "+"}</span></button></div>}
    <div className="mt-16 grid gap-7 border-t border-white/15 pt-8 md:grid-cols-3">{[["01", "Brand character", "Distinct colour, type, and mood for every restaurant and café."], ["02", "Product storytelling", "Signature dishes and drinks become the centre of the story."], ["03", "Campaign continuity", "Launches, promotions, and seasonal moments with a consistent visual language."]].map(([n,title,copy]) => <div key={n}><span className="font-mono text-xs text-[#a8c7ff]">{n} /</span><h4 className="mt-3 text-lg font-semibold">{title}</h4><p className="mt-2 max-w-sm text-sm leading-6 text-white/50">{copy}</p></div>)}</div>
    {selected && <div data-campaign-dialog role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setActive(null)} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 px-4 py-16 backdrop-blur-lg"><button ref={closeRef} aria-label="Close artwork" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full border border-white/30 bg-black p-3"><X size={20} /></button><button aria-label="Previous artwork" onClick={e => { e.stopPropagation(); setActive(i => (i - 1 + items.length) % items.length); }} className="absolute left-2 top-1/2 z-10 rounded-full border border-white/30 bg-black/85 p-3 md:left-6"><ChevronLeft /></button><button aria-label="Next artwork" onClick={e => { e.stopPropagation(); setActive(i => (i + 1) % items.length); }} className="absolute right-2 top-1/2 z-10 rounded-full border border-white/30 bg-black/85 p-3 md:right-6"><ChevronRight /></button><img onClick={e => e.stopPropagation()} src={selected.src} alt={selected.title} className="max-h-[70svh] max-w-[90vw] object-contain" /><div onClick={e => e.stopPropagation()} className="mt-5 flex w-full max-w-3xl flex-wrap items-center justify-between gap-3"><div><p className="text-xs text-[#a8c7ff]">{selected.brand} / {active + 1} of {items.length}</p><h4 className="mt-1 text-lg font-semibold">{selected.title}</h4></div><a href={selected.src} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2 text-xs">Open original ↗</a></div></div>}
  </div>;
}
