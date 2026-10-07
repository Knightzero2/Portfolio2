# Thanousone Meksithong — Portfolio

A premium, production-ready portfolio for **Thanousone Meksithong** (Creative Designer · Video Editor) built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion** — designed for seamless **GitHub + Cloudflare Pages** continuous deployment.

---

## Tech stack

- **Next.js 14** — App Router, static export (`output: "export"`)
- **Tailwind CSS** — design system with custom tokens (`ink`, `bone`, `gold`)
- **Framer Motion** — page-level cinematic animations
- **Lucide Icons** — icon system
- **Google Fonts** (`Inter`, `Fraunces`) — modern + editorial pairing
- Fully responsive, dark-mode by default, SEO-optimized

---

## Folder structure

```
portfolio/
├── app/
│   ├── globals.css        # Design tokens, utilities, scrollbar
│   ├── layout.jsx         # Root layout, metadata, fonts
│   └── page.jsx           # Composes all sections
├── components/
│   ├── Navigation.jsx     # Sticky nav + mobile drawer
│   ├── Hero.jsx           # Fullscreen cinematic intro
│   ├── About.jsx          # Pillars + stats + skills
│   ├── VideoSection.jsx   # AI Videos + Event tabs, card grid
│   ├── BannerGallery.jsx  # Masonry + lightbox
│   ├── Experience.jsx     # CV timeline (data-driven)
│   ├── Contact.jsx        # CTA card + meta
│   ├── Footer.jsx
│   └── SectionHeading.jsx # Shared heading primitive
├── data/
│   ├── videoLinks.js      # Video URLs by category
│   ├── banners.js         # Banner image manifest
│   └── profile.js         # Bio, CV, skills, stats
├── public/
│   └── banners/           # 28 banner images
├── next.config.js         # output: "export" for Cloudflare Pages
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json          # @/ path aliases
├── package.json
├── .gitignore
└── README.md
```

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production (static export to /out)
npm run build
```

After `npm run build`, a fully static site lives in **`/out/`** — deploy that anywhere.

---

## Updating content

All content is data-driven. **No component code edits needed for normal updates.**

| Change | File |
|---|---|
| Name, tagline, location, socials | `data/profile.js` → `profile` |
| About copy & three pillars | `data/profile.js` → `about` |
| Stats (years, projects…) | `data/profile.js` → `stats` |
| Software / craft / languages | `data/profile.js` → `skills` |
| **CV / experience timeline** | `data/profile.js` → `experience` |
| Education timeline | `data/profile.js` → `education` |
| Add / remove videos | `data/videoLinks.js` |
| Add a new video category | `data/videoLinks.js` → `videoCategories` |
| Add / remove banners | `data/banners.js` (drop image into `public/banners/`) |

> All data files are plain JS — easy to swap for a fetch from any headless CMS later (Sanity, Contentful, Notion, Strapi…) without changing the components.

---

## Git: push to GitHub

### Install GitHub CLI on Windows

```powershell
winget install --id GitHub.cli
```

After installation, authenticate with GitHub:

```powershell
gh auth login
```

From inside the `portfolio/` directory:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

Replace `USERNAME` with your GitHub username (and `portfolio` with your repo name if different).

---

## Deploy to Cloudflare Pages

This project is pre-configured for Cloudflare Pages with **static export** (`output: "export"` in `next.config.js`) — no server runtime required, no Edge Functions, no Workers config.

### One-time setup

1. **Push the project to GitHub** (see above).
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. In the left nav, click **Workers & Pages** → **Create application** → **Pages** tab.
4. Click **Connect to Git** and authorize GitHub.
5. Select your `portfolio` repository.
6. **Configure the build:**

   | Setting | Value |
   |---|---|
   | Project name | `thanousone-portfolio` (or any) |
   | Production branch | `main` |
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | *(leave empty, or `/` )* |
   | Node.js version (env var) | `NODE_VERSION = 20` |

7. Click **Save and Deploy**.

Cloudflare will install dependencies, run `npm run build`, and publish `/out/` to the global edge — usually ready in 60–120 seconds.

> ⚠️ **Important:** The framework preset must be **Next.js (Static HTML Export)**, *not* "Next.js" — the latter expects a server runtime. The output directory is **`out`** (created by `next build` when `output: "export"` is set), not `.next`.

### Custom domain

In the Pages project → **Custom domains** → **Set up a domain** → enter your domain. Cloudflare handles DNS + SSL automatically if the domain is on Cloudflare.

---

## Auto-update (CI/CD)

Cloudflare Pages watches your GitHub repo. **Every push to `main` triggers an automatic redeploy** — no manual step. Pull request branches get unique preview URLs as well.

The typical workflow:

```bash
# edit files...
git add .
git commit -m "Update portfolio"
git push
# → Cloudflare rebuilds + deploys automatically
```

---

## Performance & polish

- All banner images use native `loading="lazy"` + `decoding="async"`
- Static export → first paint served from Cloudflare's edge in <100ms globally
- No client-side JS for images (no Next/Image runtime overhead on Cloudflare)
- Animations respect `prefers-reduced-motion`
- Custom scrollbar, selection color, and grain overlay
- Open Graph + Twitter Card meta out of the box

---

## License

© Thanousone Meksithong. All rights reserved.
