import notFoundImage from "../assets/not-found.png";

const NotFoundPage = () => {
  return (
    <>
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-gray-100">
      <img src={notFoundImage} alt="Not Found" className="w-96 mx-auto" />
      <h3 className="text-3xl font-semibold">404</h3>
      <p className="text-gray-600 text-wrap text-center px-64 line-clamp-2 text-3xl mt-2">
        We couldn’t connect the dots. This page was not found. You may have
        mistyped the address or the page may have moved.
      </p>
      <p
        className="mt-6 inline-block bg-blue-500 text-xl cursor-pointer text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Take me back to Home
      </p>
    </div>
    </>
  );
};

export default NotFoundPage;
