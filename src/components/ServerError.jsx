import React from "react";
import serverErrorImage from "../assets/server-down.png";

const ServerErrorPage = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={serverErrorImage} alt="Server Error" className="w-96 mx-auto" />
      <h3 className="text-4xl font-semibold">500</h3>
      <p className="text-gray-600 text-3xl mt-2">
        Oops! Something went wrong on our servers. Please try again later.
      </p>
      <p
        className="mt-6 inline-block bg-blue-500 text-xl cursor-pointer text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Go to Homepage
      </p>
    </div>
    </>
  );
};

export default ServerErrorPage;
