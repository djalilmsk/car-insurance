import { useNavigation } from "react-router-dom";

function SubmitButton({ children, ClassName = "btn" }) {
  const navigation = useNavigation();
  const isSubmitted = navigation?.state === "submitting";
  const loader = isSubmitted
    ? " btn-disabled"
    : "";

  return (
    <button type="submit" className={ClassName + loader}>
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
