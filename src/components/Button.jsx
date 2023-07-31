import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gradient } from "../style";

const Button = ({ className, children, navHasLink }) => {
  return (
    <Link
      to={navHasLink}
      className={`${className} inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-mainColor hover:${gradient.purpleToPink} ease-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900`}>
      {children}
      <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
      </svg>
    </Link>
  );
};

export default Button;
