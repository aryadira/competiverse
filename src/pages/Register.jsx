import { Button } from "../components";
import { Link } from "react-router-dom";
import { gradient } from "../style";

const Register = () => {
  return (
    <div className='mx-auto max-w-screen min-h-screen text-black md:px-10 px-3 mb-[100px]'>
      <div className='flex'>
        <div className='mx-auto flex items-center flex-col'>
          <div className='mt-[60px] mb-[40px] text-center'>
            <div className='font-semibold sm:text-[56px]  text-5xl mb-3 title flex flex-wrap text-center'>
              Register <span className={`${gradient.textGradient} sm:ml-2 ml-0`}>Competiverse</span>
              <img src='' alt='' />
            </div>
            <p className='sm:text-2xl text-lg text-left sm:text-center text-[#767676] leading-8'>
              Sudah engga sabar ya mau ikut lomba?? <br />
              daftar dulu sebelum mengikuti lomba!
            </p>
          </div>
          <form className='w-[370px]'>
            <div className='flex flex-col gap-6'>
              <div>
                <label htmlFor='email' value='Nama Lengkap' />
                <input placeholder='Nama Lengkap' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
              <div>
                <label htmlFor='email' value='Masukkan Username' />
                <input placeholder='Username' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
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
                  <span className='text-base text-white'>Daftar Sekarang!</span>
                </Button>
              </Link>
              <Link href='/register'>
                <button type='button'>
                  <span className='text-base text-gray-700 hover:underline'>Sudah punya akun? langsung aja login!!</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
