"use client"

import * as React from "react"

export type Locale = "id" | "en"
export const LOCALES: Locale[] = ["id", "en"]
export const DEFAULT_LOCALE: Locale = "id"
const STORAGE_KEY = "bd-locale"

const id = {
  nav: { library: "Pustaka Bias" },
  hero: {
    badge: "Playground edukasi tentang cara kita berpikir",
    title: "Bias Detector",
    subtitle:
      "Ikuti tes pengambilan keputusan sederhana dan temukan bagaimana bias kognitif memengaruhi cara berpikirmu.",
    startTest: "Mulai Tes",
    randomScenario: "Skenario Acak",
    flowDecision: "Keputusan",
    flowBias: "Bias",
    flowConclusion: "Kesimpulan",
    caption:
      "Otakmu mengambil jalan pintas. Kadang membantu. Kadang menyesatkan.",
  },
  sections: {
    howTitle: "Cara kerjanya",
    howSubtitle: "Tiga langkah, sepenuhnya di browser-mu.",
    steps: [
      {
        title: "1. Baca skenario",
        body: "Kamu diberi situasi pengambilan keputusan sehari-hari.",
      },
      {
        title: "2. Pilih jawaban",
        body: "Pilih opsi yang paling menggambarkan dirimu \u2014 tanpa benar atau salah.",
      },
      {
        title: "3. Lihat analisis",
        body: "Temukan bias kognitif yang mungkin sedang bekerja dan cara menyiasatinya.",
      },
    ],
    libraryTeaserTitle: "Jelajahi pustaka bias",
    libraryTeaserBody:
      "Sepuluh bias kognitif paling umum, lengkap dengan penjelasan dan tips menghindarinya.",
    browseLibrary: "Buka Pustaka",
    dailyTitle: "Tantangan Bias Harian",
    dailyBody: "Satu skenario baru tiap hari. Tanpa akun.",
    dailyCta: "Coba tantangan hari ini",
    funFactTitle: "Tahukah kamu?",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Baca skenarionya, pilih jawabanmu, lalu lihat bias apa yang mungkin sedang bekerja.",
    progress: "Skenario",
    chooseHint: "Pilih jawaban yang paling sesuai:",
    next: "Skenario berikutnya",
    random: "Skenario acak",
    restart: "Ulang dari awal",
    detectedBias: "Bias terdeteksi",
    avoidedBias: "Bias yang berhasil kamu hindari",
    biasedNote: "Pilihanmu cenderung mengikuti pola pikir ini.",
    awareNote:
      "Bagus! Pilihanmu menghindari jebakan berpikir ini \u2014 tapi tetap waspada.",
    whyTitle: "Kenapa ini terjadi",
    exampleTitle: "Contoh dunia nyata",
    tipsTitle: "Tips menghindarinya",
    profileTitle: "Profil Bias-ku",
    profileEmpty:
      "Selesaikan beberapa skenario untuk melihat pola biasmu. Hanya pilihan yang kena bias yang dihitung.",
    profileNote: "Hanya untuk edukasi. Bukan diagnosis psikologis.",
    mostFrequent: "Bias paling sering muncul",
    times: "kali",
    share: "Bagikan",
    copyLink: "Salin tautan",
    exportPng: "Ekspor PNG",
    copied: "Disalin ke clipboard",
    linkCopied: "Tautan disalin",
    shareTitle: "Hasil Bias Detector-ku",
  },
  library: {
    title: "Pustaka Bias",
    subtitle:
      "Telusuri bias kognitif yang umum. Cari berdasarkan kata kunci seperti \"media sosial\".",
    searchPlaceholder: "Cari bias atau topik\u2026",
    noResults: "Tidak ada bias yang cocok.",
    whyTitle: "Kenapa ini terjadi",
    exampleTitle: "Contoh dunia nyata",
    tipsTitle: "Tips menghindarinya",
    close: "Tutup",
  },
  footer: {
    eduNote:
      "Bias kognitif adalah jalan pintas mental yang wajar. Semua orang mengalaminya. Alat ini bersifat edukatif, bukan penilaian psikologis.",
  },
}

export type Dict = typeof id

const en: Dict = {
  nav: { library: "Bias Library" },
  hero: {
    badge: "An educational playground for how we think",
    title: "Bias Detector",
    subtitle:
      "Take simple decision-making tests and discover how cognitive biases influence your thinking.",
    startTest: "Start Test",
    randomScenario: "Random Scenario",
    flowDecision: "Decision",
    flowBias: "Bias",
    flowConclusion: "Conclusion",
    caption:
      "Your brain takes shortcuts. Sometimes they help. Sometimes they mislead.",
  },
  sections: {
    howTitle: "How it works",
    howSubtitle: "Three steps, entirely in your browser.",
    steps: [
      {
        title: "1. Read a scenario",
        body: "You're given an everyday decision-making situation.",
      },
      {
        title: "2. Pick an answer",
        body: "Choose the option that best describes you \u2014 no right or wrong.",
      },
      {
        title: "3. See the analysis",
        body: "Discover the cognitive bias that may be at play and how to counter it.",
      },
    ],
    libraryTeaserTitle: "Explore the bias library",
    libraryTeaserBody:
      "The ten most common cognitive biases, each with an explanation and tips to avoid it.",
    browseLibrary: "Open the Library",
    dailyTitle: "Daily Bias Challenge",
    dailyBody: "A new scenario every day. No account required.",
    dailyCta: "Try today's challenge",
    funFactTitle: "Did you know?",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Read the scenario, pick your answer, then see which bias might be at play.",
    progress: "Scenario",
    chooseHint: "Pick the answer that fits you best:",
    next: "Next scenario",
    random: "Random scenario",
    restart: "Start over",
    detectedBias: "Detected bias",
    avoidedBias: "Bias you avoided",
    biasedNote: "Your choice tends to follow this thinking pattern.",
    awareNote:
      "Nice! Your choice avoided this thinking trap \u2014 but stay alert.",
    whyTitle: "Why it happens",
    exampleTitle: "Real-world example",
    tipsTitle: "Tips to avoid it",
    profileTitle: "My Bias Profile",
    profileEmpty:
      "Complete a few scenarios to see your bias patterns. Only bias-prone choices are counted.",
    profileNote: "Educational only. Not a psychological diagnosis.",
    mostFrequent: "Most frequent biases",
    times: "times",
    share: "Share",
    copyLink: "Copy link",
    exportPng: "Export PNG",
    copied: "Copied to clipboard",
    linkCopied: "Link copied",
    shareTitle: "My Bias Detector result",
  },
  library: {
    title: "Bias Library",
    subtitle:
      "Browse common cognitive biases. Search by a keyword like \"social media\".",
    searchPlaceholder: "Search a bias or topic\u2026",
    noResults: "No biases match your search.",
    whyTitle: "Why it happens",
    exampleTitle: "Real-world example",
    tipsTitle: "Tips to avoid it",
    close: "Close",
  },
  footer: {
    eduNote:
      "Cognitive biases are normal mental shortcuts. Everyone experiences them. This tool is educational and not a psychological assessment.",
  },
}

const DICTS: Record<Locale, Dict> = { id, en }

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored && LOCALES.includes(stored)) {
        setLocaleState(stored)
        document.documentElement.lang = stored
      }
    } catch {
      /* ignore */
    }
  }, [])

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: DICTS[locale] }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return ctx
}
