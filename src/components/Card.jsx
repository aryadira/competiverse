import React from "react";
import { categories, competitions } from "../constants";
import { Link } from "react-router-dom";

const Card = () => {
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

  return (
    <div className='w-full h-auto grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5'>
      {competitions.map((competition) => (
        // eslint-disable-next-line react/jsx-key
        <a
          href={`/lomba/${competition.category}/${competition.id}`}
          className='bg-white rounded-2xl ml-3 mt-3 drop-shadow-sm relative hover:scale-105 transition-transform hover:drop-shadow-md'>
          <div className='h-[200px] rounded-t-2xl overflow-hidden object-cover;'>
            <img loading='lazy' src={competition.poster} className='object-cover w-full h-full object-top' />
          </div>
          <div className='mt-[8px] mx-[15px] mb-[17px] gap-y-10 '>
            <div className=''>
              <p className={labelColor(competition.category)}>{competition.category}</p>
              <h3 className='mt-[3px] font-[900] text-xl text-[#444444] truncate block'>{competition.title}</h3>
              <p className='mb-5 text-gray-400 text-sm'>{competition.regisdate}</p>
            </div>
            <div className='flex w-full justify-between items-end '>
              <h3 className='text-[#6C63FF] font-bold text-2xl'>{competition.price}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
