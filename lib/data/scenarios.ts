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
  {
    id: "salary-anchor",
    biasSlug: "anchoring-bias",
    prompt: {
      id: "Saat negosiasi gaji, perusahaan lebih dulu menyebut angka Rp8.000.000. Bagaimana kamu menanggapi?",
      en: "In a salary negotiation, the company first names a figure of $5,000. How do you respond?",
    },
    options: [
      {
        id: "around",
        label: { id: "Negosiasi di sekitar angka itu", en: "Negotiate around that figure" },
      },
      {
        id: "market",
        label: {
          id: "Ajukan angka berdasarkan riset pasar",
          en: "Propose a figure based on market research",
        },
      },
      {
        id: "value",
        label: {
          id: "Hitung dulu nilai kontribusiku",
          en: "Work out my own contribution value first",
        },
      },
    ],
    biasedOptionId: "around",
    analysis: {
      id: "Angka pertama yang disebut menjadi jangkar yang menyetir seluruh negosiasi, padahal belum tentu mencerminkan nilaimu. Inilah Bias Penjangkaran.",
      en: "The first figure mentioned anchors the whole negotiation, even though it may not reflect your worth. This is Anchoring Bias.",
    },
  },
  {
    id: "political-news",
    biasSlug: "confirmation-bias",
    prompt: {
      id: "Kamu punya pandangan politik yang kuat. Sumber berita mana yang kamu ikuti?",
      en: "You hold strong political views. Which news sources do you follow?",
    },
    options: [
      {
        id: "aligned",
        label: { id: "Yang sepaham denganku", en: "Ones that agree with me" },
      },
      {
        id: "opposing",
        label: { id: "Sesekali yang berseberangan", en: "Occasionally opposing ones" },
      },
      {
        id: "varied",
        label: {
          id: "Beberapa sumber berbeda sekaligus",
          en: "Several different sources at once",
        },
      },
    ],
    biasedOptionId: "aligned",
    analysis: {
      id: "Hanya mengikuti sumber yang sepaham memperkuat keyakinan tanpa pernah mengujinya \u2014 ciri Bias Konfirmasi.",
      en: "Following only sources you agree with reinforces your beliefs without ever testing them \u2014 a sign of Confirmation Bias.",
    },
  },
  {
    id: "shark-swim",
    biasSlug: "availability-heuristic",
    prompt: {
      id: "Sehabis menonton film tentang serangan hiu, kamu hendak berenang di pantai. Apa yang kamu rasakan?",
      en: "After watching a movie about shark attacks, you're about to swim at the beach. How do you feel?",
    },
    options: [
      {
        id: "fear",
        label: { id: "Takut berenang, hiu terasa mengintai", en: "Afraid to swim, sharks feel near" },
      },
      {
        id: "check",
        label: {
          id: "Cek dulu apakah ada peringatan resmi",
          en: "Check for any official warnings first",
        },
      },
      {
        id: "relax",
        label: {
          id: "Tenang, serangan hiu sangat langka",
          en: "Relax, shark attacks are very rare",
        },
      },
    ],
    biasedOptionId: "fear",
    analysis: {
      id: "Serangan hiu sangat langka, tetapi gambaran dramatis dari film mudah teringat sehingga terasa mengancam. Inilah Heuristik Ketersediaan.",
      en: "Shark attacks are extremely rare, but the vivid movie image is easy to recall, making it feel threatening. This is the Availability Heuristic.",
    },
  },
  {
    id: "stock-loss",
    biasSlug: "loss-aversion",
    prompt: {
      id: "Nilai sahammu turun 20%. Apa yang kamu lakukan?",
      en: "Your stock has dropped 20%. What do you do?",
    },
    options: [
      {
        id: "hold",
        label: {
          id: "Tahan sampai balik modal, tak mau rugi",
          en: "Hold until it breaks even, I won't take a loss",
        },
      },
      {
        id: "review",
        label: {
          id: "Evaluasi ulang prospeknya secara objektif",
          en: "Re-evaluate its prospects objectively",
        },
      },
      {
        id: "plan",
        label: {
          id: "Ikuti rencana investasi yang sudah dibuat",
          en: "Stick to my existing investment plan",
        },
      },
    ],
    biasedOptionId: "hold",
    analysis: {
      id: "Menahan saham rugi hanya untuk menghindari 'mengakui kerugian' bisa membuat keputusan jadi tidak rasional. Inilah Penghindaran Kerugian.",
      en: "Holding a losing stock just to avoid 'realizing the loss' can make decisions irrational. This is Loss Aversion.",
    },
  },
  {
    id: "surgery-frame",
    biasSlug: "framing-effect",
    prompt: {
      id: "Dokter menjelaskan sebuah operasi. Penjelasan mana yang membuatmu lebih tenang?",
      en: "A doctor describes a surgery. Which description makes you calmer?",
    },
    options: [
      {
        id: "success",
        label: { id: "'Tingkat keberhasilan 90%'", en: "'90% success rate'" },
      },
      {
        id: "failure",
        label: { id: "'Tingkat kegagalan 10%'", en: "'10% failure rate'" },
      },
      {
        id: "same",
        label: { id: "Keduanya sama saja", en: "They are the same" },
      },
    ],
    biasedOptionId: "success",
    analysis: {
      id: "'Keberhasilan 90%' dan 'kegagalan 10%' adalah fakta yang sama, tetapi bingkainya mengubah perasaanmu. Inilah Efek Pembingkaian.",
      en: "'90% success' and '10% failure' are the same fact, but the framing changes how you feel. This is the Framing Effect.",
    },
  },
  {
    id: "stock-hype",
    biasSlug: "bandwagon-effect",
    prompt: {
      id: "Sebuah saham sedang ramai dibicarakan dan semua orang membelinya. Apa yang kamu lakukan?",
      en: "A stock is trending and everyone is buying it. What do you do?",
    },
    options: [
      {
        id: "buy",
        label: { id: "Ikut beli sebelum ketinggalan", en: "Buy in before I miss out" },
      },
      {
        id: "research",
        label: { id: "Riset fundamentalnya dulu", en: "Research its fundamentals first" },
      },
      {
        id: "plan",
        label: { id: "Abaikan hype, tetap pada rencana", en: "Ignore the hype, stick to my plan" },
      },
    ],
    biasedOptionId: "buy",
    analysis: {
      id: "Membeli hanya karena 'semua orang membeli' tanpa analisis sendiri adalah Efek Ikut-ikutan.",
      en: "Buying just because 'everyone is buying' without your own analysis is the Bandwagon Effect.",
    },
  },
  {
    id: "useless-course",
    biasSlug: "sunk-cost-fallacy",
    prompt: {
      id: "Kamu sudah membayar kursus mahal, tapi materinya ternyata tak berguna. Apa yang kamu lakukan?",
      en: "You've paid for an expensive course, but the material turns out useless. What do you do?",
    },
    options: [
      {
        id: "continue",
        label: {
          id: "Lanjutkan karena sudah terlanjur bayar",
          en: "Continue because I already paid",
        },
      },
      {
        id: "stop",
        label: {
          id: "Berhenti dan alihkan waktu ke hal lain",
          en: "Stop and spend the time elsewhere",
        },
      },
      {
        id: "partial",
        label: {
          id: "Ambil bagian yang masih relevan saja",
          en: "Take only the parts still relevant",
        },
      },
    ],
    biasedOptionId: "continue",
    analysis: {
      id: "Uang kursus sudah hilang apa pun pilihanmu. Melanjutkan hanya karena 'sudah bayar' adalah Kekeliruan Biaya Hangus.",
      en: "The course fee is gone whatever you choose. Continuing only because you 'already paid' is the Sunk Cost Fallacy.",
    },
  },
  {
    id: "charismatic-ceo",
    biasSlug: "halo-effect",
    prompt: {
      id: "Seorang CEO yang terkenal karismatik meluncurkan produk baru. Bagaimana penilaian awalmu?",
      en: "A famously charismatic CEO launches a new product. What's your initial judgment?",
    },
    options: [
      {
        id: "assume",
        label: { id: "Pasti bagus, dia kan hebat", en: "It must be great, they're brilliant" },
      },
      {
        id: "reviews",
        label: { id: "Tunggu ulasan independen dulu", en: "Wait for independent reviews first" },
      },
      {
        id: "specs",
        label: { id: "Nilai dari spesifikasi dan faktanya", en: "Judge it on specs and facts" },
      },
    ],
    biasedOptionId: "assume",
    analysis: {
      id: "Membiarkan reputasi atau karisma seseorang menentukan penilaianmu atas produknya adalah Efek Halo.",
      en: "Letting someone's reputation or charisma decide your judgment of their product is the Halo Effect.",
    },
  },
  {
    id: "dropout-success",
    biasSlug: "survivorship-bias",
    prompt: {
      id: "Kamu membaca banyak kisah miliarder yang sukses setelah drop out kuliah. Apa kesimpulanmu?",
      en: "You read many stories of billionaires who succeeded after dropping out of college. What do you conclude?",
    },
    options: [
      {
        id: "dropout",
        label: {
          id: "Drop out kuliah jalan pintas menuju sukses",
          en: "Dropping out is a shortcut to success",
        },
      },
      {
        id: "context",
        label: {
          id: "Itu hanya yang berhasil; yang gagal tak terdengar",
          en: "Those are only the successes; failures go unheard",
        },
      },
      {
        id: "data",
        label: {
          id: "Lihat juga berapa banyak yang drop out lalu gagal",
          en: "Also look at how many dropped out and failed",
        },
      },
    ],
    biasedOptionId: "dropout",
    analysis: {
      id: "Kisah yang terdengar hanyalah mereka yang berhasil; banyak yang drop out lalu gagal tak pernah diberitakan. Inilah Bias Sintasan.",
      en: "The stories you hear are only the successes; the many who dropped out and failed are never reported. This is Survivorship Bias.",
    },
  },
  {
    id: "old-buildings",
    biasSlug: "survivorship-bias",
    prompt: {
      id: "Banyak bangunan tua tampak lebih kokoh daripada bangunan modern. Apa kesimpulanmu?",
      en: "Many old buildings look sturdier than modern ones. What do you conclude?",
    },
    options: [
      {
        id: "past",
        label: {
          id: "Dulu orang membangun jauh lebih berkualitas",
          en: "People built far better in the past",
        },
      },
      {
        id: "survived",
        label: {
          id: "Yang rapuh sudah runtuh, sisanya yang kuat",
          en: "The flimsy ones collapsed; only sturdy ones remain",
        },
      },
      {
        id: "both",
        label: {
          id: "Bandingkan semua bangunan dari zaman itu",
          en: "Compare all buildings from that era",
        },
      },
    ],
    biasedOptionId: "past",
    analysis: {
      id: "Bangunan tua yang rapuh sudah lama runtuh, jadi yang tersisa hanya yang kuat \u2014 bukan berarti semuanya dulu dibangun lebih baik. Inilah Bias Sintasan.",
      en: "Flimsy old buildings collapsed long ago, so only the sturdy ones remain \u2014 it doesn't mean everything was built better. This is Survivorship Bias.",
    },
  },
  {
    id: "self-diagnose",
    biasSlug: "dunning-kruger-effect",
    prompt: {
      id: "Setelah membaca beberapa artikel kesehatan di internet, seberapa yakin kamu bisa mendiagnosis sendiri gejalamu?",
      en: "After reading a few health articles online, how confident are you that you can diagnose your own symptoms?",
    },
    options: [
      {
        id: "expert",
        label: { id: "Sangat yakin, aku sudah paham", en: "Very confident, I understand it now" },
      },
      {
        id: "shallow",
        label: {
          id: "Sadar pemahamanku masih dangkal",
          en: "Aware my understanding is still shallow",
        },
      },
      {
        id: "doctor",
        label: { id: "Tetap periksa ke dokter", en: "See a doctor anyway" },
      },
    ],
    biasedOptionId: "expert",
    analysis: {
      id: "Sedikit informasi sering menimbulkan rasa percaya diri berlebih atas hal yang sebenarnya kompleks. Inilah Efek Dunning-Kruger.",
      en: "A little information often creates overconfidence about something that is actually complex. This is the Dunning-Kruger Effect.",
    },
  },
  {
    id: "new-skill",
    biasSlug: "dunning-kruger-effect",
    prompt: {
      id: "Kamu baru menguasai dasar-dasar sebuah bidang baru. Bagaimana kamu menilai kemampuanmu?",
      en: "You've just learned the basics of a new field. How do you rate your ability?",
    },
    options: [
      {
        id: "overrate",
        label: { id: "Merasa sudah cukup jago", en: "Feel I'm already pretty good" },
      },
      {
        id: "aware",
        label: {
          id: "Sadar masih banyak yang belum kukuasai",
          en: "Aware there's much I haven't mastered",
        },
      },
      {
        id: "feedback",
        label: {
          id: "Minta umpan balik dari yang lebih ahli",
          en: "Ask feedback from someone more expert",
        },
      },
    ],
    biasedOptionId: "overrate",
    analysis: {
      id: "Di tahap awal belajar, kita sering melebih-lebihkan kemampuan karena belum tahu apa yang belum kita ketahui. Inilah Efek Dunning-Kruger.",
      en: "Early in learning, we tend to overrate our ability because we don't yet know what we don't know. This is the Dunning-Kruger Effect.",
    },
  },
]
