"use client";

import { motion } from "motion/react";

const easing = [0.22, 1, 0.36, 1];

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing, delay: 0.05 } },
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  italicTail,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easing }}
        className="flex items-center gap-3"
      >
        {index && (
          <span className="font-mono text-[11px] tracking-ultra text-gold-600">
            {index}
          </span>
        )}
        <span className="h-[2px] w-16 bg-ink-950/60" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-5 inline-block"
      >
        <h2 className="display-text text-balance text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-ink-950">
          {title}
          {italicTail && (
            <>
              {" "}
              <span className="italic text-ink-700">{italicTail}</span>
            </>
          )}
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easing, delay: 0.3 }}
          style={{ originX: 0 }}
          className="absolute -bottom-4 left-0 h-1.5 w-24 bg-gold-500"
        />
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easing, delay: 0.2 }}
          className="mt-10 max-w-2xl text-balance text-base leading-relaxed text-ink-700 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
