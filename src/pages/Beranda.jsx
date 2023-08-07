import { Button, ModalSearch } from "../components";
import { Card } from "../components";
import { gradient, headerStyle, Home } from "../style";
import { FiSearch } from "react-icons/fi";

const Beranda = (props) => {
  return (
    <>
      <section id='berandaHeader' className={`${Home.section.defaultSection} ${Home.section.justify}`}>
        <div className={`${Home.container.defaultContainer} ${Home.container.gap} ${Home.container.alignText}  ${Home.container.width}`}>
          <div className={Home.content}>
            <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} ${Home.heading.fontSize1}`}>
              <span className={gradient.textGradient}>Temukan.</span> Cari Lomba yang Anda Minati!!
            </h1>
            <p className={Home.paragraph}>
              Temukan lomba-lomba menarik sesuai minat dan bakat Anda. Raih
              <br /> prestasi gemilang dalam passion Anda. Bergabunglah sekarang.
            </p>
            <div className='flex justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <button
                data-modal-target='medium-modal'
                data-modal-toggle='medium-modal'
                className={`flex items-center px-2.5 py-2 z-20 text-lg w-[600px] text-gray-500 bg-gray-100 hover:bg-gray-200  rounded-lg border-2 border-gray-400 hover:border-mainColor dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
                type='button'>
                <FiSearch className='mr-3' /> Cari Lomba
              </button>
            </div>

            {/* Search Modal */}
            <div
              id='medium-modal'
              tabindex='-1'
              className='fixed top-0 left-0 right-0 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-[100]'>
              <div className='relative w-full max-w-lg max-h-full'>
                <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 p-5'>
                  <ModalSearch />

                  <div className='mt-2'>
                    <div className='text-left text-gray-400 my-3'>Terkini</div>
                    <div className='w-full bg-gray-100 my-2 hover:bg-purple-200 hover:text-purple-500 cursor-pointer p-3 text-left rounded-lg text-[#666]'>
                      Lomba Poster
                    </div>
                    <div className='w-full bg-gray-100 my-2 hover:bg-purple-200 hover:text-purple-500 cursor-pointer p-3 text-left rounded-lg text-[#666]'>
                      Lomba Fotografi
                    </div>
                    <div className='w-full bg-gray-100 my-2 hover:bg-purple-200 hover:text-purple-500 cursor-pointer p-3 text-left rounded-lg text-[#666]'>
                      Lomba Data Sains
                    </div>
                    <div className='w-full bg-gray-100 my-2 hover:bg-purple-200 hover:text-purple-500 cursor-pointer p-3 text-left rounded-lg text-[#666]'>
                      Lomba Matematika
                    </div>
                  </div>
                </div>
              </div>
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
