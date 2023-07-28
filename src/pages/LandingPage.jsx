import { Jumbotron } from "../components";

const LandingPage = () => {
  return (
    <div>
      <Jumbotron />
      <section className=''>
        <h2 className='text-[42px] text-center'>Kenapa harus memilih Competiverse?</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:grid-rows-2 gap-4'>
          <div className='card flex p-[1.5625rem] flex-col items-start gap-[1.25rem] rounded-[1.5625rem] border-2 border-solid border-6A5AE0 bg-white'>
            <h3>Efisien</h3>
            <p>Tidak perlu bersusah-payah mencari lomba yang tersebar</p>
          </div>
          <div className='card flex p-[1.5625rem] flex-col items-start gap-[1.25rem] rounded-[1.5625rem] border-2 border-solid border-6A5AE0 bg-white'>
            <h3>Efisien</h3>
            <p>Tidak perlu bersusah-payah mencari lomba yang tersebar</p>
          </div>
          <div className='card flex p-[1.5625rem] flex-col items-start gap-[1.25rem] rounded-[1.5625rem] border-2 border-solid border-6A5AE0 bg-white'>
            <h3>Efisien</h3>
            <p>Tidak perlu bersusah-payah mencari lomba yang tersebar</p>
          </div>
          <div className='card flex p-[1.5625rem] flex-col items-start gap-[1.25rem] rounded-[1.5625rem] border-2 border-solid border-6A5AE0 bg-white'>
            <h3>Efisien</h3>
            <p>Tidak perlu bersusah-payah mencari lomba yang tersebar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
