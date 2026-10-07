"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { banners } from "@/data/banners";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

export default function BannerGallery() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const open = useCallback((i) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === 0 ? banners.length - 1 : i - 1)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === banners.length - 1 ? 0 : i + 1)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <section
      id="banners"
      className="relative border-t border-black/5 py-28 md:py-40"
    >
      <div className="container-wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            eyebrow={t(lang, "Banner Gallery")}
            title={t(lang, "ຜົນງານການອອກແບບສືໂຄສະນາ,", "Brand visuals,")}
            italicTail={t(lang, "ຜົນງານທີຜ່ານມາ.", "distilled.")}
            description={t(
              lang,
              "ການຄັດເລືອກແບນເນີແຄມເປນ ແລະ ຊຸດຫຼາຍໃບ — ອອກແບບເພື່ອຄວາມຊັດເຈນ ແລະ ຈັງຫວະໃນທຸກໜ້າຈໍ.",
              "A selection of campaign banners and multi-banner sets — designed for clarity, weight and rhythm across every screen."
            )}
          />
          <p className="font-mono text-[11px] tracking-ultra text-ink-500">
            {banners.length.toString().padStart(2, "0")} {t(lang, "ຜົນງານ", "works")}
          </p>
        </div>

        {/* Masonry */}
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {banners.map((b, i) => (
            <BannerTile
              key={b.src}
              banner={b}
              index={i}
              onClick={() => open(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Lightbox
            banner={banners[activeIndex]}
            index={activeIndex}
            total={banners.length}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function BannerTile({ banner, index, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: easing, delay: (index % 6) * 0.04 }}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.97 }}
      style={{ transformOrigin: "center" }}
      className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-black/5 bg-white text-left hover:border-black/15 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
      aria-label={`Open ${banner.title}`}
    >
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={banner.src}
          alt={banner.title}
          loading="lazy"
          decoding="async"
          className="h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-end justify-between text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div>
            <p className="text-[13px] font-medium">{banner.title}</p>
            <p className="text-[10px] uppercase tracking-ultra text-white/80">
              {banner.tag}
            </p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md">
            <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({ banner, index, total, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={banner.title}
    >
      {/* Click backdrop to close */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out"
      />

      {/* Top bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-8">
        <p className="pointer-events-auto font-mono text-[11px] tracking-ultra text-ink-600">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}{" "}
          · {banner.title}
        </p>
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black/5 text-ink-950 transition-all hover:border-black/30 hover:bg-black/10"
          aria-label="Close lightbox"
        >
          <X size={18} />
        </motion.button>
      </div>

      {/* Prev / Next */}
      <motion.button
        onClick={onPrev}
        aria-label="Previous"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-black/5 text-ink-950 transition-all hover:border-black/30 hover:bg-black/10 md:left-8"
      >
        <ChevronLeft size={22} />
      </motion.button>
      <motion.button
        onClick={onNext}
        aria-label="Next"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-black/5 text-ink-950 transition-all hover:border-black/30 hover:bg-black/10 md:right-8"
      >
        <ChevronRight size={22} />
      </motion.button>

      <motion.div
        key={banner.src}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="relative z-[1] mx-auto flex max-h-[88vh] w-[min(92vw,1400px)] items-center justify-center px-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={banner.src}
          alt={banner.title}
          className="max-h-[88vh] w-auto max-w-full rounded-lg object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]"
        />
      </motion.div>
    </motion.div>
  );
}
