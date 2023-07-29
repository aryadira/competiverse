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
    bground: "bg-[#6A5AE0] px-2 py-3 rounded-full text-white",
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
  textGradient: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-semibold",
};
