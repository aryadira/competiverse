import efisien from "../assets/icons/efisien.svg";
import informatif from "../assets/icons/informatif.svg";
import jelas from "../assets/icons/jelas.svg";
import mudah from "../assets/icons/mudah.svg";
import cardImage1 from "../assets/images/cardImage1.svg";
import cardImage2 from "../assets/images/cardImage2.svg";
import cardImage3 from "../assets/images/cardImage3.svg";
import teknologi from "../assets/images/teknologi.svg";
import visual from "../assets/images/visual.svg";
import umum from "../assets/images/umum.svg";
import gaming from "../assets/images/gaming.svg";

export const benefits = [
  {
    id: "benefit-1",
    title: "Efisien",
    text: "Tidak perlu bersusah-payah mencari lomba yang tersebar",
    icon: efisien,
  },
  {
    id: "benefit-2",
    title: "Mudah",
    text: "Banyaknya lomba yang sudah tersedia sesuai minat",
    icon: mudah,
  },
  {
    id: "benefit-3",
    title: "Jelas",
    text: "Lomba yang jelas dan terstruktur",
    icon: jelas,
  },
  {
    id: "benefit-4",
    title: "Informatif",
    text: "Informasi lomba yang baik dan jelas",
    icon: informatif,
  },
];

export const categories = [
  { id: "kategori-1", nama: "Teknologi", ilustrasi: teknologi, link: "/teknologi" },
  { id: "kategori-2", nama: "Visual", ilustrasi: visual, link: "/visual" },
  { id: "kategori-3", nama: "Umum", ilustrasi: umum, link: "/umum" },
  { id: "kategori-4", nama: "Gaming", ilustrasi: gaming, link: "/gaming" },
];

export const recomends = [
  {
    id: 1,
    tag: "Visual",
    title: "Lomba Fotografi",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
    peserta: "20 Ribu",
  },
  {
    id: 2,
    tag: "Visual",
    title: "Lomba Poster",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage2,
    peserta: "20 Ribu",
  },
  {
    id: 3,
    tag: "Umum",
    title: "Lomba GCSO",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage3,
    peserta: "20 Ribu",
  },
  {
    id: 4,
    tag: "Visual",
    title: "Lomba Fotografi",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
    peserta: "20 Ribu",
  },
  {
    id: 5,
    tag: "Teknologi",
    title: "Lomba Website",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
    peserta: "20 Ribu",
  },
];

export const creatorPackages = [
  {
    id: 1,
    level: "Standard Plan",
    price: "Rp.200.000",
    benefits: ["5 Lomba", "12 orang", "Pencarian Lomba Terbatas", "Notifikasi Lomba Terbatas", "Tidak ada Promosi Premium"],
  },
  {
    id: 2,
    level: "Pro Plan",
    price: "Rp.500.000",
    benefits: ["15 Lomba", "20 orang", "Pencarian Lomba Tanpa Batasan", "Notifikasi Lomba Tanpa Batasan", "Promosi Premium untuk 3 Lomba per Tahun"],
  },
  {
    id: 3,
    level: "Premium Plan",
    price: "Rp.1.000.000",
    benefits: [
      "30 Lomba",
      "Tidak terbatas",
      "Pencarian Lomba Tanpa Batasan",
      "Notifikasi Lomba Tanpa Batasan",
      "Promosi Premium untuk 10 Lomba per Tahun",
      "Akses Ke Analisis Data Pengguna",
    ],
  },
  {
    id: 4,
    level: "Exclusive Plan",
    price: "Rp.3.500.000",
    benefits: [
      "Tidak terbatas",
      "Tidak terbatas",
      "Pencarian Lomba Tanpa Batasan",
      "Notifikasi Lomba Tanpa Batasan",
      "Promosi Premium untuk semua Lomba per Tahun",
      "Akses Ke Analisis Data Pengguna",
    ],
  },
];

export const faqs = [
  {
    id: "1",
    question: "Apa sih itu Competiverse?",
    answer:
      "Competiverse adalah platform yang menyediakan beragam lomba menarik dari berbagai penyelenggara. Kemudahan dan efisiensinya membuat proses pencarian lomba menjadi jauh lebih praktis dan efektif",
  },
  {
    id: "2",
    question: "Bagaimana cara menjadi Creator Lomba di Competiverse?",
    answer:
      "Dengan memilih paket creator, Anda dapat langsung saja berlangganan dengan paket creator yang sudah tersedia, maka kami akan menjadikan Anda sebagai Creator Lomba di Competiverse",
  },
  {
    id: "3",
    question: "Apakah banyak pilihan Lomba di Competiverse?",
    answer:
      "Competiverse menyediakan banyak sekali pilihan lomba sesuai dengan kategorinya. Tentunya kategori yang mencakup semua perlombaan pada masa kini",
  },
];
