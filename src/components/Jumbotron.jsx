import rightImg from "../assets/images/right-img.svg";
import headerStyle from "../style";
import Button from "./Button";
import Gradient from "./Gradient";

const Jumbotron = ({heading, paragraph, ...props}) => {
  return (
    <section className='dark:bg-gray-900 h-max'>
      <div className='mx-auto grid lg:grid-cols-2 justify-between w-full'>
        <div className='flex flex-col justify-center '>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white'>
            Bingung Cari Lomba? <br />
            <span className={`text-3xl md:text-5xl lg:text-5xl ${headerStyle.logo.style}`}>Competiverse</span> solusinya!
          </h1>
          <p className='mb-8 text-md font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
            Dengan kehadiran Competiverse, mencari lomba tidak akan pernah menjadi masalah lagi. Platform ini menyediakan beragam lomba menarik dari
            berbagai penyelenggara. Kemudahan dan efisiensinya membuat proses pencarian lomba menjadi jauh lebih praktis dan efektif.
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <Button children='Get Started' />
          </div>
        </div>
        <div className='right flex md:justify-end lg:my-0 mt-20 justify-center items-center'>
          <img src={rightImg} alt='rightimg' />
          <Gradient className='w-[300px] h-[300px]' />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
