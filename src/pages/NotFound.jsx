import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans relative overflow-hidden px-4">
      {/* Animated glowing circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* 404 Text */}
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 tracking-wide mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 text-center max-w-md mb-10 leading-relaxed">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to something better.
      </p>

      {/* Button */}
      <Button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-blue-500/40 transition-all duration-300"
      >
        🏠 Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
