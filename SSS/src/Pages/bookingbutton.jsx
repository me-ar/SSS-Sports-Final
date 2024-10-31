import React from 'react';

function BookingButtons() {
  return (
    <>
      <button className="self-center px-16 py-1.5 mt-28 ml-20 max-w-full text-5xl font-bold text-center text-white bg-green-400 rounded-[40px] w-[403px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        Book Now
      </button>
      <button className="self-center px-11 py-1.5 mt-10 ml-20 max-w-full text-3xl font-semibold text-center text-green-400 border border-green-400 border-solid rounded-[40px] w-[340px] max-md:px-5 max-md:mt-10">
        Bulk / Corporate
      </button>
    </>
  );
}

export default BookingButtons;