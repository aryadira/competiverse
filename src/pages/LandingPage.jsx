import { Jumbotron, Button } from "../components";
import { benefits, categories } from "../constants";
import { headerStyle, gradient, Home } from "../style";
import piala from "../assets/images/piala.svg";

const LandingPage = () => {
  return (
    <div>
      <Jumbotron />
      <section id='benefit'>
        <h2 className='md:text-[39px] text-[32px] text-center mt-[180px] mb-[90px] font-semibold text-gray-700'>
          Kenapa harus memilih Competiverse?
        </h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:grid-rows-2 gap-4'>
          {benefits.map((benefit) => (
            <div
              className='card flex p-[1.5625rem] flex-col items-start gap-[1.25rem] rounded-[1.5625rem] border-2 border-solid border-6A5AE0 bg-white'
              key={benefit.id}>
              <h3 className='text-[1.5rem] capitalize font-bold text-gray-700 flex gap-2'>
                <img src={benefit.icon} alt='' />
                {benefit.title}
              </h3>
              <p className='text-gray-500'>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section id='category'>
        <h2 className='md:text-[39px] text-[32px] text-center mb-[70px] md:mt-0 mt-[90px] font-semibold text-gray-700'>
          Tersedia banyak Kategori yang Sesuai dengan Minat mu!!
        </h2>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:grid-rows-2 gap-4'>
          {categories.map((category) => (
            <div key={category.id} className={`${gradient.purpleToPink} relative p-2 rounded-3xl transition duration-150 ease-out`}>
              <a
                href={category.link}
                className={`hover:text-white card-kategori text-center  flex flex-col items-center justify-between rounded-3xl p-5 w-full h-full bg-white relative outline-${gradient.purpleToPink} hover:scale-110 transition duration-150`}>
                <img className='h-[200px] max-w-full rounded-lg object-contain' src={category.ilustrasi} alt={category.nama} />
                <h3 className={`text-2xl mt-8 ${gradient.textGradient} text-transparent`}>{category.nama}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id='cta' className='grid grid-cols-2'>
        <div className='left'>
          <img src={piala} alt='' />
        </div>
        <div className='right bg-red-500'>
          <div className={`${Home.container.defaultContainer} ${Home.container.gap} `}>
            <div className={`${Home.content} ${Home.container.width}`}>
              <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>
                Segera Bergabung dan Menangkan Hadiahnya!
              </h1>
              <p className={Home.paragraph}>
                Ikuti lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang!.
              </p>
              <div className=''>
                <Button children='Jelajahi' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
