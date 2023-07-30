import { Jumbotron } from "../components";
import { benefits, categories } from "../constants";
import { headerStyle, gradient } from "../style";

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
      <section className=''>
        <h2 className='md:text-[39px] text-[32px] text-center mb-[70px] md:mt-0 mt-[90px] font-semibold text-gray-700'>
          Tersedia banyak Kategori yang Sesuai dengan Minat mu!!
        </h2>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:grid-rows-2 gap-4'>
          {categories.map((category) => (
            <div key={category.id} className={`${gradient.purpleToPink} relative p-2 rounded-3xl transition duration-150 ease-out`}>
              <a
                href={category.link}
                className={`hover:text-white card-kategori text-center  flex flex-col items-center justify-between rounded-3xl p-5 w-full h-full bg-white relative outline-${gradient.purpleToPink} hover:scale-110 transition duration-150`}>
                <img className='h-[200px] max-w-full rounded-lg object-contain' src={category.ilustrasi} alt={category.nama} />
                <h3 className={`text-2xl mt-8 ${gradient.textGradient} text-transparent`}>{category.nama}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
