import { useParams } from "react-router-dom";
import { competitions } from "../constants";

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
      <a href='/lomba'>kembali</a>

      <div className='w-full h-auto grid '>
        {result.map((competition) => (
          // eslint-disable-next-line react/jsx-key
          <div className='flex items-center flex-col justify-center'>
            <div className='header'>
              <div className='text-center'>
                <p className={`${labelColor(competition.category)}`}>{competition.category}</p>
                <h3 className='mt-[3px] font-[900] text-[38px] text-[#444444]'>{competition.title}</h3>
                <p className='mb-5 text-gray-400 text-md'>{competition.regisdate}</p>
              </div>
            </div>
            <div className='content flex'>
              <div className='left w-1/2 flex justify-around'>
                <img src={competition.poster} className='object-cover w-[350px] h-full object-top rounded' />
              </div>
              <div className='right w-1/2'>
                <ol className='requirement'>
                  {competition.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailLomba;
