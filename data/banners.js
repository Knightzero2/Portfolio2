// ───────────────────────────────────────────────────────────────────
//  BANNER GALLERY DATA
//  Files live in /public/banners/ and are referenced by URL path.
//  Adding a new image: drop it into /public/banners/ and add an entry.
// ───────────────────────────────────────────────────────────────────

const make = (file, title, tag = "Banner") => ({
  src: `/banners/${file}`,
  title,
  tag,
});

export const banners = [
  make("multibanner1.png", "Campaign Set · 01", "Multi-banner"),
  make("multibanner2.png", "Campaign Set · 02", "Multi-banner"),
  make("multibanner3.png", "Campaign Set · 03", "Multi-banner"),
  make("multibanner4.png", "Campaign Set · 04", "Multi-banner"),
  make("multibanner5.png", "Campaign Set · 05", "Multi-banner"),
  make("multibanner6.png", "Campaign Set · 06", "Multi-banner"),
  make("multibanner7.png", "Campaign Set · 07", "Multi-banner"),
  make("multibanner8.png", "Campaign Set · 08", "Multi-banner"),
  make("1.jpg", "Banner · 01"),
  make("2.jpg", "Banner · 02"),
  make("3.jpg", "Banner · 03"),
  make("4.jpg", "Banner · 04"),
  make("5.jpg", "Banner · 05"),
  make("6.jpg", "Banner · 06"),
  make("7.jpg", "Banner · 07"),
  make("8.jpg", "Banner · 08"),
  make("9.jpg", "Banner · 09"),
  make("10.jpg", "Banner · 10"),
  make("11.jpg", "Banner · 11"),
  make("12.jpg", "Banner · 12"),
  make("13.jpg", "Banner · 13"),
  make("14.jpg", "Banner · 14"),
  make("15.jpg", "Banner · 15"),
  make("16.jpg", "Banner · 16"),
  make("17.jpg", "Banner · 17"),
  make("18.jpg", "Banner · 18"),
  make("19.jpg", "Banner · 19"),
  make("20.jpg", "Banner · 20"),
  make("21.png", "Banner · 21"),
  make("22.png", "Banner · 22"),
  make("23.png", "Banner · 23"),
  make("24.png", "Banner · 24"),
  make("25.png", "Banner · 25"),
  make("26.png", "Banner · 26"),
  make("27.png", "Banner · 27"),
  make("28.png", "Banner · 28"),
  make("29.png", "Banner · 29"),
  make("30.png", "Banner · 30"),
];
