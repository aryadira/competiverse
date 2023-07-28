import { Jumbotron } from "../components";
import { benefits } from "../constants";

const LandingPage = () => {
  return (
    <div>
      <Jumbotron />
      <section className=''>
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
    </div>
  );
};

export default LandingPage;
