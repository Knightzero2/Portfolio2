// ───────────────────────────────────────────────────────────────────
//  ຂໍ້ມູນ ວິດີໂອ ພອດ ຟໍ ລິ ໂອ | VIDEO PORTFOLIO DATA
//  ເພີ່ມ ຫຼື ລຶບ ລາຍ ການ ທີ່ ນີ້ — UI ຈະ ອັບ ເດດ ອັດ ຕະ ໂນ ມັດ.
// ───────────────────────────────────────────────────────────────────

export const videoCategories = [
  {
    id: "ai",
    label: "ວິດີໂອ AI",
    sublabel: "ວິດີໂອ AI ສຽງ",
    description: "ວິດີໂອ ບ່ຽງ ເນັ້ນ AI ທີ່ ຜະ ສົມ ສຽງ ສ້າງ ໃໝ່, ພາບ ແລະ ການ ເຄື່ອນ ໄຫວ.",
  },
  {
    id: "event",
    label: "ວິດີໂອ ງານ",
    sublabel: "ການ ຖ່າຍ ທອດ ສົດ",
    description: "ການ ຖ່າຍ ທອດ ງານ ໃນ ສ ະ ໜາມ ຈິງ ແລະ ການ ຕັດ ຕໍ່ ສຳ ຄັນ ແບບ ໄຊ ເນ ມາ.",
  },
];

export const videoLinks = [
  // ── ໝວດ 1: ວິດີໂອ AI ─────────────────────────────────────────────
  {
    id: "ai-01",
    category: "ai",
    title: "AI Story · 01",
    url: "https://www.facebook.com/share/v/17L6esPYFb/",
    type: "video",
  },
  {
    id: "ai-02",
    category: "ai",
    title: "AI Reel · 02",
    url: "https://www.facebook.com/share/r/18HzEBZNqW/",
    type: "reel",
  },
  {
    id: "ai-03",
    category: "ai",
    title: "AI Reel · 03",
    url: "https://www.facebook.com/share/r/1EmWzowcSJ/",
    type: "reel",
  },
  {
    id: "ai-04",
    category: "ai",
    title: "AI Reel · 04",
    url: "https://www.facebook.com/share/r/1FjowarCoP/",
    type: "reel",
  },
  {
    id: "ai-05",
    category: "ai",
    title: "AI Reel · 05",
    url: "https://www.facebook.com/share/r/18fsizeX48/",
    type: "reel",
  },
  {
    id: "ai-06",
    category: "ai",
    title: "AI Reel · 06",
    url: "https://www.facebook.com/share/r/1FG7T41Pzm/",
    type: "reel",
  },
  {
    id: "ai-07",
    category: "ai",
    title: "AI Reel · 07",
    url: "https://www.facebook.com/share/r/1Avog1NWWu/",
    type: "reel",
  },
  {
    id: "ai-08",
    category: "ai",
    title: "AI Story · 08",
    url: "https://www.facebook.com/share/v/18eohELMoP/",
    type: "video",
  },

  // ── ໝວດ 2: ວິດີໂອ ງານ ──────────────────────────────────────────
  {
    id: "ev-01",
    category: "event",
    title: "ສະ ຫຼຸບ ງານ · 01",
    url: "https://www.facebook.com/share/r/1KBAF4MTEf/",
    type: "reel",
  },
];

// ຕົວ ຊ່ວຍ: ດຶງ ວິດີໂອ ທັງ ໝົດ ໃນ ໝວດ ໃດ ໜຶ່ງ ຕາມ ລຳ ດັບ ຕົ້ນ ສາ.
export const videosByCategory = (categoryId) =>
  videoLinks.filter((v) => v.category === categoryId);
