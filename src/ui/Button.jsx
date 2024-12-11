function Button({ children, className, clickHandle = null }) {
  return (
    <button
      onClick={clickHandle}
      className={`flex items-center rounded-full bg-secondary px-5 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-secondary ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
