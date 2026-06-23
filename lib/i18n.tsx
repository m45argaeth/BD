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
    whyTitle: "Kenapa ini terjadi",
    exampleTitle: "Contoh dunia nyata",
    tipsTitle: "Tips menghindarinya",
    profileTitle: "Profil Bias-ku",
    profileEmpty: "Selesaikan beberapa skenario untuk melihat pola biasmu.",
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
      "Your brain takes shortcuts. S