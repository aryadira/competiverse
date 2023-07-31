import { Button } from "../components";
import { Link } from "react-router-dom";
import { gradient } from "../style";

const Login = () => {
  return (
    <div className='mx-auto max-w-screen min-h-screen text-black md:px-10 px-3'>
      <div className='flex'>
        <div className='mx-auto flex items-center flex-col'>
          <div className='mt-[60px] mb-[40px] text-center'>
            <div className='font-semibold sm:text-[56px]  text-5xl mb-3 title flex flex-wrap text-center'>
              Login <span className={`${gradient.textGradient} sm:ml-2 ml-0`}>Competiverse</span>
              <img src='' alt='' />
            </div>
            <p className='sm:text-2xl text-lg text-left sm:text-center text-[#767676] leading-8'>
              Daftar dulu sebelum mengikuti lomba, <br />
              dapatkan pengalaman dan hadiahnya!!
            </p>
          </div>
          <form className='w-[370px]'>
            <div className='flex flex-col gap-6'>
              <div>
                <label htmlFor='email' value='Enter your email address' />
                <input placeholder='example@example.com' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
              <div>
                <label htmlFor='email' value='Enter your password' />
                <input placeholder='password' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
            </div>
            <div className='grid space-y-[14px] mt-[30px] w-full text-center'>
              <Link href='/beranda' className='w-full'>
                <Button type='button' className='w-full'>
                  <span className='text-base text-white'>Mulai Sekarang!</span>
                </Button>
              </Link>
              <Link href='/register'>
                <button type='button'>
                  <span className='text-base text-gray-700 hover:underline'>Belum punya akun? buat akun baru disini</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
