function Button({ children }) {
  return (
    <button className="hover:bg-primary px-5 py-2 flex items-center gap-2 bg-secondary rounded-full text-primary hover:text-secondary transition-all duration-300">
      {children}
    </button>
  );
}

export default Button;
