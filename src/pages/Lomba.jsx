import { Button } from "../components";
import { Card } from "../components";
import { gradient, headerStyle, Home } from "../style";
import { PiStarFourFill } from "react-icons/pi";
import { categories } from "../constants";
import { useState } from "react";

const Lomba = () => {
  const colorTextCategories = {
    base: "category text-[32px] font-bold flex items-center cursor-pointer hover:scale-105",
    teknologi: "text-blue-500",
    visual: "text-purple-500",
    umum: "text-green-500",
    gaming: "text-pink-500",
  };

  function labelColor(category) {
    if (category == "Teknologi") {
      return colorTextCategories.teknologi;
    } else if (category == "Visual") {
      return colorTextCategories.visual;
    } else if (category == "Umum") {
      return colorTextCategories.umum;
    } else if (category == "Gaming") {
      return colorTextCategories.gaming;
    }
  }

  return (
    <>
      <section id='berandaHeader' className={`${Home.section.defaultSection}`}>
        <div className={`${Home.container.defaultContainer} ${Home.container.gap} `}>
          <div className={`${Home.content} ${Home.container.width}`}>
            <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>
              <span className={gradient.textGradient}>Lomba.</span> Pengalaman terbaik untuk mengikuti lomba yang Anda minati.
            </h1>
            <p className={Home.paragraph}>
              Ikuti lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang!.
            </p>
            <div className=''>
              <Button children='Temukan' />
            </div>
          </div>
        </div>
      </section>
      <div className='category-text flex flex-between w-full gap-[20px]'>
        {categories.map((category) => (
          <div className={`${colorTextCategories.base} ${labelColor(category.nama)}`} key={category.id}>
            <PiStarFourFill />
            {category.nama}
          </div>
        ))}
      </div>
      <section id='recomendCard' className={Home.section.defaultSection}>
        <div className={`${Home.container.defaultContainer} }`}>
          <h1
            className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightExtrabold} ${Home.heading.fontSize2} ${Home.baseColor} text-center sm:text-left`}>
            Rekomendasi Untuk Anda
          </h1>
        </div>
        <Card />
      </section>
      <section id='TrendingCard' className={Home.section.defaultSection}>
        <div className={Home.container.defaultContainer}>
          <h1
            className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightExtrabold} ${Home.heading.fontSize2} ${Home.baseColor} ${Home.heading.width}`}>
            Trending
          </h1>
        </div>
        <Card />
      </section>
    </>
  );
};

export default Lomba;
