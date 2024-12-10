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
      className={`${ClassName} input bg-base-300 focus:ring-1 focus:ring-primary`}
      name={Name}
      defaultValue={defaultValue}
      required
    />
  );
}

export default Input;
