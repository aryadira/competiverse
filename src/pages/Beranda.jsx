import { Button, } from "../components";

const Home = {
  section: "transparent dark:bg-gray-900   flex justify-center",
  container: "py-8 px-4 max-w-screen-xl lg:py-16 gap-8 lg:gap-16 text-center w-[700px]",
  heading: "mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-light",
  content: "flex flex-col justify-center",
  paragraph: "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
};

const Beranda = () => {
  return (
    <section id="berandaHeader" className={Home.section}>
      <div className={Home.container}>
        <div className={Home.content}>
          <h1 className={Home.heading}>Temukan. Cari Lomba yang Anda Minati!!</h1>
          <p className={Home.paragraph}>
            Temukan lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang.
          </p>
          <div className='flex justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <Button children="Temukan" /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
