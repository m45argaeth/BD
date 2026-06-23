import type { Locale } from "@/lib/i18n"

export type Localized = Record<Locale, string>

export interface Bias {
  slug: string
  name: Localized
  short: Localized
  why: Localized
  example: Localized
  tips: Localized[]
  tags: string[]
}

export const BIASES: Bias[] = [
  {
    slug: "confirmation-bias",
    name: { id: "Bias Konfirmasi", en: "Confirmation Bias" },
    short: {
      id: "Kecenderungan mencari dan mengingat informasi yang mendukung keyakinan yang sudah ada.",
      en: "The tendency to seek and remember information that supports what we already believe.",
    },
    why: {
      id: "Otak lebih nyaman saat informasi baru cocok dengan keyakinan lama, jadi kita menyaring yang bertentangan.",
      en: "The brain feels more comfortable when new information matches existing beliefs, so we filter out what conflicts.",
    },
    example: {
      id: "Membaca hanya artikel yang setuju dengan pandangan politik kita dan mengabaikan sisi lain.",
      en: "Reading only articles that agree with our political views while ignoring the other side.",
    },
    tips: [
      {
        id: "Cari secara aktif argumen yang menentang pendapatmu.",
        en: "Actively seek arguments that challenge your opinion.",
      },
      {
        id: "Tanyakan: bukti apa yang akan membuatku berubah pikiran?",
        en: "Ask: what evidence would change my mind?",
      },
    ],
    tags: ["social media", "media sosial", "belief", "keyakinan", "news", "berita", "echo chamber"],
  },
  {
    slug: "anchoring-bias",
    name: { id: "Bias Penjangkaran", en: "Anchoring Bias" },
    short: {
      id: "Terlalu bergantung pada informasi pertama (jangkar) saat membuat keputusan.",
      en: "Relying too heavily on the first piece of information (the anchor) when deciding.",
    },
    why: {
      id: "Angka atau fakta pertama menjadi titik acuan, dan kita menyesuaikan penilaian di sekitarnya.",
      en: "The first number or fact becomes a reference point, and we adjust our judgment around it.",
    },
    example: {
      id: "Jaket 'diskon dari Rp3 juta jadi Rp1,5 juta' terasa murah karena kita terpaku pada harga awal.",
      en: "A jacket 'discounted from $300 to $150' feels cheap because we fixate on the original price.",
    },
    tips: [
      {
        id: "Evaluasi nilai sesuatu tanpa melihat angka pertama.",
        en: "Evaluate the value of something without looking at the first number.",
      },
      {
        id: "Bandingkan dengan beberapa acuan lain, bukan hanya satu.",
        en: "Compare against several other references, not just one.",
      },
    ],
    tags: ["price", "harga", "discount", "diskon", "negotiation", "negosiasi", "money"],
  },
  {
    slug: "survivorship-bias",
    name: { id: "Bias Penyintas", en: "Survivorship Bias" },
    short: {
      id: "Fokus pada yang berhasil atau selamat sambil mengabaikan yang gagal dan tak terlihat.",
      en: "Focusing on those who succeeded or survived while ignoring those who failed and are no longer visible.",
    },
    why: {
      id: "Kisah sukses lebih mudah dilihat daripada kegagalan yang menghilang dari pandangan.",
      en: "Success stories are easier to see than failures that disappear from view.",
    },
    example: {
      id: "Mengira 'kuliah itu sia-sia' karena beberapa miliarder drop out, lupa jutaan yang gagal.",
      en: "Thinking 'college is useless' because some billionaires dropped out, forgetting the millions who failed.",
    },
    tips: [
      {
        id: "Tanyakan: siapa yang tidak ada di dalam data ini?",
        en: "Ask: who is missing from this data?",
      },
      {
        id: "Pelajari juga kasus yang gagal, bukan hanya yang sukses.",
        en: "Study the failures too, not just the successes.",
      },
    ],
    tags: ["success", "sukses", "startup", "investing", "investasi", "survivor"],
  },
  {
    slug: "availability-heuristic",
    name: { id: "Heuristik Ketersediaan", en: "Availability Heuristic" },
    short: {
      id: "Menilai kemungkinan berdasarkan contoh yang paling mudah teringat.",
      en: "Judging how likely something is based on the examples that come to mind most easily.",
    },
    why: {
      id: "Peristiwa yang baru atau dramatis lebih mudah diingat, sehingga terasa lebih sering terjadi.",
      en: "Recent or dramatic events are easier to recall, so they feel more common than they are.",
    },
    example: {
      id: "Takut naik pesawat setelah membaca berita kecelakaan, padahal berkendara lebih berisiko.",
      en: "Fearing flying after reading crash news, even though driving is statistically riskier.",
    },
    tips: [
      {
        id: "Cari data dasar (base rate), bukan hanya berita yang viral.",
        en: "Look for base-rate data, not just viral headlines.",
      },
      {
        id: "Sadari bahwa mudah diingat tidak sama dengan sering terjadi.",
        en: "Remember that easy to recall is not the same as frequently happening.",
      },
    ],
    tags: ["news", "berita", "risk", "risiko", "social media", "media sosial", "fear", "plane"],
  },
  {
    slug: "halo-effect",
    name: { id: "Efek Halo", en: "Halo Effect" },
    short: {
      id: "Membiarkan satu kesan positif memengaruhi penilaian kita atas sifat lain yang tak berkaitan.",
      en: "Letting one positive impression color our judgment of unrelated traits.",
    },
    why: {
      id: "Otak menggeneralisasi: jika satu hal bagus, kita asumsikan hal lain juga bagus.",
      en: "The brain generalizes: if one thing is good, we assume other things are too.",
    },
    example: {
      id: "Menganggap orang berpenampilan menarik pasti lebih kompeten atau jujur.",
      en: "Assuming an attractive person must also be more competent or honest.",
    },
    tips: [
      {
        id: "Nilai tiap sifat secara terpisah.",
        en: "Evaluate each trait independently.",
      },
      {
        id: "Waspadai penilaian instan dari kesan pertama.",
        en: "Be wary of snap judgments from first impressions.",
      },
    ],
    tags: ["first impression", "kesan pertama", "beauty", "brand", "hiring", "rekrutmen"],
  },
  {
    slug: "bandwagon-effect",
    name: { id: "Efek Ikut-ikutan", en: "Bandwagon Effect" },
    short: {
      id: "Mengadopsi keyakinan atau perilaku karena banyak orang lain melakukannya.",
      en: "Adopting a belief or behavior because many others are doing it.",
    },
    why: {
      id: "Mengikuti mayoritas terasa aman dan mengurangi kebutuhan berpikir sendiri.",
      en: "Following the majority feels safe and reduces the need to think for ourselves.",
    },
    example: {
      id: "Membeli produk yang sedang viral di media sosial hanya karena semua orang membelinya.",
      en: "Buying a product that's going viral on social media just because everyone else is.",
    },
    tips: [
      {
        id: "Tanyakan apakah kamu setuju karena bukti atau karena popularitas.",
        en: "Ask whether you agree because of evidence or because of popularity.",
      },
      {
        id: "Putuskan dulu sebelum melihat pilihan orang lain.",
        en: "Decide first before seeing what others chose.",
      },
    ],
    tags: ["trend", "social media", "media sosial", "crowd", "popular", "viral"],
  },
  {
    slug: "loss-aversion",
    name: { id: "Penghindaran Kerugian", en: "Loss Aversion" },
    short: {
      id: "Rasa sakit kehilangan terasa lebih kuat daripada kesenangan memperoleh hal setara.",
      en: "The pain of losing feels stronger than the pleasure of gaining the same amount.",
    },
    why: {
      id: "Secara evolusi, menghindari kerugian lebih penting untuk bertahan hidup.",
      en: "Evolutionarily, avoiding losses mattered more for survival.",
    },
    example: {
      id: "Memilih untung Rp100rb yang pasti daripada peluang 50% untung Rp250rb.",
      en: "Choosing a sure $100 gain over a 50% chance to gain $250.",
    },
    tips: [
      {
        id: "Bingkai ulang keputusan dari sisi nilai harapan, bukan rasa takut rugi.",
        en: "Reframe decisions around expected value, not fear of loss.",
      },
      {
        id: "Tanyakan: apakah aku menghindari risiko atau menghindari penyesalan?",
        en: "Ask: am I avoiding risk or avoiding regret?",
      },
    ],
    tags: ["money", "uang", "risk", "risiko", "investing", "gamble", "judi"],
  },
  {
    slug: "framing-effect",
    name: { id: "Efek Pembingkaian", en: "Framing Effect" },
    short: {
      id: "Keputusan berubah tergantung cara informasi yang sama disajikan.",
      en: "Decisions change depending on how the same information is presented.",
    },
    why: {
      id: "Kita bereaksi terhadap kata dan konteks, bukan hanya fakta mentah.",
      en: "We react to wording and context, not just the raw facts.",
    },
    example: {
      id: "'90% bebas lemak' terdengar lebih baik daripada 'mengandung 10% lemak'.",
      en: "'90% fat-free' sounds better than 'contains 10% fat'.",
    },
    tips: [
      {
        id: "Coba nyatakan ulang pilihan dengan kata-kata yang berbeda.",
        en: "Try restating the choice in different words.",
      },
      {
        id: "Fokus pada angka absolut, bukan hanya bingkainya.",
        en: "Focus on the absolute numbers, not just the frame.",
      },
    ],
    tags: ["marketing", "wording", "kata", "percentage", "persentase", "choice"],
  },
  {
    slug: "dunning-kruger-effect",
    name: { id: "Efek Dunning-Kruger", en: "Dunning-Kruger Effect" },
    short: {
      id: "Orang dengan kemampuan rendah cenderung melebih-lebihkan keahliannya.",
      en: "People with low ability tend to overestimate their competence.",
    },
    why: {
      id: "Tanpa keahlian, seseorang juga kekurangan alat untuk menyadari keterbatasannya.",
      en: "Without expertise, a person also lacks the tools to recognize their own limitations.",
    },
    example: {
      id: "Baru belajar sebentar lalu merasa sudah ahli dan meremehkan hal yang sulit.",
      en: "Learning something briefly and feeling like an expert while underestimating its difficulty.",
    },
    tips: [
      {
        id: "Cari umpan balik dari orang yang lebih berpengalaman.",
        en: "Seek feedback from people more experienced than you.",
      },
      {
        id: "Semakin banyak belajar, semakin sadar apa yang belum kamu tahu.",
        en: "The more you learn, the more you realize what you don't know.",
      },
    ],
    tags: ["skill", "keahlian", "confidence", "percaya diri", "learning", "belajar"],
  },
  {
    slug: "sunk-cost-fallacy",
    name: { id: "Kekeliruan Biaya Hangus", en: "Sunk Cost Fallacy" },
    short: {
      id: "Melanjutkan sesuatu hanya karena sudah terlanjur menginvestasikan waktu, uang, atau usaha.",
      en: "Continuing something only because we've already invested time, money, or effort.",
    },
    why: {
      id: "Kita benci merasa investasi sebelumnya jadi sia-sia, jadi kita terus bertahan.",
      en: "We hate feeling that past investment was wasted, so we keep going.",
    },
    example: {
      id: "Menonton film membosankan sampai habis 'karena sudah bayar tiket'.",
      en: "Watching a boring movie to the end 'because I already paid for the ticket'.",
    },
    tips: [
      {
        id: "Putuskan berdasarkan manfaat ke depan, bukan biaya yang sudah hilang.",
        en: "Decide based on future benefit, not costs already gone.",
      },
      {
        id: "Tanyakan: jika mulai dari nol hari ini, apakah aku tetap memilih ini?",
        en: "Ask: starting fresh today, would I still choose this?",
      },
    ],
    tags: ["money", "uang", "commitment", "komitmen", "relationship", "time", "waktu"],
  },
]
