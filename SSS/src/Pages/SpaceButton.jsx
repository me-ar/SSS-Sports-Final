import React from 'react';

function SpaceButton({ icon, alt, label }) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center px-7 py-14 bg-white rounded-2xl border border-lime-300 border-solid shadow-[4px_4px_1px_rgba(0,0,0,0.25)] max-md:px-5">
      <img loading="lazy" src={icon} alt={alt} className="object-contain w-12 rounded-2xl aspect-[0.43]" />
      {label && (
        <div className="mt-6 text-base text-center text-black">
          {label}
        </div>
      )}
    </div>
  );
}

export default SpaceButton;

