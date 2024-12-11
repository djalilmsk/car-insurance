import { useRouteError, Link, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);

  const errorStatus = error?.status === 404 ? error.status : "Unknown Error";
  const errorMessage =
    error?.status === 404
      ? "Sorry, this page is not found."
      : "Something went wrong.";

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-center px-8">
      <h4
        className={`mb-5 text-center ${
          error?.status === 404 ? "text-9xl" : "text-7xl uppercase"
        } text-primary`}
      >
        {errorStatus}
      </h4>
      <p className="text-center text-xl text-gray-500">{errorMessage}</p>
      {error?.status === 404 ? (
        <Link to="/" className="btn mt-5 text-lg text-primary">
          Go Back to Home
        </Link>
      ) : (
        <span
          className="btn mt-5 text-lg text-primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </span>
      )}
    </main>
  );
}

export default Error;
