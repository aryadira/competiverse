import { Card } from "../components";
import { gradient, Home } from "../style";
import { PiStarFourFill } from "react-icons/pi";
import { categories, competitions } from "../constants";

const Lomba = () => {
  const colorTextCategories = {
    base: "category text-[32px] font-bold flex items-center cursor-pointer",
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
      <section id='all' className={`${Home.section.defaultSection}`}>
        <div className={`${Home.container.defaultContainer} ${Home.container.gap} `}>
          <div className={`${Home.content} ${Home.container.width}`}>
            <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>
              <span className={gradient.textGradient}>Lomba.</span> Pengalaman terbaik untuk mengikuti lomba yang Anda minati.
            </h1>
            <p className={Home.paragraph}>
              Ikuti lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang!.
            </p>
          </div>
        </div>
      </section>
      <div className='category-text flex flex-between w-full gap-[20px]'>
        {categories.map((category) => (
          <div className={`${colorTextCategories.base} ${labelColor(category.nama)}`} key={category.id}>
            <PiStarFourFill />
            <h1>{category.nama}</h1>
          </div>
        ))}
      </div>
      <section id='recomendCard' className={Home.section.defaultSection}>
        <Card />
      </section>
    </>
  );
};

export default Lomba;
