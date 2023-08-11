import { useParams } from "react-router-dom";
import { competitions } from "../constants";
import { Button } from "../components";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const DetailLomba = () => {
  const { id } = useParams();

  const labelCategories = {
    teknologi: "text-sm py-[1px] px-2 bg-blue-100 border-[1px] text-blue-400 border-blue-300 inline-block rounded-full",
    visual: "text-sm py-[1px] px-2 bg-purple-100 border-[1px] text-purple-400 border-purple-300 inline-block rounded-full",
    umum: "text-sm py-[1px] px-2 bg-green-100 border-[1px] text-green-400 border-green-300 inline-block rounded-full",
    gaming: "text-sm py-[1px] px-2 bg-pink-100 border-[1px] text-pink-400 border-pink-300 inline-block rounded-full",
  };

  function labelColor(category) {
    if (category == "teknologi") {
      return labelCategories.teknologi;
    } else if (category == "visual") {
      return labelCategories.visual;
    } else if (category == "umum") {
      return labelCategories.umum;
    } else if (category == "gaming") {
      return labelCategories.gaming;
    }
  }

  // per id
  let result = competitions.filter(filterByID);

  function filterByID(item) {
    return item.id == id;
  }

  function requirementMap(reqs) {
    return reqs;
  }

  return (
    <section className=''>
      <a href='/lomba'>
        <div className='py-3 px-4 bg-white mt-[20px] inline-block rounded-full shadow-sm'>
          <AiOutlineArrowLeft />
        </div>
      </a>

      <div className='w-full h-auto grid '>
        {result.map((competition) => (
          // eslint-disable-next-line react/jsx-key
          <div className='flex items-center flex-col justify-center mb-10 mt-[50px]'>
            <div className='header'>
              <div className='text-center'>
                <p className={`${labelColor(competition.category)}`}>{competition.category}</p>
                <h3 className='mt-[3px] font-[900] text-[38px] text-[#444444]'>{competition.title}</h3>
                <p className='mb-5 text-gray-400 text-xl'>Pendaftaran : {competition.regisdate}</p>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 text-center my-10 py-10 gap-8'>
                <div className='flex items-center flex-col'>
                  <h3 className='text-xl font-semibold text-[#444]'>Harga </h3>
                  <h4 className='text-2xl font-semibold text-mainColor'>{competition.price}</h4>
                </div>
                <div className='flex items-center flex-col'>
                  <h3 className='text-xl font-semibold text-[#444]'>Guidebook</h3>
                  <a href={competition.guidebook}>
                    <FaBookOpen className='text-mainColor text-2xl my-1' />
                  </a>
                </div>
                <div className='flex items-center flex-col'>
                  <h3 className='text-xl font-semibold text-[#444]'>Sumber </h3>
                  <a href={competition.source} className='text-xl font-semibold text-mainColor'>
                    {competition.account}
                  </a>
                </div>
                <div className='flex items-center flex-col'>
                  <h3 className='text-xl font-semibold text-[#444]'>Peserta</h3>
                  <h4 className='text-xl font-semibold text-mainColor'>1000</h4>
                </div>
              </div>
            </div>
            <div className='content grid-cols-1 grid lg:grid-cols-2 gap-8'>
              <div className='left flex justify-around items-start'>
                <img src={competition.poster} className='object-contain rounded' />
              </div>
              <div className='right p-7 rounded-lg bg-white h-max'>
                <h2 className='font-semibold text-[24px] text-[#444444] text-center mb-5'>Syarat-syarat:</h2>
                <ol className='requirement text-left leading-8 '>
                  {competition.requirements.map((requirement) => (
                    <li key={requirement} className='bg-[#f1f9ff] text-[#13354f] w-full px-8 py-4 rounded-2xl my-3 '>
                      {requirement}
                    </li>
                  ))}
                </ol>
                <Button className={`w-full block my-4`} children={`Daftar Lomba`} href={competition.link} />
              </div>
            </div>

            {/*  timeline */}
            <ol className='items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0'>
              <li className='flex items-center text-blue-600 dark:text-blue-500 space-x-2.5'>
                <span className='flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500'>
                  {competition.timelines.length}
                </span>
                <span>
                  <p className='text-sm'>{competition.timelines}</p>
                </span>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailLomba;
