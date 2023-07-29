import BoxContainer from "../layouts/BoxContainer";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import { headerStyle, gradient } from "../style.js";

const Navbar = ({ pages, ...props }) => {
  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between} top-0`}>
      <BoxContainer className='w-full'>
        <nav className={`${headerStyle.layout.between}`}>
          <Logo className='text-xl ml-2' />
          <ul className={`md:${headerStyle.ul.layout} hidden`}>
            <li>
              <Link to={pages.beranda} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to={pages.lomba}
                className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}
                id='dropdownHoverButton'
                data-dropdown-toggle='dropdownHover'
                data-dropdown-trigger='hover'>
                Lomba
              </Link>
              <div id='dropdownHover' className='z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownHoverButton'>
                  <li>
                    <a href='/lomba/teknologi' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Teknologi
                    </a>
                  </li>
                  <li>
                    <a href='/lomba/visual' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Visual
                    </a>
                  </li>
                  <li>
                    <a href='/lomba/umum' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Umum
                    </a>
                  </li>
                  <li>
                    <a href='/lomba/gaming' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Gaming
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to={pages.jadwal} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Jadwal
              </Link>
            </li>
            <li>
              <Link to={pages.riwayat} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Riwayat
              </Link>
            </li>
          </ul>
          <ul className={`${headerStyle.ul.bground} ${headerStyle.ul.layout} md:${headerStyle.ul.layout} hidden`}>
            <li>
              <Link to={pages.login} className={`${headerStyle.link.base} hover:text-gray-300`}>
                Login
              </Link>
            </li>
            <li>
              <Link to={pages.register} className={`${headerStyle.link.base} ${headerStyle.link.focus} ${headerStyle.link.hoverBg}`}>
                Register
              </Link>
            </li>
          </ul>
          <button
            data-collapse-toggle='navbar-hamburger'
            type='button'
            className='z-20 md:hidden inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-hamburger'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          </button>
          <div className='md:hidden inline-flex max-w-screen absolute top-[70px] right-[40px] z-[100] bg-white ' id='navbar-hamburger'>
            <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
              <li>
                <a href='/beranda' className='block py-2 pl-3 pr-4 text-white bg-mainColor rounded dark:bg-blue-600' aria-current='page'>
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href='/lomba'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Lomba
                </a>
              </li>
              <li>
                <a
                  href='/jadwal'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Jadwal
                </a>
              </li>
              <li>
                <a
                  href='/riwayat'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                  Riwayat
                </a>
              </li>
              <li>
                <a
                  href='/login'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Login
                </a>
              </li>
              <li>
                <a
                  href='/register'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </BoxContainer>
    </header>
  );
};

export default Navbar;
