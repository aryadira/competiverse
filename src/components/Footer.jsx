import React from "react";
import BoxContainer from "../layouts/BoxContainer";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 relative bottom-0 w-full'>
      <BoxContainer>
        <div className='mx-auto w-full max-w-screen-xl py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <Logo className='text-xl ml-2' />
            </div>
            <div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Kategori</h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li>
                    <a href='/' className='hover:underline'>
                      Teknologi
                    </a>
                  </li>
                  <li>
                    <a href='/' className='hover:underline'>
                      Visual
                    </a>
                  </li>
                  <li>
                    <a href='/' className='hover:underline'>
                      Umum
                    </a>
                  </li>
                  <li>
                    <a href='/' className='hover:underline'>
                      Gaming
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Social Media</h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li>
                    <a href='https://www.instagram.com/aryaadrh_/' className='hover:underline '>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href='https://tiktok.com' className='hover:underline'>
                      Tiktok
                    </a>
                  </li>
                  <li>
                    <a href='https://facebook.com' className='hover:underline'>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com' className='hover:underline'>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2023{" "}
              <a href='/' className='hover:underline'>
                Competiverse™
              </a>
              . All Rights Reserved.
            </span>
            <div>
              <a href='https://www.instagram.com/aryaadrh_/' className='text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:underline '>
                competiverse@gmail.com
              </a>
            </div>
          </div>
        </div>
      </BoxContainer>
    </footer>
  );
};

export default Footer;
