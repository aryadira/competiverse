import { useParams } from "react-router-dom";
import { competitions } from "../constants";

const DetailLomba = () => {
  const { id } = useParams();

  const labelCategories = {
    teknologi: "text-xs py-[1px] px-2 bg-blue-100 border-[1px] text-blue-400 border-blue-300 inline-block rounded-full",
    visual: "text-xs py-[1px] px-2 bg-purple-100 border-[1px] text-purple-400 border-purple-300 inline-block rounded-full",
    umum: "text-xs py-[1px] px-2 bg-green-100 border-[1px] text-green-400 border-green-300 inline-block rounded-full",
    gaming: "text-xs py-[1px] px-2 bg-pink-100 border-[1px] text-pink-400 border-pink-300 inline-block rounded-full",
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

  return (
    <>
      <a href='/lomba'>kembali</a>

      <div className='w-full h-auto grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
        {result.map((competition) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div>
              <img src={competition.poster} className='object-cover w-full h-full object-top' />
            </div>
            <div>
              <div>
                <p className={labelColor(competition.category)}>{competition.category}</p>
                <h3 className='mt-[3px] font-[900] text-xl text-[#444444] truncate block'>{competition.title}</h3>
                <p className='mb-5 text-gray-400 text-sm'>{competition.regisdate}</p>
              </div>
              <div className='flex w-full justify-between items-end '>
                <h3 className='text-[#6C63FF] font-bold text-2xl'>{competition.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailLomba;
