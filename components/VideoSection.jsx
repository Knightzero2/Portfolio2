"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ExternalLink, Sparkles, Film, Clapperboard } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { videoCategories, videosByCategory } from "@/data/videoLinks";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

const categoriesEn = [
  {
    id: "ai",
    label: "AI Videos",
    sublabel: "AI Voice Videos",
    description: "AI-driven narrative videos blending generative voice, visuals and motion.",
  },
  {
    id: "event",
    label: "Event Video",
    sublabel: "Live coverage",
    description: "On-the-ground event coverage and cinematic recap edits.",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easing } },
};

export default function VideoSection() {
  const { lang } = useLanguage();
  const [active, setActive] = useState(videoCategories[0].id);

  const loCategory = videoCategories.find((c) => c.id === active);
  const enCategory = categoriesEn.find((c) => c.id === active);
  const videos = videosByCategory(active);

  const displayCategories = lang === "lo" ? videoCategories : categoriesEn;

  return (
    <section
      id="work"
      className="relative border-t border-white/5 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(99,102,241,0.03),transparent)]"
      />

      <div className="container-wide">
        <SectionHeading
          index="03"
          eyebrow={t(lang, "ຜົນງານວິດີໂອ", "Selected Video Work")}
          title={t(lang, "ເລື່ອງລາວຜ່ານ", "Stories told in")}
          italicTail={t(lang, "ການເຄື່ອນໄຫວ.", "motion.")}
          description={t(
            lang,
            "ການຄັດເລືອກຜົນງານວິດີໂອລ່າສຸດ, ກວມເອົາການເລົ່າເລື່ອງດ້ວຍ AI ແລະ ການຖ່າຍທອດງານສົດ. ກົດທີ່ບັດໃດໜຶ່ງເພື່ອຊົມໃນ Facebook.",
            "A curated selection of recent video work, spanning AI-driven narratives and live event coverage. Click any card to watch on Facebook."
          )}
        />

        <div
          role="tablist"
          className="mt-12 inline-flex flex-wrap items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] p-1.5"
        >
          {displayCategories.map((c) => {
            const isActive = c.id === active;
            return (
              <motion.button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                whileHover={{ scale: isActive ? 1 : 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className={`relative rounded-full px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-white" : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="video-tab-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 36 }}
                    className="absolute inset-0 -z-0 rounded-full bg-ink-950"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  {c.id === "ai" ? <Sparkles size={13} /> : <Clapperboard size={13} />}
                  {c.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active category meta */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`${active}-${lang}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: easing }}
            className="mt-6 max-w-xl text-[14px] text-ink-600"
          >
            <span className="text-ink-950 font-medium">
              {lang === "lo" ? loCategory?.sublabel : enCategory?.sublabel}
            </span>
            <span className="mx-2 text-ink-950/20">·</span>
            {lang === "lo" ? loCategory?.description : enCategory?.description}
          </motion.p>
        </AnimatePresence>

        {/* Count badge */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 font-mono text-[11px] tracking-ultra text-ink-700">
            <Film size={10} />
            {videos.length} {t(lang, "ລາຍການ", "items")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${lang}-grid`}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[280px]"
          >
            {videos.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} lang={lang} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function VideoCard({ video, index, lang }) {
  const gradients = [
    "from-indigo-500/20 via-purple-500/10 to-rose-500/20",
    "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    "from-sky-500/20 via-indigo-500/10 to-fuchsia-500/20",
    "from-rose-500/20 via-pink-500/10 to-purple-500/20",
    "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    "from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20",
    "from-lime-500/20 via-emerald-500/10 to-teal-500/20",
  ];
  const grad = gradients[index % gradients.length];
  const isReel = video.type === "reel";
  let spanClasses = "md:col-span-1 md:row-span-1";
  if (isReel) {
    spanClasses = "md:col-span-1 md:row-span-2";
  } else if (index === 0 || index === 3) {
    spanClasses = "md:col-span-2 md:row-span-2";
  } else if (index === 1 || index === 4) {
    spanClasses = "md:col-span-2 md:row-span-1";
  }

  return (
    <motion.a
      variants={cardVariants}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`group relative block overflow-hidden rounded-2xl border border-black/5 bg-white hover:border-black/15 hover:shadow-xl hover:shadow-black/5 ${spanClasses}`}
    >
      <div className="relative h-full w-full overflow-hidden min-h-[240px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${grad} transition-transform duration-700 ease-out group-hover:scale-105`} />
        <motion.span
          aria-hidden
          animate={{ x: [0, 18, -10, 0], y: [0, -14, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
        />
        <motion.span
          aria-hidden
          animate={{ x: [0, -16, 12, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-12 bottom-6 h-44 w-44 rounded-full bg-white/5 blur-3xl"
        />
        <div className="absolute inset-0 bg-grid-faint bg-[length:32px_32px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Type badge */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-ultra text-white backdrop-blur-md">
            {isReel ? <><Film size={9} /> Reel</> : <><Play size={9} fill="currentColor" /> Video</>}
          </span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white/80 group-hover:bg-white/40 group-hover:shadow-lg group-hover:shadow-black/10"
          >
            <Play size={22} className="translate-x-0.5" fill="currentColor" />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 md:p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[15px] font-medium text-white shadow-black drop-shadow-md">{video.title}</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-white/80 shadow-black drop-shadow-md">
              {isReel ? t(lang, "ຄລິບແນວຕັ້ງ", "Vertical Reel") : t(lang, "ວິດີໂອ", "Video")} · Facebook
            </p>
          </div>
          <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-black">
            <ExternalLink size={14} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
