export const headerStyle = {
  base: "w-full backdrop-blur-sm bg-white/60 py-3 px-0 fixed z-[100]",
  layout: {
    between: "flex justify-between items-center",
    center: "flex justify-center items-center",
    around: "flex justify-around items-center",
    evenly: "flex justify-evenly items-center",
  },
  logo: {
    style: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-semibold text-transparent",
  },
  ul: {
    layout: "flex items-center gap-2 capitalize",
    bground: "bg-[#6A5AE0] px-2 py-3 rounded-full text-white hover:bg-gradient-to-r from-purple-600 to-pink-500",
  },
  link: {
    base: "py-2 px-4",
    hoverBg: "hover:bg-gray-200",
    hoverText: "hover:text-mainColor",
    focus: "py-2 px-4 bg-white text-[#6A5AE0] rounded-full",
  },
};

export const gradient = {
  purpleToPink: "bg-gradient-to-r from-purple-600 to-pink-500",
  textGradient: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-semibold text-transparent",
};

export const Home = {
  baseColor: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent",
  section: {
    defaultSection: "transparent dark:bg-gray-900 lg:py-10",
    justify: "flex justify-center",
  },
  container: {
    defaultContainer: "py-8 px-4 max-w-screen-xl pb-2",
    gap: "gap-8 lg:gap-16",
    alignText: "text-center",
    width: "w-[700px]",
  },
  heading: {
    defaultHeading: "mb-4 tracking-tight leading-none text-gray-700 dark:text-light",
    fontWeightBold: "font-bold",
    fontWeightExtrabold: "font-extrabold",
    fontSize1: "text-5xl md:text-5xl lg:text-4xl",
    fontSize2: "text-3xl",
    width: "w-[350px] sm:w-[200px]",
  },
  content: "flex flex-col justify-center",
  paragraph: "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300",
};
