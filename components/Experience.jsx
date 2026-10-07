"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience, education } from "@/data/profile";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

const accentColors = [
  "from-black/5 to-black/[0.02] border-black/10",
  "from-indigo-500/10 to-indigo-500/5 border-indigo-400/20",
  "from-emerald-500/10 to-emerald-500/5 border-emerald-400/20",
  "from-rose-500/10 to-rose-500/5 border-rose-400/20",
];
const dotColors = [
  "bg-ink-950 ring-ink-950/10",
  "bg-indigo-500 ring-indigo-500/20",
  "bg-emerald-500 ring-emerald-500/20",
  "bg-rose-500 ring-rose-500/20",
];

// English versions of experience data
const experienceEn = [
  {
    period: "Jun 2026 — Oct 2026",
    role: "Marketing",
    org: "Senglao F&B Hospitality Group",
    location: "Vientiane",
    summary:
      "Responsible for overall marketing operations, brand communications, and content development across F&B and hospitality venues.",
    tags: ["F&B Marketing", "Brand Communication", "Content Strategy", "Social Media", "Campaigns"],
  },
  {
    period: "Feb 2025 — Apr 2025",
    role: "Marketing & Content",
    org: "Asiania International Consulting (i-study)",
    location: "Vientiane",
    summary:
      "Lead content and communication strategy across all channels — building campaigns that grow brand awareness and align marketing goals across departments.",
    tags: ["Content Strategy", "Social Media", "Email Campaigns", "Brand Awareness", "Market Research"],
  },
  {
    period: "Jan 2024 — Present",
    role: "Content Creator",
    org: "Whateverlao · Laos Daily News · HealJai2",
    summary:
      "Plan and execute content calendars across TikTok, Facebook and news platforms. Create and translate engaging editorial content and develop short-form TikTok video clips.",
    tags: ["TikTok", "Editorial", "SEO Copy", "Translation", "Short-form Video"],
  },
  {
    period: "Jun 2023 — Present",
    role: "Digital Marketing",
    org: "Freelance · Laos Daily News",
    summary:
      "Configure and analyze Facebook & Instagram Insights to optimize paid and organic campaigns. Build multilingual websites and run SEO campaigns.",
    tags: ["Meta Ads", "SEO", "Analytics", "Multilingual Sites", "Community"],
  },
  {
    period: "Jan 2019 — May 2023",
    role: "Programmer",
    org: "ICTLao Software Solution Co., Ltd",
    location: "Vientiane",
    summary:
      "Built websites front-to-back with SEO baked in from day one. Maintained 24/7 uptime and shipped production sites in WordPress, React.js, Vue.js, JavaScript, MySQL and MongoDB.",
    tags: ["WordPress", "React.js", "Vue.js", "JavaScript", "MySQL", "MongoDB", "Responsive Design"],
  },
];

const educationEn = [
  { period: "2017", title: "Advanced Diploma of Information Technology", org: "Kent Institute Australia" },
  { period: "2016 — 2017", title: "Diploma of Website Technology", org: "Kent Institute Australia" },
  { period: "2014 — 2015", title: "Diploma of System Analysis & Design", org: "Australian Pacific College" },
  { period: "2013 — 2014", title: "Certificate III & IV in Business & Marketing", org: "Australian Pacific College" },
  { period: "2012 — 2013", title: "English Course", org: "Sydney Institute TAFE NSW · SITEC" },
];

export default function Experience() {
  const { lang } = useLanguage();
  const hasContent = experience.length > 0 || education.length > 0;

  // Pick the right dataset based on language
  const expData = lang === "lo" ? experience : experienceEn;
  const eduData = lang === "lo" ? education : educationEn;

  return (
    <section
      id="experience"
      className="relative border-t border-black/5 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.02),transparent)]"
      />

      <div className="container-wide">
        <SectionHeading
          index="04"
          eyebrow={t(lang, "ປະສົບການ · CV", "Experience · CV")}
          title={t(lang, "ເສັ້ນທາງ ແຫ່ງ", "A timeline of")}
          italicTail={t(lang, "ການ ສ້າງ ສັນ.", "craft.")}
          description={t(
            lang,
            "ໜ້າ ທີ່, ຈຸດ ສຳ ຄັນ ແລະ ການ ສຶກ ສາ — ສ້າງ ຂຶ້ນ ເພື່ອ ຂະ ຫຍາຍ ຕາມ ການ ດຳ ເນີນ ຊີວິດ.",
            "Roles, milestones and education — built to grow as the journey continues."
          )}
        />

        {!hasContent && <CVEmptyState lang={lang} />}

        {expData.length > 0 && (
          <div className="mt-16">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-black/5">
                <Briefcase size={13} className="text-ink-600" />
              </span>
              <h3 className="display-text text-2xl text-ink-950">{t(lang, "ປະສົບການເຮັດວຽກ", "Work Experience")}</h3>
            </div>
            <Timeline items={expData} kind="work" />
          </div>
        )}

        {eduData.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-black/5">
                <GraduationCap size={13} className="text-indigo-600" />
              </span>
              <h3 className="display-text text-2xl text-ink-950">{t(lang, "ການສຶກສາ", "Education")}</h3>
            </div>
            <Timeline items={eduData} kind="edu" />
          </div>
        )}
      </div>
    </section>
  );
}

function Timeline({ items, kind = "work" }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-black/15 via-black/5 to-transparent md:left-6" />
      <ol className="space-y-6">
        {items.map((item, i) => {
          const accent = accentColors[i % accentColors.length];
          const dot = dotColors[i % dotColors.length];
          return (
            <motion.li
              key={`${item.period}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: i * 0.07 }}
              className="relative pl-16 md:pl-20"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.07 + 0.1 }}
                className={`absolute left-[14px] top-5 h-3 w-3 rounded-full ring-4 ring-white md:left-[18px] ${dot}`}
              />
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${accent} bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 md:p-8 hover:shadow-sm`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-black/5 blur-2xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-ultra text-ink-500">
                    <Calendar size={10} />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-ultra text-ink-500">
                      <MapPin size={10} />
                      {item.location}
                    </span>
                  )}
                </div>

                <h3 className="display-text text-xl leading-tight md:text-2xl text-ink-950">
                  {kind === "work" ? item.role : item.title}
                  {item.org && (
                    <>
                      {" "}
                      <span className="text-ink-400">·</span>{" "}
                      <span className="italic text-ink-700">{item.org}</span>
                    </>
                  )}
                </h3>

                {item.summary && (
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-700">
                    {item.summary}
                  </p>
                )}

                {item.tags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <motion.li
                        key={tag}
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[11px] tracking-wide text-ink-600"
                      >
                        {tag}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

function CVEmptyState({ lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: easing }}
      className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-dashed border-black/10 bg-black/[0.02] p-10"
    >
      <span className="font-mono text-[11px] tracking-ultra text-ink-500">
        {t(lang, "CV · ລໍຖ້າ", "CV · Pending")}
      </span>
      <h3 className="display-text text-3xl leading-tight md:text-4xl text-ink-950">
        {t(lang, "ພ້ອມສຳລັບ", "Ready for your")}{" "}
        <span className="italic text-ink-700">
          {t(lang, "ເລື່ອງຂອງທ່ານ.", "story.")}
        </span>
      </h3>
    </motion.div>
  );
}

