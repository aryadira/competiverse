const headerStyle = {
  base: "w-full backdrop-blur-sm bg-white/40 py-3 px-0 fixed",
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
    hover: "hover:bg-slate-100",
    focus: "py-2 px-4 bg-white text-[#6A5AE0] rounded-full",
  },
};

export default headerStyle;
