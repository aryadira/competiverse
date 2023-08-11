import BoxContainer from "../layouts/BoxContainer";
import { NavLink } from "react-router-dom";
import { Logo } from "../components";
import { headerStyle } from "../style.js";

const Navbar = ({ pages, ...props }) => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between} top-0`}>
      <BoxContainer className='w-full'>
        <nav className={`${headerStyle.layout.between}`}>
          <Logo className='text-xl ml-2' />
          <ul className={`md:${headerStyle.ul.layout} hidden`}>
            <li onClick={refreshPage}>
              <NavLink to={pages.beranda} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to={pages.lomba}
                className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}
                id='dropdownHoverButton'
                data-dropdown-toggle='dropdownHover'
                data-dropdown-trigger='hover'>
                Lomba
              </NavLink>
            </li>
            <li>
              <NavLink to={pages.jadwal} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Jadwal
              </NavLink>
            </li>
            <li onClick={refreshPage}>
              <NavLink to={pages.riwayat} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Riwayat
              </NavLink>
            </li>
          </ul>
          <ul className={`${headerStyle.ul.bground} ${headerStyle.ul.layout} md:${headerStyle.ul.layout} hidden`}>
            <li>
              <NavLink to={pages.login} className={`${headerStyle.link.base} hover:text-gray-300`}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={pages.register} className={`${headerStyle.link.base} ${headerStyle.link.focus} ${headerStyle.link.hoverBg}`}>
                Register
              </NavLink>
            </li>
          </ul>

          {/* hamburger menu */}
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
          <div className='hidden w-[85%] md:hidden absolute top-[60px] bg-white' id='navbar-hamburger'>
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
