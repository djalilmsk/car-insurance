function DeleteButton({ children, className, clickHandle = null }) {
  return (
    <button
      onClick={clickHandle === null ? '': clickHandle}
      className={`flex items-center rounded-full bg-[#ffeded] px-5 py-2 text-[#dd4545] transition-all duration-300 hover:bg-[#dd4545] hover:text-[#ffeded] ${className}`}
    >
      {children}
    </button>
  );
}

export default DeleteButton;
