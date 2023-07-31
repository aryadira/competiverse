import { Button } from "../components";
import { Card } from "../components";
import { gradient, headerStyle, Home } from "../style";

const Beranda = () => {
  return (
    <>
      <section id='berandaHeader' className={`${Home.section.defaultSection} ${Home.section.justify}`}>
        <div className={`${Home.container.defaultContainer} ${Home.container.gap} ${Home.container.alignText}  ${Home.container.width}`}>
          <div className={Home.content}>
            <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>
              <span className={gradient.textGradient}>Temukan.</span> Cari Lomba yang Anda Minati!!
            </h1>
            <p className={Home.paragraph}>
              Temukan lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang.
            </p>
            <div className='flex justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Button children='Temukan' navHasLink='#recomendCard' />
            </div>
          </div>
        </div>
      </section>
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

export default Beranda;
