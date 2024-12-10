function ButtonOutline({ children, className, clickHandle = null }) {
  return (
    <button onClick={clickHandle} className={`hover:bg-[#e8e8e8] px-5 py-[.4rem] flex items-center gap-2 bg-[#fff] border-2 border-[#E8E8E8] rounded-full text-[#000]  transition-all duration-300 ${className}`}>
      {children}
    </button>
  );
}

export default ButtonOutline;
