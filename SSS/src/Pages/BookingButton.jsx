import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingButton() {
  const navigate = useNavigate();
  const whatsappMessage = encodeURIComponent("Hello, I would like to book a slot.");

  return (
    <div className="flex flex-col">
      <button
        onClick={() => window.open(`https://wa.me/+919840203712?text=${whatsappMessage}`, '_blank')}
        className="self-center px-12 py-1.5 mt-20 max-w-full text-5xl font-bold text-center text-white bg-green-400 rounded-[40px] w-[403px] max-md:px-5 max-md:mt-10 max-md:text-4xl hover:bg-white hover:border-green-400 hover:text-green-400"
      >
        Book Now
      </button>
      <button
        onClick={() => navigate('/contact')}
        className="self-center px-11 py-1.5 mt-8 max-w-full text-3xl font-semibold text-center text-green-400 border border-green-400 border-solid rounded-[40px] w-[340px] max-md:px-5 max-md:mt-10"
      >
        Bulk / Corporate
      </button>
    </div>
  );
}

export default BookingButton;
