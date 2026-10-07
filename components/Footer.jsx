"use client";

import { profile } from "@/data/profile";
import { useLanguage, t } from "@/contexts/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 py-10">
      <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-black/[0.03] font-display text-sm italic text-ink-950">
            ທ
          </span>
          <p className="text-[12px] tracking-wide text-ink-600">
            © {year} {t(lang, profile.name, profile.nameEn)}.{" "}
            {t(lang, "ສະຫງວນລິຂະສິດທຸກຢ່າງ.", "All rights reserved.")}
          </p>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-ultra text-ink-500">
          <a href="#top" className="transition-colors hover:text-ink-950">
            {t(lang, "ກັບຂຶ້ນເທິງ ↑", "Back to top ↑")}
          </a>
          <span>
            {t(lang, "ສ້າງ ດ້ວຍ ໃຈ", "Built with care")} · Next.js · Cloudflare Pages
          </span>
        </div>
      </div>
    </footer>
  );
}
