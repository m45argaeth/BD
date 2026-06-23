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
  /** The option id that reflects the cognitive bias. */
  biasedOptionId: string
  analysis: Localized
}

export const SCENARIOS: Scenario[] = [
  {
    id: "jacket-discount",
    biasSlug: "anchoring-bias",
    prompt: {
      id: "Sebuah jaket awalnya seharga Rp3.000.000. Hari ini didiskon menjadi Rp1.500.000. Apa yang kamu lakukan?",
      en: "A jacket originally costs $300. Today it is discounted to $150. What do you do?",
    },
    options: [
      {
        id: "yes",
        label: { id: "Langsung beli, hematnya besar", en: "Buy it now, big savings" },
      },
      {
        id: "depends",
        label: {
          id: "Pikir dulu harga wajar jaketnya",
          en: "Consider the jacket's fair price first",
        },
      },
      {
        id: "compare",
        label: {
          id: "Cek harga model serupa di toko lain",
          en: "Check similar models at other stores",
        },
      },
    ],
    biasedOptionId: "yes",
    analysis: {
      id: "Harga awal Rp3 juta menjadi jangkar yang membuat Rp1,5 juta terasa murah, padahal belum tentu sesuai nilai wajarnya. Inilah Bias Penjangkaran (Anchoring).",
      en: "The original $300 acts as an anchor that makes $150 feel cheap, even if it isn't actually fair value. This is Anchoring Bias.",
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
      {
        id: "both",
        label: {
          id: "Keduanya, supaya berimbang",
          en: "Both, to stay balanced",
        },
      },
    ],
    biasedOptionId: "support",
    analysis: {
      id: "Memilih hanya bukti yang mendukung keyakinan, sambil menghindari yang bertentangan, adalah ciri khas Bias Konfirmasi.",
      en: "Choosing only evidence that supports your belief while avoiding what contradicts it is the hallmark of Confirmation Bias.",
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
      {
        id: "stats",
        label: {
          id: "Lihat data statistik dulu sebelum menilai",
          en: "Check the statistics before deciding",
        },
      },
    ],
    biasedOptionId: "flying",
    analysis: {
      id: "Secara statistik berkendara lebih berisiko, tetapi berita kecelakaan pesawat yang dramatis lebih mudah teringat sehingga terasa lebih berbahaya. Inilah Heuristik Ketersediaan.",
      en: "Statistically driving is riskier, but dramatic plane-crash news is easier to recall, making flying feel more dangerous. This is the Availability Heuristic.",
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
      {
        id: "ev",
        label: {
          id: "Hitung nilai harapannya dulu",
          en: "Work out the expected value first",
        },
      },
    ],
    biasedOptionId: "sure",
    analysis: {
      id: "Secara nilai harapan, peluang 50% untung Rp250rb (Rp125rb) lebih tinggi daripada Rp100rb pasti. Memilih yang pasti karena takut rugi menunjukkan Penghindaran Kerugian.",
      en: "By expected value, a 50% chance at $250 ($125) beats a sure $100. Choosing the sure thing out of fear of losing reflects Loss Aversion.",
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
        label: {
          id: "Yogurt 'mengandung 10% lemak'",
          en: "Yogurt that 'contains 10% fat'",
        },
      },
      {
        id: "same",
        label: { id: "Keduanya identik, hanya beda kata", en: "Both are identical, just worded differently" },
      },
    ],
    biasedOptionId: "ninety",
    analysis: {
      id: "'90% bebas lemak' dan 'mengandung 10% lemak' adalah hal yang identik, tetapi bingkai positif terasa lebih sehat. Inilah Efek Pembingkaian.",
      en: "'90% fat-free' and 'contains 10% fat' are identical, yet the positive frame feels healthier. This is the Framing Effect.",
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
      {
        id: "reviews",
        label: {
          id: "Baca ulasan dan kebijakan privasinya dulu",
          en: "Read reviews and its privacy policy first",
        },
      },
    ],
    biasedOptionId: "join",
    analysis: {
      id: "Mengikuti hanya karena 'semua orang melakukannya', tanpa menimbang kebutuhanmu sendiri, adalah Efek Ikut-ikutan.",
      en: "Following just because 'everyone is doing it', without weighing your own needs, is the Bandwagon Effect.",
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
      {
        id: "skim",
        label: {
          id: "Cek ulasan, kalau jelek ya tinggalkan",
          en: "Check reviews, and drop it if it's bad",
        },
      },
    ],
    biasedOptionId: "finish",
    analysis: {
      id: "Satu jam yang sudah lewat tidak akan kembali apa pun pilihanmu. Melanjutkan hanya karena 'sudah terlanjur' adalah Kekeliruan Biaya Hangus.",
      en: "The hour already spent won't return whatever you choose. Continuing only because you're 'already in' is the Sunk Cost Fallacy.",
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
      {
        id: "test",
        label: {
          id: "Uji keterampilan keduanya dulu",
          en: "Test both of their skills first",
        },
      },
    ],
    biasedOptionId: "attractive",
    analysis: {
      id: "Membiarkan satu kesan positif (penampilan) memengaruhi penilaian atas kompetensi yang tak berkaitan adalah Efek Halo.",
      en: "Letting one positive impression (looks) sway your judgment of unrelated competence is the Halo Effect.",
    },
  },
]
