import React from 'react';
import { Link } from 'react-scroll';

const Animated = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <Link
        to="animatedContent"
        smooth={true}
        duration={500}
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Scroll to Animated Content
      </Link>

      <div id="animatedContent" className="hidden">
        {/* Your animated content here */}
        <h1 className="text-4xl font-bold animate__animated animate__fadeIn">
          Welcome to My Animated Content!
        </h1>
      </div>
    </div>
  );
};

export default Animated;
