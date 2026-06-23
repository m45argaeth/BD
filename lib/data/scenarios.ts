import type { Localized } from "@/lib/data/biases"

export interface ScenarioOption {
  id: string
  label: Localized
}

export interface Scenario {
  id: string
  biasSlug: string
  prompt: Localized
  options: ScenarioOption[]
  analysis: Localized
}

export const SCENARIOS: Scenario[] = [
  {
    id: "jacket-discount",
    biasSlug: "anchoring-bias",
    prompt: {
      id: "Sebuah jaket awalnya seharga Rp3.000.000. Hari ini didiskon menjadi Rp1.500.000. Apakah menurutmu ini penawaran bagus?",
      en: "A jacket originally costs $300. Today it is discounted to $150. Would you consider it a good deal?",
    },
    options: [
      {
        id: "yes",
        label: { id: "Ya, hematnya besar", en: "Yes, big savings" },
      },
      {
        id: "depends",
        label: {
          id: "Tergantung harga wajar jaketnya",
          en: "It depends on the jacket's fair price",
        },
      },
    ],
    analysis: {
      id: "Banyak orang langsung terpaku pada harga awal Rp3 juta sebagai acuan. Inilah Bias Penjangkaran (Anchoring).",
      en: "Many people fixate on the original $300 as a reference point. This is Anchoring Bias.",
    },
  },
  {
    id: "diet-articles",
    biasSlug: "confirmation-bias",
    prompt: {
      id: "Kamu sangat yakin sebuah pola diet berhasil. Kamu lebih memilih membaca yang mana?",
      en: "You strongly believe a certain diet works. Which would you rather read?",
    },
    options: [
      {
        id: "support",
        label: { id: "Artikel yang mendukungnya", en: "Articles supporting it" },
      },
      {
        id: "critique",
        label: { id: "Artikel yang mengkritiknya", en: "Articles criticizing it" },
      },
    ],
    analysis: {
      id: "Lebih memilih bukti yang mendukung keyakinan bisa menandakan Bias Konfirmasi.",
      en: "Preferring evidence that supports your belief may indicate Confirmation Bias.",
    },
  },
  {
    id: "plane-vs-car",
    biasSlug: "availability-heuristic",
    prompt: {
      id: "Setelah melihat beberapa berita kecelakaan pesawat di internet, mana yang menurutmu lebih berisiko?",
      en: "After seeing several plane crash stories online, which do you think is riskier?",
    },
    options: [
      {
        id: "flying",
        label: { id: "Naik pesawat", en: "Flying" },
      },
      {
        id: "driving",
        label: { id: "Berkendara mobil", en: "Driving a car" },
      },
    ],
    analysis: {
      id: "Peristiwa dramatis yang baru terlihat sering mengaburkan persepsi risiko. Inilah Heuristik Ketersediaan.",
      en: "Recent, memorable events often distort risk perception. This is the Availability Heuristic.",
    },
  },
  {
    id: "sure-gain",
    biasSlug: "loss-aversion",
    prompt: {
      id: "Pilih salah satu:",
      en: "Choose one:",
    },
    options: [
      {
        id: "sure",
        label: { id: "Untung Rp100.000 yang pasti", en: "Gain $100 for sure" },
      },
      {
        id: "gamble",
        label: {
          id: "Peluang 50% untung Rp250.000",
          en: "50% chance to gain $250",
        },
      },
    ],
    analysis: {
      id: "Banyak orang memilih yang pasti karena lebih takut rugi daripada menghargai potensi untung. Inilah Penghindaran Kerugian.",
      en: "Many pick the sure thing because they fear losses more than they value gains. This is Loss Aversion.",
    },
  },
  {
    id: "fat-free",
    biasSlug: "framing-effect",
    prompt: {
      id: "Produk mana yang terdengar lebih sehat?",
      en: "Which product sounds healthier?",
    },
    options: [
      {
        id: "ninety",
        label: { id: "Yogurt '90% bebas lemak'", en: "Yogurt that is '90% fat-free'" },
      },
      {
        id: "ten",
        label: { id: "Yogurt 'mengandung 10% lemak'", en: "Yogurt that 'contains 10% fat'" },
      },
    ],
    analysis: {
      id: "Keduanya identik, tetapi cara penyajiannya mengubah penilaianmu. Inilah Efek Pembingkaian.",
      en: "Both are identical, but the wording changes your judgment. This is the Framing Effect.",
    },
  },
  {
    id: "viral-app",
    biasSlug: "bandwagon-effect",
    prompt: {
      id: "Sebuah aplikasi tiba-tiba viral dan semua temanmu memakainya. Apa yang kamu lakukan?",
      en: "An app suddenly goes viral and all your friends use it. What do you do?",
    },
    options: [
      {
        id: "join",
        label: { id: "Langsung ikut mengunduhnya", en: "Download it right away too" },
      },
      {
        id: "check",
        label: {
          id: "Cek dulu apakah aku benar-benar membutuhkannya",
          en: "Check first whether I actually need it",
        },
      },
    ],
    analysis: {
      id: "Mengikuti karena 'semua orang melakukannya' bisa menandakan Efek Ikut-ikutan.",
      en: "Following because 'everyone is doing it' may indicate the Bandwagon Effect.",
    },
  },
  {
    id: "boring-movie",
    biasSlug: "sunk-cost-fallacy",
    prompt: {
      id: "Kamu sudah menonton 1 jam film yang ternyata membosankan. Apa yang kamu lakukan?",
      en: "You've watched 1 hour of a movie that turns out to be boring. What do you do?",
    },
    options: [
      {
        id: "finish",
        label: {
          id: "Lanjut sampai habis, sayang waktunya",
          en: "Finish it, I don't want to waste the time",
        },
      },
      {
        id: "stop",
        label: { id: "Berhenti dan lakukan hal lain", en: "Stop and do something else" },
      },
    ],
    analysis: {
      id: "Melanjutkan hanya karena sudah terlanjur menghabiskan waktu adalah Kekeliruan Biaya Hangus.",
      en: "Continuing only because you've already spent time is the Sunk Cost Fallacy.",
    },
  },
  {
    id: "attractive-candidate",
    biasSlug: "halo-effect",
    prompt: {
      id: "Dua kandidat kerja punya CV setara, tetapi satu berpenampilan jauh lebih menarik. Siapa yang cenderung kamu anggap lebih kompeten?",
      en: "Two job candidates have equal resumes, but one is far more attractive. Who do you tend to assume is more competent?",
    },
    options: [
      {
        id: "attractive",
        label: { id: "Yang berpenampilan menarik", en: "The attractive one" },
      },
      {
        id: "cant-tell",
        label: {
          id: "Tidak bisa ditentukan dari penampilan",
          en: "Can't tell from appearance",
        },
      },
    ],
    analysis: {
      id: "Membiarkan penampilan memengaruhi penilaian kompetensi adalah Efek Halo.",
      en: "Letting appearance influence judgments of competence is the Halo Effect.",
    },
  },
]
