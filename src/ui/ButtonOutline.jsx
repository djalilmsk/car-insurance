function ButtonOutline({ children }) {
  return (
    <button className="hover:bg-[#000] px-5 py-[.4rem] flex items-center gap-2 bg-[#fff] border-2 border-[#E8E8E8] rounded-full text-[#000] hover:text-[#fff] transition-all duration-300">
      {children}
    </button>
  );
}

export default ButtonOutline;
