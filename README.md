# 🧠 Bias Detector (BD)

> **Discover the hidden shortcuts your brain uses.**
> **Kenali jalan pintas tersembunyi yang dipakai otakmu.**

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)

🔗 **Live → [bd-playground-snowy.vercel.app](https://bd-playground-snowy.vercel.app)**

</div>

---

## 🌐 Overview

**Bias Detector** is an educational playground that helps you discover and understand cognitive biases through interactive scenarios, a searchable bias library, and a daily challenge. Test yourself against 20 real-world decision-making scenarios and find out which mental shortcuts your brain relies on.

No server. No uploads. 100% client-side.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Interactive Scenarios** | 20 real-world decision-making scenarios covering 10 cognitive biases (2 per bias) — pick your answer, see which bias is at play |
| 📚 **Bias Library** | Searchable catalog of 10 cognitive biases with name, description, "why it happens", real-world example, and tips to avoid |
| 🏆 **Daily Challenge** | Deterministic daily scenario (cycles through all scenarios based on calendar day — no repeats) |
| 📊 **Bias Profile** | localStorage-tracked profile showing which biases you fall for most, with bar chart visualization |
| 🧠 **10 Biases Covered** | Confirmation, Anchoring, Survivorship, Availability Heuristic, Halo Effect, Bandwagon, Loss Aversion, Framing, Dunning-Kruger, Sunk Cost |
| 📤 **Share & Export** | Web Share API, clipboard copy, and Canvas-based PNG export (1200×630 social-image style) |
| 💡 **Fun Facts** | Curated facts about cognitive biases |
| 🌗 **Dark / Light Theme** | Toggle between themes with system preference support |
| 🌏 **Bahasa Indonesia / English** | Full bilingual UI with seamless language switching |
| 📱 **Responsive** | Works on desktop and mobile |
| 🔒 **Privacy-First** | Everything runs in your browser — no data leaves your device |

---

## 🧠 Biases Covered

| Bias | What It Is |
|---|---|
| 🔍 **Confirmation Bias** | Favoring info that confirms existing beliefs |
| ⚓ **Anchoring Bias** | Over-relying on the first piece of information |
| 🏆 **Survivorship Bias** | Focusing on successes while ignoring failures |
| 📢 **Availability Heuristic** | Judging likelihood by how easily examples come to mind |
| ✨ **Halo Effect** | Letting one positive trait influence overall judgment |
| 🐑 **Bandwagon Effect** | Doing something because many others do it |
| 💔 **Loss Aversion** | Fearing losses more than valuing equivalent gains |
| 🖼️ **Framing Effect** | Being influenced by how information is presented |
| 📉 **Dunning-Kruger Effect** | Overestimating ability in areas of low competence |
| 💰 **Sunk Cost Fallacy** | Continuing something because of past investment |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) + tailwindcss-animate |
| Components | [shadcn/ui](https://ui.shadcn.com/) (new-york style) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Notifications | [sonner](https://sonner.emilkowal.dev/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | Inter (sans) + JetBrains Mono (mono) via next/font |
| i18n | Custom React Context (Bahasa Indonesia / English) |
| Utilities | clsx, tailwind-merge, class-variance-authority |

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css                    # Global styles & CSS variables
│   ├── layout.tsx                     # Root layout (fonts, providers, header/footer)
│   ├── page.tsx                       # Landing page
│   ├── playground/
│   │   └── page.tsx                   # Interactive quiz page
│   └── library/
│       └── page.tsx                   # Searchable bias catalog
├── components/
│   ├── landing.tsx                    # Hero, how-it-works, library teaser, daily challenge, fun facts
│   ├── bias-quiz.tsx                  # Core quiz: scenarios, options, bias detection, profile chart, share/export
│   ├── bias-library.tsx               # Searchable grid of biases with expandable detail card
│   ├── site-header.tsx / site-footer.tsx
│   ├── language-toggle.tsx / theme-toggle.tsx
│   └── ui/ (badge, button, card, input, separator, sonner)
├── lib/
│   ├── data/
│   │   ├── biases.ts                  # 10 cognitive biases (bilingual: id/en)
│   │   ├── scenarios.ts               # 20 interactive scenarios (bilingual)
│   │   └── fun-facts.ts               # Bilingual fun facts
│   ├── bias-profile.ts                # localStorage CRUD for bias tracking
│   ├── daily.ts                       # Deterministic daily scenario selection
│   ├── i18n.tsx                       # Bilingual i18n system (id/en)
│   ├── site-config.ts                 # Site data, projects, universes
│   ├── share.ts                       # Copy + Canvas PNG export
│   └── utils.ts                       # cn() utility
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm, yarn, pnpm, or bun

### Development

```bash
# Clone the repo
git clone https://github.com/m45argaeth/BD.git
cd BD

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m45argaeth/BD)

> 🚀 Deployed automatically to [Vercel](https://vercel.com/) on every push to `main`.

---

## 🔒 Privacy

**Everything runs in your browser.** No data is sent to any server. Your bias profile is stored only in localStorage on your device — you can clear it anytime. The PNG export is pure canvas rendering, no external services.

---

## 🧩 Part of the "Sini Gajelasin" Series

BD is one of many educational playgrounds under the **[Sini Gajelasin](https://sinigajelasin.vercel.app)** hub — *Curious About Everything*.

### 🪐 EBN Universe — How Computers Process Data

| # | Playground | Topic | Status | Link |
|---|---|---|---|---|
| 1 | 🔢 **EBN** | Media → Numbers | 🟢 Live | [ebn-playground.vercel.app](https://ebn-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/EBN) |
| 2 | 🔤 **TtB** | Text → Binary | 🟢 Live | [ttb-playground.vercel.app](https://ttb-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/TtB) |
| 3 | 🔡 **Token Explorer** | Text → Tokens | 🟢 Live | [te-playground.vercel.app](https://te-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/TE) |
| 4 | 🎬 **Video Frame Explorer** | Video → Frames | 🟢 Live | [vfe-playground.vercel.app](https://vfe-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/VFE) |
| 5 | 🧠 **Embedding Explorer** | Words → Vectors | 🟡 WIP | — |
| 6 | 💬 **Prompt Explorer** | Prompt → Tokens → Output | 🟡 WIP | — |
| 7 | 🤥 **Hallucination Explorer** | LLM Hallucination | 🟡 WIP | — |
| 8 | 📦 **Compression Explorer** | Data → Compression | 🟡 WIP | — |
| 9 | 🌐 **Internet Packet Explorer** | Data → Packets | 🟡 WIP | — |
| 10 | 🤖 **Human vs AI Explorer** | Human vs AI Processing | 🟡 WIP | — |

### 🧬 Human Mind Universe — How We Think

| # | Playground | Topic | Status | Link |
|---|---|---|---|---|
| 11 | 🔍 **Bias Detector** | Cognitive Biases | 🟢 Live | [bd-playground-snowy.vercel.app](https://bd-playground-snowy.vercel.app) · [GitHub](https://github.com/m45argaeth/BD) |
| 12 | 🧠 **Memory Explorer** | Memory Systems | 🟡 WIP | — |
| 13 | 🌀 **False Memory Explorer** | False Memories | 🟡 WIP | — |
| 14 | 👁️ **Attention Explorer** | Attention & Focus | 🟡 WIP | — |
| 15 | 💊 **Dopamine Explorer** | Dopamine Loops | 🟡 WIP | — |

---

## 👤 Author

**Arga** — [GitHub](https://github.com/m45argaeth) · [Twitter/X](https://x.com/sinigajelasin) · [Blog](https://www.kompasiana.com/argacahyanugraha6628)

Made with ❤️ as part of **[Sini Gajelasin](https://sinigajelasin.vercel.app)** — *Curious About Everything* 🔍
