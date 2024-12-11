import { useNavigate, useNavigation } from 'react-router-dom';

function SubmitButton({
  children,
  ClassName = 'btn',
  onClick = null,
  navigating = false,
}) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitted = navigation?.state === 'submitting';
  const loader = isSubmitted ? ' btn-disabled' : '';

  if (navigating && !isSubmitted) {
    navigate('/');
  }

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary ${ClassName} ${loader}`}
    >
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
