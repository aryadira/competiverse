import React from 'react';
import { recomends } from "../constants";

const Card = () => {

  return (
    <div className="w-full h-auto flex flex-wrap">
      {recomends.map((recomend) => (
        // eslint-disable-next-line react/jsx-key
        <a href="" className="w-[207px] h-[60vh] bg-white rounded-2xl ml-3 mt-3 drop-shadow-md relative">
          <div className="h-[200px] rounded-2xl overflow-hidden object-cover;">
            <img src={recomend.poster} className="object-cover w-full h-full object-top" />
          </div>
          <div className="m-[10px]">
            <p className="text-gray-500">{recomend.tag}</p>
            <h3 className="mt-[3px] font-[900] text-2xl text-[#444444] line-clamp-2 hover:line-clamp-5">{recomend.title}</h3>
            <p className="mt-[3px] text-gray-500 text-sm absolute bottom-10">{recomend.date}</p>
            <div className="flex w-[187px] justify-between mt-[10px] absolute bottom-3">
              <h3 className="text-[#6C63FF] font-bold text-2xl">{recomend.price}</h3>
              <h3 className="text-[#444444] text-xs flex items-center">20Rb+ Peserta</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Card
