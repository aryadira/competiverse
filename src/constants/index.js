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
  { id: "kategori-1", nama: "Teknologi", ilustrasi: teknologi, link: "/lomba/teknologi" },
  { id: "kategori-2", nama: "Visual", ilustrasi: visual, link: "/lomba/visual" },
  { id: "kategori-3", nama: "Umum", ilustrasi: umum, link: "/lomba/umum" },
  { id: "kategori-4", nama: "Gaming", ilustrasi: gaming, link: "/lomba/gaming" },
];

export const recomends = [
  {
    tag: "Fotografi",
    title: "Lomba Fotografi",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
  },
  {
    tag: "Visual",
    title: "Lomba Poster",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage2,
  },
  {
    tag: "Umum",
    title: "Lomba GCSO",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage3,
  },
  {
    tag: "Fotografi",
    title: "Lomba Fotografi",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
  },
  {
    tag: "Fotografi",
    title: "Lomba Fotografi",
    date: "Mulai 01 Juli - 31 Juli",
    price: "Gratis",
    poster: cardImage1,
  },
];
