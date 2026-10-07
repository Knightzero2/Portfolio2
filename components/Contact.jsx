"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-t border-black/5 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_60%)]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-black/5 blur-[140px]"
      />

      <div className="container-wide">
        <SectionHeading
          index="05"
          eyebrow={t(lang, "ຕິດຕໍ່", "Get in touch")}
          title={t(lang, "ມາສ້າງ", "Let's craft")}
          italicTail={t(lang, "ສິ່ງທີ່ຫາຍາກ.", "something rare.")}
          description={t(
            lang,
            "ພ້ອມຮັບງານຕັດຕໍ່ວິດີໂອ, ໂປຣເຈັກ Motion ແລະ ງານສ້າງພາບຍີ່ຫໍ້. ບອກເລື່ອງຂອງທ່ານ — ຂ້ອຍຈະເອົາມັນມາສູ່ຊີວິດ.",
            "Available for select video edits, motion projects and brand visual work. Tell me about your story — I'll bring it to life."
          )}
          align="center"
        />

        <motion.a
          href={profile.email ? `mailto:${profile.email}` : "#"}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: easing }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          style={{ originX: 0.5, originY: 0.5 }}
          className="group mx-auto mt-16 flex w-full max-w-3xl items-center justify-between gap-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition-all hover:border-black/20 hover:bg-black/[0.04] md:p-8"
        >
          <div className="min-w-0">
            <p className="eyebrow">{t(lang, "ອີເມລ", "Email")}</p>
            <p className="display-text mt-2 truncate text-2xl md:text-4xl text-ink-950">
              {profile.email || "hello@thanousone.com"}
            </p>
          </div>
          <motion.span
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="grid h-12 w-12 flex-none place-items-center rounded-full border border-black/10 bg-black/5 text-ink-950 transition-all group-hover:border-black/30 group-hover:bg-black/10 group-hover:text-ink-950 md:h-14 md:w-14"
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </motion.a>

        {/* Meta row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          <motion.div variants={itemVariants}>
            <Meta
              icon={<Mail size={14} />}
              label={t(lang, "ອີເມລ", "Email")}
              value={profile.email || t(lang, "ຍັງບໍ່ທັນມີ", "Coming soon")}
              href={profile.email ? `mailto:${profile.email}` : null}
            />
          </motion.div>
          {(profile.phones || []).map((p, i) => (
            <motion.div key={p} variants={itemVariants}>
              <Meta
                icon={<Phone size={14} />}
                label={
                  i === 0
                    ? t(lang, "ເບີໂທຫຼັກ", "Phone — Primary")
                    : t(lang, "ເບີໂທສຳຮອງ", "Phone — Secondary")
                }
                value={p}
                href={`tel:${p.replace(/\s/g, "")}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {profile.socials?.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mx-auto mt-12 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3"
          >
            {profile.socials.map((s) => (
              <motion.a
                key={s.url}
                variants={itemVariants}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="rounded-full border border-black/10 bg-black/[0.02] px-5 py-2.5 text-[13px] font-medium tracking-wide text-ink-950 transition-all hover:border-black/20 hover:bg-black/5"
              >
                {s.label} ↗
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Meta({ icon, label, value, href }) {
  const Tag = href ? motion.a : motion.div;
  const props = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
        whileHover: { scale: 1.03, x: 2 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }
    : {};
  return (
    <Tag
      {...props}
      className={`flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3 transition-all ${
        href ? "hover:border-black/15 hover:bg-black/[0.04]" : ""
      }`}
    >
      <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-black/10 bg-black/5 text-ink-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-ultra text-ink-500">{label}</p>
        <p className="truncate text-[13px] font-medium text-ink-950">{value}</p>
      </div>
    </Tag>
  );
}
