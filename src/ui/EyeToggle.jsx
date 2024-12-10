import { FiEye, FiEyeOff } from "react-icons/fi";

const EyeToggle = ({ handelFunc, state }) => {
  return (
    <label className="swap absolute right-5 top-1/2 -translate-y-1/2">
      <input type="checkbox" checked={state} onChange={handelFunc} />
      <div className="swap-on">
        <FiEye className="h-4 w-4" />
      </div>
      <div className="swap-off">
        <FiEyeOff className="h-4 w-4" />
      </div>
    </label>
  );
};

export default EyeToggle;
