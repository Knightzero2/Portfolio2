"use client";

import { motion } from "motion/react";
import { ExternalLink, Layout } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { websites } from "@/data/websites";
import { useLanguage, t } from "@/contexts/LanguageContext";

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easing } },
};

export default function WebsiteSection() {
  const { lang } = useLanguage();

  return (
    <section id="websites" className="relative border-t border-black/5 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(196,164,92,0.03),transparent)]"
      />

      <div className="container-wide">
        <SectionHeading
          index="05"
          eyebrow="ຜົນງານເວັບໄຊ"
          title="ສ້າງປະສົບການ"
          italicTail="ດິຈິຕອນ."
          description="ເວັບໄຊທີ່ຖືກອອກແບບມາເພື່ອຄວາມສວຍງາມ ແລະ ປະສິດທິພາບໃນການໃຊ້ງານ."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {websites.map((site) => (
            <motion.a
              key={site.id}
              variants={cardVariants}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:border-black/20 hover:shadow-xl hover:shadow-black/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display-text text-2xl text-ink-950 line-clamp-1">{site.title}</h3>
                    <motion.span
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="grid h-8 w-8 flex-none place-items-center rounded-full border border-black/10 text-ink-950 transition-colors group-hover:bg-ink-950 group-hover:text-white"
                    >
                      <ExternalLink size={14} />
                    </motion.span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-600 line-clamp-2">
                    {lang === "lo" ? site.descriptionLo : site.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {site.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-ultra text-ink-700"
                    >
                      <Layout size={9} />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
