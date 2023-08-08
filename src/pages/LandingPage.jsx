import { Jumbotron, Button } from "../components";
import { benefits, categories, creatorPackages, faqs } from "../constants";
import { gradient, Home } from "../style";
import { Link } from "react-router-dom";
import piala from "../assets/images/piala.svg";

const LandingPage = () => {
  return (
    <div>
      <Jumbotron />
      <section id='benefit'>
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
      <section id='category' className=' h-auto'>
        <h2 className='md:text-[39px] text-[32px] text-center mb-[70px] md:mt-0 mt-[90px] font-semibold text-gray-700'>
          Tersedia banyak Kategori yang Sesuai dengan Minat mu!!
        </h2>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:grid-rows-1 my-[40px] gap-4'>
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

      <section className='pricing '>
        <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} text-4xl text-center  mt-[100px] mb-[50px] `}>
          Pilih paket Creator Lomba sesuai kebutuhan Anda!
        </h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 relative'>
          {creatorPackages.map((creatorPackage) => (
            <div
              className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'
              key={creatorPackage.id}>
              <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>{creatorPackage.level}</h5>
              <div className='flex items-baseline text-gray-900 dark:text-white'>
                <span className='text-3xl font-semibold tracking-tight flex flex-wrap'>
                  {creatorPackage.price}
                  <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/tahun</span>
                </span>
              </div>
              <ul role='list' className='min-h-[280px] space-y-5 my-7'>
                {creatorPackage.benefits.map((benefit) => (
                  <li className='flex space-x-3 items-center' key={benefit.id}>
                    <svg
                      className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                    </svg>
                    <span className='text-[15px] font-normal leading-tight text-gray-500 dark:text-gray-400'>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className={`block w-full`}>Choose Plan</Button>
            </div>
          ))}
        </div>
      </section>

      <section id='cta' className={`grid lg:grid-cols-2 grid-cols-1 items-center my-[100px] ${gradient.blueToPurple} rounded-xl shadow-lg p-[30px]`}>
        <div className='left hidden items-center justify-start md:flex'>
          <img src={piala} alt='' className='hidden lg:flex' />
        </div>
        <div className='right  my-[50px] md:my-0 '>
          <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} xl:text-5xl lg:text-4xl text-3xl text-white`}>
            Segera Bergabung dan <br />
            Menangkan Hadiahnya!
          </h1>
          <p className={`${Home.paragraph} text-white text-base`}>
            Apakah kamu gemar berkompetisi dan mencari tantangan baru? Temukan beragam info lomba menarik dan seru di website kami! Mulai dari lomba
            visual, gaming, teknologi, umum dan banyak lagi.
          </p>
          <div className=''>
            <Link to='/register'>
              <Button children='Daftar Sekarang!' navHasLink={`/register`} />
            </Link>
          </div>
        </div>
      </section>
      <section id='faq' className='mb-[100px]'>
        <h1 className={`${Home.heading.defaultHeading} ${Home.heading.fontWeightBold} text-4xl text-center `}>Frequently Ask Questions (FaQ)</h1>

        <div
          id='accordion-flush'
          data-accordion='collapse'
          data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
          data-inactive-classes='text-gray-500 dark:text-gray-400'>
          {faqs.map((faq) => (
            <div key={faq.id}>
              <h2 id={`accordion-flush-heading-${faq.id}`}>
                <button
                  type='button'
                  className='px-5 rounded-lg text-[32px] mt-[80px] flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                  data-accordion-target={`#accordion-flush-body-${faq.id}`}
                  aria-expanded='true'
                  aria-controls={`accordion-flush-body-${faq.id}`}>
                  <span>{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className='w-3 h-3 rotate-180 shrink-0 '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'>
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5' />
                  </svg>
                </button>
              </h2>
              <div id={`accordion-flush-body-${faq.id}`} className='hidden' aria-labelledby={`accordion-flush-heading-${faq.id}`}>
                <div className='py-5 border-b border-gray-200 dark:border-gray-700 px-5 rounded-lg'>
                  <p className='text-gray-500 dark:text-gray-400'>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
