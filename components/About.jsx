"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { about, stats, skills, softSkills, marketingSkills } from "@/data/profile";
import { ExternalLink, Sparkles } from "lucide-react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export default function About() {
  const { lang } = useLanguage();

  return (
    <section
      className="relative border-t border-black/5 py-28 md:py-40"
    >
      <div className="container-wide">
        <SectionHeading
          index="01"
          eyebrow={t(lang, "àºà»ˆàº½àº§àºàº±àºš", "About")}
          title={t(lang, "àº­àº­àº à»àºšàºš àºžàº²àºš àº—àºµà»ˆ", "Designing motion that")}
          italicTail={t(lang, "àº®àº¹à»‰àºªàº¶àº àº„àº·àº„àº»àº™.", "feels human.")}
          description={t(lang, about.intro,
            "Creative digital marketer and content strategist with 5+ years of combined experience in marketing, web development, and content creation. Skilled at managing social media, building engaging campaigns, and executing SEO strategies â€” with a strong IT and UX/UI background."
          )}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 md:grid-cols-3"
        >
          {about.pillars.map((p, i) => {
            const titles = ["Story First", "Marketing Native", "Tech-Backed"];
            const bodies = [
              "Every cut, every frame, every banner is shaped by the story it carries.",
              "SEO, paid social and analytics built into the craft â€” visuals that perform, not just decorate.",
              "Years in front-end and full-stack web â€” modular systems that scale with the brand.",
            ];
            return (
              <motion.div
                key={p.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="group relative bg-white p-8 transition-colors hover:bg-white/80 md:p-10"
              >
                <span className="font-mono text-[11px] tracking-ultra text-ink-400">
                  0{i + 1}
                </span>
                <h3 className="display-text mt-6 text-2xl leading-tight md:text-3xl text-ink-950">
                  {t(lang, p.title, titles[i])}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-600">
                  {t(lang, p.body, bodies[i])}
                </p>
                <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:inset-x-10" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 md:grid-cols-4"
        >
          {stats.map((s, i) => {
            const labelsEn = [
              "Years Combined Experience",
              "Active Roles",
              "Disciplines Mastered",
              "Frames Edited",
            ];
            return (
              <motion.div
                key={s.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                className="bg-white px-6 py-10 text-center md:py-12"
              >
                <p className="display-text text-4xl text-ink-950 md:text-5xl">
                  {s.value}
                </p>
                <p className="eyebrow mt-3">
                  {t(lang, s.label, labelsEn[i])}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill stacks */}
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <SkillColumn
            title={t(lang, "àºŠàº­àºŸ à»àº§ & à»€àº„àº·à»ˆàº­àº‡ àº¡àº·", "Software & Tools")}
            items={skills.software}
          />
          <SkillColumn
            title={t(lang, "àº—àº±àº àºªàº° àºªà»‰àº²àº‡ àºªàº±àº™", "Craft")}
            items={skills.craft}
          />
          <LanguageColumn
            title={t(lang, "àºžàº² àºªàº²", "Languages")}
            items={skills.languages}
            lang={lang}
          />
        </div>

        {/* Marketing & Growth Skills */}
        {marketingSkills?.categories?.length > 0 && (
          <div className="mt-24">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-12 bg-black/40" />
                  <p className="eyebrow inline-flex items-center gap-2">
                    <Sparkles size={11} className="text-gold-600" />
                    {t(lang, "àº—àº±àºàºªàº°àºàº²àº™àº•àº°àº«àº¼àº²àº” à»àº¥àº° àºàº²àº™àº‚àº°àº«àºàº²àºàº•àº»àº§", "Marketing & Growth Skills")}
                  </p>
                </div>
                <h3 className="display-text mt-5 max-w-2xl text-3xl leading-tight text-ink-950 md:text-4xl">
                  {t(
                    lang,
                    "CRO Â· àºàº²àº™àº‚àº½àº™ Â· SEO Â· àºàº²àº™àº§àº´à»€àº„àº²àº° Â· àºàº²àº™àº‚àº°àº«àºàº²àºàº•àº»àº§.",
                    "CRO Â· Copywriting Â· SEO Â· Analytics Â· Growth."
                  )}
                </h3>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-600">
                  {t(
                    lang,
                    "àºàº­àºšàº—àº±àºàºªàº°àºàº²àº™àº•àº°àº«àº¼àº²àº”àº—àºµà»ˆàºªà»‰àº²àº‡àº¡àº²àºªàº³àº¥àº±àºš AI Agent â€” 40 àº„àº§àº²àº¡àºªàº²àº¡àº²àº”à»ƒàº™ 5 à»àº§àº”àº—àºµà»ˆàº™àº³à»ƒàºŠà»‰à»ƒàº™àº§àº½àºàºˆàº´àº‡.",
                    "An open-source marketing skills framework built for AI agents â€” 40 capabilities across 5 disciplines, applied in real campaigns."
                  )}
                </p>
              </div>
              <motion.a
                href={marketingSkills.source.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group inline-flex flex-none items-center gap-2 self-start rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-ultra text-ink-700 transition-all hover:border-gold-500/40 hover:bg-gold-500/5 hover:text-ink-950"
              >
                {t(lang, marketingSkills.source.labelLo, marketingSkills.source.label)}
                <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {marketingSkills.categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white p-6 transition-all hover:border-gold-500/30 hover:shadow-[0_30px_80px_-40px_rgba(196,164,92,0.35)] md:p-7"
                >
                  {/* corner accent */}
                  <span
                    aria-hidden
                    className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gold-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-ultra text-gold-600">
                      0{i + 1} Â· {cat.tag}
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-ink-500">
                      {cat.items.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="display-text relative mt-4 text-xl leading-tight text-ink-950 md:text-2xl">
                    {t(lang, cat.titleLo, cat.titleEn)}
                  </h4>
                  <ul className="relative mt-5 flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-black/8 bg-black/[0.02] px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-700 transition-colors group-hover:border-black/15"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Soft skills */}
        {softSkills?.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-black/40" />
              <p className="eyebrow">{t(lang, "àº—àº±àºàºªàº°àº­à»ˆàº­àº™", "Soft Skills")}</p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {softSkills.map((s, i) => {
                const titlesEn = [
                  "Communication", "Collaboration", "Adaptability",
                  "Problem-solving", "Creativity", "Time Management",
                  "Leadership", "Emotional Intelligence", "Critical Thinking", "Resilience",
                ];
                const bodiesEn = [
                  "Expressing ideas clearly, listening attentively, and fostering understanding.",
                  "Working effectively with others, contributing ideas, and achieving shared goals.",
                  "Embracing change, adjusting to new situations, and learning from experiences.",
                  "Analyzing issues, identifying solutions, and making sound decisions.",
                  "Thinking innovatively, generating new ideas, and finding unique solutions.",
                  "Organizing tasks efficiently, prioritizing responsibilities, and meeting deadlines.",
                  "Inspiring and motivating others, guiding teams, and facilitating success.",
                  "Understanding and managing emotions, empathizing with others, and building relationships.",
                  "Evaluating information, reasoning logically, and making informed judgments.",
                  "Bouncing back from setbacks, staying motivated, and maintaining a positive attitude.",
                ];
                return (
                  <motion.div
                    key={s.title}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                    className="group rounded-xl border border-black/5 bg-black/[0.02] p-5 transition-all hover:border-black/15 hover:bg-black/[0.04]"
                  >
                    <p className="display-text text-lg leading-tight text-ink-950">
                      {t(lang, s.title, titlesEn[i] || s.title)}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                      {t(lang, s.body, bodiesEn[i] || s.body)}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* Floating Robot Flower Artwork on Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mt-16 flex justify-end"
        >
          <Image
            src="/about-robot-art.png"
            alt="Robot holding flowers artwork"
            width={560}
            height={560}
            className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] object-cover drop-shadow-[0_28px_44px_rgba(7,31,84,0.18)] pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[15px] text-ink-900">
            <span className="h-px w-4 bg-black/20" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LanguageColumn({ title, items, lang }) {
  const levelMap = { "àºžàº²àºªàº²à»àº¡à»ˆ": "Native", "àºžàº²àºªàº²àº—àºµàºªàº­àº‡": "Second Language" };
  const nameMap = { "àºžàº²àºªàº²àº¥àº²àº§": "Lao", "àºžàº²àºªàº²àº­àº±àº‡àºàº´àº”": "English" };
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-4">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`h-px w-4 ${i === 0 ? "bg-black/60" : "bg-black/20"}`} />
              <span className="text-[15px] text-ink-900">
                {t(lang, item.name, nameMap[item.name] || item.name)}
                {i === 0 && (
                  <span className="ml-2 rounded-full border border-black/10 bg-black/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-ultra text-ink-600">
                    {t(lang, "àº«àº¼àº±àº", "Main")}
                  </span>
                )}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-ultra text-ink-500">
              {t(lang, item.level, levelMap[item.level] || item.level)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}



