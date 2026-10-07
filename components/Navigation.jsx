"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage, t } from "@/contexts/LanguageContext";

const links = (lang) => [
  { href: "#about", label: t(lang, "ກ່ຽວກັບ", "About") },
  { href: "#banners", label: t(lang, "ອອກແບບ", "Design") },
  { href: "#work", label: t(lang, "ວິດີໂອ", "Motion") },
  { href: "#websites", label: t(lang, "ເວັບໄຊ", "Digital") },
  { href: "#experience", label: t(lang, "ປະສົບການ", "Experience") },
];

export default function Navigation() {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className={`mx-auto flex max-w-[1420px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-4 ${scrolled ? "border-black/10 bg-white/85 text-black shadow-[0_12px_50px_rgba(0,0,0,.1)] backdrop-blur-2xl" : "border-white/12 bg-black/20 text-white backdrop-blur-xl"}`}>
        <motion.a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <span className={`grid h-9 w-9 place-items-center rounded-full text-sm font-black ${scrolled ? "bg-black text-white" : "bg-[#d8ff3e] text-black"}`}>TM</span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[.16em] sm:block">Thanousone<br/><span className="opacity-45">Meksithong</span></span>
        </motion.a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links(lang).map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.06, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="rounded-full px-4 py-2 text-[12px] font-medium opacity-65 transition hover:bg-current/5 hover:opacity-100"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="rounded-full border border-current/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[.16em] transition hover:bg-current/10"
            aria-label="Change language"
          >
            {lang === "lo" ? "EN" : "ລາວ"}
          </motion.button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={`hidden rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] sm:block ${scrolled ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {t(lang, "ຕິດຕໍ່", "Let's talk")} ↗
          </motion.a>
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="grid h-9 w-9 place-items-center rounded-full border border-current/15 lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="mx-auto mt-2 flex max-w-[1420px] flex-col rounded-[1.5rem] border border-black/10 bg-white p-3 text-black shadow-2xl lg:hidden"
          >
            {links(lang).map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 24 }}
                whileHover={{ x: 6 }}
                className="border-b border-black/5 px-4 py-4 text-lg font-semibold last:border-0"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
