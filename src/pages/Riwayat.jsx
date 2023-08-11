import { Home } from "../style";
import {competitions, categories, recomends} from '../constants'
import { tabElements, options }from '../constants/riwayat'
import '../style'
import { Button } from "../components";

const Riwayat = (props) => {

  const colorTextCategories = {
    teknologi: "text-xs py-[1px] px-2 bg-blue-100 border-[1px] text-blue-400 border-blue-300 inline-block rounded-full",
    visual: "text-xs py-[1px] px-2 bg-purple-100 border-[1px] text-purple-400 border-purple-300 inline-block rounded-full",
    umum: "text-xs py-[1px] px-2 bg-green-100 border-[1px] text-green-400 border-green-300 inline-block rounded-full",
    gaming: "text-xs py-[1px] px-2 bg-pink-100 border-[1px] text-pink-400 border-pink-300 inline-block rounded-full",
  };

  function labelColor(category) {
    if (category == "teknologi") {
      return colorTextCategories.teknologi;
    } else if (category == "visual") {
      return colorTextCategories.visual;
    } else if (category == "umum") {
      return colorTextCategories.umum;
    } else if (category == "gaming") {
      return colorTextCategories.gaming;
    }
  }

  return (
    <section>
    <section id="Jumbotron">
      <div className="flex justify-center items-center w-full h-[70vh]">
        <div id="default-carousel" className="relative w-[70vh]" data-carousel="slide">
          <div className="relative h-auto backdrop-blur-xl overflow-hidden rounded-lg md:h-96">
            {competitions.map((competition) => (
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={competition.poster} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
              </div>
              ))}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        <div className="text-center h-[70vh] p-[10px] w-[100vh] flex items-center">
          <div>
            <h1 className="text-[50px] font-extrabold"><span className={`${Home.baseColor}`}>Riwayat.</span> Lakukan pendaftaran dengan mudah dan cepat!!</h1>
            <p className="text-[20px]">Find any experience from the competitions</p>
          </div>
        </div>
      </div>
    </section>

    {/* Card */}
    <section id="riwayatCard" className="h-auto">
      <div className="mb-4 w-[53vh] border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Riwayat Kunjungan</button>
              </li>
              <li className="mr-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Riwayat Pendafataran</button>
              </li>
          </ul>
      </div>
      <div id="myTabContent">
          <div className="hidden p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          {competitions.map((competition) => (
            <div className="flex bg-white h-[35vh] w-full p-[15px] my-[10px] relative drop-shadow-md rounded-xl">
              <img src={competition.poster} alt="" srcset="" className="w-[40vh] object-cover object-top rounded-md"/>
              <div className="mx-[20px] my-[10px] w-[100vh] relative">
                <h1 className="">
                  <a href="" className="font-extrabold text-[30px] text-[#444444] hover:text-[#6a5ae0]">
                  {competition.title}
                  </a>
                </h1>
                <p className="text-[#444444]">{competition.regisdate}</p>
                <p className={`text-[20px] bg- transparent w-max p-[5px] rounded-full border ${colorTextCategories.base} ${labelColor(competition.category)}`}>{ `${competition.category.charAt(0).toUpperCase()}${competition.category.slice(1)}`}</p>
                <h3 className="absolute bottom-0 text-blue-500 text-xl font-bold">{competition.price}</h3>
              </div>
              <div className="absolute bottom-0 right-0">
                <Button href="" children="Daftar" className="rounded-bl-none rounded-tr-none"/>
              </div>
            </div>
          ))}
          </div>
          <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
          </div>
      </div>
    </section>
    </section>
  )
};

export default Riwayat;
