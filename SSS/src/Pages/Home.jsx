import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website</h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        This is the home page of our Vite-powered React app.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;