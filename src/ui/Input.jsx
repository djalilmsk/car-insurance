function Input({
  ClassName,
  Placeholder,
  Type = "text",
  Name,
  defaultValue,
}) {
  return (
    <input
      type={Type}
      placeholder={Placeholder}
      className={`${ClassName} input focus:outline-none focus:ring-1 focus:ring-primary border-2 border-[#e8e8e8]`}
      name={Name}
      defaultValue={defaultValue}
      required
    />
  );
}

export default Input;
