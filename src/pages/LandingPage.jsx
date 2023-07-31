import { Jumbotron, Button } from "../components";
import { benefits, categories } from "../constants";
import { headerStyle, gradient, Home } from "../style";
import piala from "../assets/images/piala.svg";
import { Link } from "react-router-dom";

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
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Standard plan</h5>
            <div className='flex items-baseline text-gray-900 dark:text-white'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49</span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3 items-center'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>2 team members</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>20GB Cloud storage</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Integration help</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Complete documentation</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>24×7 phone & email support</span>
              </li>
            </ul>
            <button
              type='button'
              className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Choose plan
            </button>
          </div>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Standard plan</h5>
            <div className='flex items-baseline text-gray-900 dark:text-white'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49</span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3 items-center'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>2 team members</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>20GB Cloud storage</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Integration help</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Complete documentation</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>24×7 phone & email support</span>
              </li>
            </ul>
            <button
              type='button'
              className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Choose plan
            </button>
          </div>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Standard plan</h5>
            <div className='flex items-baseline text-gray-900 dark:text-white'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49</span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3 items-center'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>2 team members</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>20GB Cloud storage</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Integration help</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Complete documentation</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>24×7 phone & email support</span>
              </li>
            </ul>
            <button
              type='button'
              className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Choose plan
            </button>
          </div>
          <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Standard plan</h5>
            <div className='flex items-baseline text-gray-900 dark:text-white'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>49</span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3 items-center'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>2 team members</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>20GB Cloud storage</span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Integration help</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>Complete documentation</span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  className='flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>24×7 phone & email support</span>
              </li>
            </ul>
            <button
              type='button'
              className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Choose plan
            </button>
          </div>
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
          <p className={`${Home.paragraph} text-gray-100 text-base`}>
            Apakah kamu gemar berkompetisi dan mencari tantangan baru? Temukan beragam info lomba menarik dan seru di website kami! Mulai dari lomba
            visual, gaming, teknologi, umum dan banyak lagi.
          </p>
          <div className=''>
            <Link to='/register'>
              <Button children='Daftar Sekarang!' />
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
          <h2 id='accordion-flush-heading-1'>
            <button
              type='button'
              className='px-5 rounded-lg text-[32px] mt-[80px] flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-1'
              aria-expanded='true'
              aria-controls='accordion-flush-body-1'>
              <span>What is Competiverse?</span>
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
          <div id='accordion-flush-body-1' className='hidden' aria-labelledby='accordion-flush-heading-1'>
            <div className='py-5 border-b border-gray-200 dark:border-gray-700 px-5 rounded-lg'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                navbars, and more.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out this guide to learn how to{" "}
                <a href='/docs/getting-started/introduction/' className='text-blue-600 dark:text-blue-500 hover:underline'>
                  get started
                </a>{" "}
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-2'>
            <button
              type='button'
              className='px-5 rounded-lg text-[32px] flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-2'
              aria-expanded='false'
              aria-controls='accordion-flush-body-2'>
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon
                className='w-3 h-3 rotate-180 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5' />
              </svg>
            </button>
          </h2>
          <div id='accordion-flush-body-2' className='hidden' aria-labelledby='accordion-flush-heading-2'>
            <div className='py-5 border-b border-gray-200 dark:border-gray-700 px-5 rounded-lg'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in
                our Figma file.
              </p>
              <p className='text-gray-500 dark:text-gray-400'>
                Check out the{" "}
                <a href='https://flowbite.com/figma/' className='text-blue-600 dark:text-blue-500 hover:underline'>
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </div>
          </div>
          <h2 id='accordion-flush-heading-3'>
            <button
              type='button'
              className='px-5 rounded-lg text-[32px] flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
              data-accordion-target='#accordion-flush-body-3'
              aria-expanded='false'
              aria-controls='accordion-flush-body-3'>
              <span>What are the differences between Flowbite and Tailwind UI?</span>
              <svg
                data-accordion-icon
                className='w-3 h-3 rotate-180 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5' />
              </svg>
            </button>
          </h2>
          <div id='accordion-flush-body-3' className='hidden' aria-labelledby='accordion-flush-heading-3'>
            <div className='py-5 border-b border-gray-200 dark:border-gray-700 px-5 rounded-lg'>
              <p className='mb-2 text-gray-500 dark:text-gray-400 '>
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid
                product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of
                pages.
              </p>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you
                from using the best of two worlds.
              </p>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>Learn more about these technologies:</p>
              <ul className='pl-5 text-gray-500 list-disc dark:text-gray-400'>
                <li>
                  <a href='https://flowbite.com/pro/' className='text-blue-600 dark:text-blue-500 hover:underline'>
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a href='https://tailwindui.com/' rel='nofollow' className='text-blue-600 dark:text-blue-500 hover:underline'>
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
