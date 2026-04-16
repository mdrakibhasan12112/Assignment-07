import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      
      {/* Big 404 */}
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-center max-w-md mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/" className="mt-6">
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
          ⬅ Back to Home
        </button>
      </Link>

      {/* Floating glow */}
      <div className="absolute w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full top-10 left-10 "></div>
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 "></div>
    </div>
  );
};

export default NotFound;