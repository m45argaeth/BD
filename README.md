<div align="center">

# 🧠 Bias Detector (BD)

### *Discover the hidden shortcuts your brain uses.*
### *Kenali jalan pintas tersembunyi yang dipakai otakmu.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)](https://bd-playground-snowy.vercel.app)

**[🚀 Live Demo](https://bd-playground-snowy.vercel.app)**

</div>

---

## 📖 Overview

**Bias Detector** is an educational playground that helps you identify cognitive biases through interactive scenarios, a searchable bias library, and a daily challenge.

**Bias Detector** adalah playground edukatif yang membantumu mengenali bias kognitif melalui skenario interaktif, perpustakaan bias yang bisa dicari, dan tantangan harian.

## ✨ Features

- 🎯 **Interactive Scenarios** — Encounter real-world situations and discover which biases are at play
- 📚 **Bias Library** — Searchable catalog of cognitive biases with clear explanations
- 🏆 **Daily Challenge** — A new bias puzzle every day to sharpen your awareness
- 🌓 **Dark / Light Theme** — Easy on the eyes, any time of day
- 🌍 **Bilingual UI** — Full Indonesian & English support (custom i18n)
- 📱 **Responsive** — Works seamlessly on desktop and mobile
- 🔗 **Share** — Share your results with friends
- 🔒 **100% Client-Side** — No data leaves your browser

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui-style |
| Theming | next-themes |
| Icons | lucide-react |
| Notifications | sonner |
| Internationalization | Custom i18n (id/en) |
| Deployment | Vercel |

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── library/
│   │   └── page.tsx
│   └── playground/
│       └── page.tsx
├── components/
│   ├── bias-library.tsx
│   ├── bias-quiz.tsx
│   ├── landing.tsx
│   ├── language-toggle.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/               # shadcn/ui-style components
└── lib/
    ├── bias-profile.ts
    ├── daily.ts
    ├── data/
    │   ├── biases.ts
    │   ├── fun-facts.ts
    │   └── scenarios.ts
    ├── i18n.tsx
    ├── share.ts
    ├── site-config.ts
    └── utils.ts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [pnpm](https://pnpm.io), [npm](https://www.npmjs.com), or [yarn](https://yarnpkg.com)

### Development

```bash
git clone https://github.com/m45argaeth/BD.git
cd BD
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

Push to GitHub and import the repo on [vercel.com](https://vercel.com), or:

```bash
npx vercel
```

---

## 🧭 Part of *Curious About Everything*

BD is part of the **Curious About Everything** educational series:

| Project | Description |
|---|---|
| **EBN** | Explore By Numbers |
| **TE** | Text Explorer |
| **TtB** | Text to Bits |
| **BD** | Bias Detector ← you are here |
| **VFE** | [Video Frame Explorer](https://github.com/m45argaeth/VFE) |

---

<div align="center">

**Made with ❤️ by [m45argaeth](https://github.com/m45argaeth)**

🔒 Your data stays on your device. No uploads, no tracking.

</div>
