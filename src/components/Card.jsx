import React from "react";
import { recomends } from "../constants";

const Card = () => {
  const labelCategories = {
    teknologi: "text-xs py-[1px] px-2 bg-blue-100 border-[1px] text-blue-400 border-blue-300 inline-block rounded-full",
    visual: "text-xs py-[1px] px-2 bg-purple-100 border-[1px] text-purple-400 border-purple-300 inline-block rounded-full",
    umum: "text-xs py-[1px] px-2 bg-green-100 border-[1px] text-green-400 border-green-300 inline-block rounded-full",
    gaming: "text-xs py-[1px] px-2 bg-pink-100 border-[1px] text-pink-400 border-pink-300 inline-block rounded-full",
  };

  function labelColor(category) {
    if (category == "Teknologi") {
      return labelCategories.teknologi;
    } else if (category == "Visual") {
      return labelCategories.visual;
    } else if (category == "Umum") {
      return labelCategories.umum;
    } else if (category == "Gaming") {
      return labelCategories.gaming;
    }
  }

  return (
    <div className='w-full h-auto grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
      {recomends.map((recomend) => (
        // eslint-disable-next-line react/jsx-key
        <a href='' className='bg-white rounded-2xl ml-3 mt-3 drop-shadow-sm relative hover:scale-105 transition-transform hover:drop-shadow-md'>
          <div className='h-[200px] rounded-t-2xl overflow-hidden object-cover;'>
            <img src={recomend.poster} className='object-cover w-full h-full object-top' />
          </div>
          <div className='mt-[8px] mx-[15px] mb-[17px] gap-y-10 '>
            <div className=''>
              <p className={labelColor(recomend.tag)}>{recomend.tag}</p>
              <h3 className='mt-[3px] font-[900] text-xl text-[#444444] truncate block'>{recomend.title}</h3>
              <p className='mb-5 text-gray-400 text-sm'>{recomend.date}</p>
            </div>
            <div className='flex w-full justify-between items-end '>
              <h3 className='text-[#6C63FF] font-bold text-2xl'>{recomend.price}</h3>
              <h3 className='text-[#777] text-xs flex items-center'>20Rb+ Peserta</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
