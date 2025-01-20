import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <img
        src="https://i.postimg.cc/L5t8RXFr/6342464.jpg" 
        alt="404 Error"
        className="max-w-full h-auto"
      />
      <h1 className="text-4xl font-bold mt-4">Page Not Found</h1>
      <p className="text-lg mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;
