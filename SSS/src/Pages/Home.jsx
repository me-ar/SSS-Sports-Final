import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5 text-center">
      <h1 className="text-[80px] font-extrabold text-black font-montserrat">
        RENT THE SPACE
      </h1>
      <p className="text-[50px] text-black font-montserrat font-bold">
        for your favourite sport
      </p>
      <div className="space-x-4 mt-4">
        {/* Add any additional buttons or content here */}
      </div>
    </div>
  );
};

export default Home;
