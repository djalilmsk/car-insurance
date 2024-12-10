import { useNavigation } from "react-router-dom";

function SubmitButton({ children, ClassName = "btn" }) {
  const navigation = useNavigation();
  const isSubmitted = navigation?.state === "submitting";
  const loader = isSubmitted
    ? " btn-disabled"
    : "";

  return (
    <button type="submit" className={`bg-primary px-5 py-2 flex items-center gap-2 hover:bg-secondary rounded-full hover:text-primary text-secondary transition-all duration-300 ${ClassName} ${loader}`}>
      {isSubmitted ? (
        <>
          Loading <span className="loading loading-spinner loading-xs"></span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default SubmitButton;
