import { Button } from "../components";
import { recomends } from "../constants"

const Home = {
  baseColor: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent",
  section: {
    defaultSection: "transparent dark:bg-gray-900 lg:py-10",
    justify: "flex justify-center",
  },
  container: {
    defaultContainer: "py-8 px-4 max-w-screen-xl pb-2",
    gap: "gap-8 lg:gap-16",
    alignText: "text-center",
    width: "w-[700px]"
  },
  heading: {
    defaultHeading: "mb-4 tracking-tight leading-none text-gray-900 dark:text-light",
    fontWeightBold: "font-bold",
    fontWeightExtrabold: "font-extrabold",
    fontSize1: "text-5xl md:text-5xl lg:text-4xl",
    fontSize2: "text-xl",
    width:"w-[300px]"
  },
  content: "flex flex-col justify-center",
  paragraph: "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
};

const Beranda = () => {
  return (
    <>
    <section id="berandaHeader" className={`${Home.section.defaultSection} ${Home.section.justify}`}  >
      <div className={`${Home.container.defaultContainer} ${Home.container.gap} ${Home.container.alignText}  ${Home.container.width}`}>
        <div className={Home.content}>
          <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>Temukan. Cari Lomba yang Anda Minati!!</h1>
          <p className={Home.paragraph}>
            Temukan lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang.
          </p>
          <div className='flex justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <Button children="Temukan" /> 
          </div>
        </div>
      </div>
    </section>
    <section id="recomendCard" className={Home.section.defaultSection}>
      <div className={Home.container.defaultContainer}>
        <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightExtrabold} ${Home.heading.fontSize2} ${Home.baseColor} ${Home.heading.width}`}>Rekomendasi Untuk Anda</h1>
      </div>
      <div className="w-full h-auto flex flex-wrap">
        {recomends.map((recomend) => (
          <>
          <a href="" className="w-[207px] h-[60vh] bg-white rounded-2xl ml-3 mt-3 drop-shadow-md relative">
            <div className="h-[200px] rounded-2xl overflow-hidden object-cover;">
              <img src={recomend.poster} className="object-cover w-full h-full object-top" />
            </div>
            <div className="m-[10px]">
              <p className="text-gray-500">{recomend.tag}</p>
              <h3 className="mt-[3px] font-[900] text-2xl text-[#444444]">{recomend.title}</h3>
              <p className="mt-[3px] text-gray-500 text-sm absolute bottom-10">{recomend.date}</p>
              <div className="flex w-[187px] justify-between mt-[10px] absolute bottom-3">
                <h3 className="text-[#6C63FF] font-bold text-2xl">{recomend.price}</h3>
                <h3 className="text-[#444444] text-xs flex items-center">20Rb+ Peserta</h3>
              </div>
            </div>
          </a>
          </>
        ))}
      </div>
      
    </section>
    </>
  );
};

export default Beranda;
