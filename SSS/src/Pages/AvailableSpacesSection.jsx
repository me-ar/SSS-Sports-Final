import React, { useState } from 'react';
import BookingButton from './BookingButton';

function SpaceButton({ icon, alt, label, onClick }) {
  return (
    <button 
      className="flex flex-col items-center p-4 transition-colors bg-gray-200 rounded-lg shadow-md hover:bg-green-300"
      onClick={onClick}
    >
      <img src={icon} alt={alt} className="w-20 h-20 mb-20" />
      {label && <span className="text-lg font-semibold">{label}</span>}
    </button>
  );
}

const spaceData = [
  { icon: "./public/assets/football.png", alt: "Football icon", label: "Football", asset: "/assets/display button football.jpg" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5b1c5765ef65d96583a3d776e50572952ef36728a34966232ec3d3a8162fced?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Cricket icon", label: "Cricket Nets", asset: "/assets/display button crick net.jpg" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/273c5f62c132f3faa4ceb4f4ef4e278c9d7ad182a7d3d92e8485ab0a68f46735?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Table Tennis icon", label: "Table Tennis", asset: "/assets/display button tt.jpg" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae7d48eee36d3a43dbfea0bfc4addc8cd64dbad5140dc4bd20bd7aa8d708419?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Badminton icon", label: "Badminton", asset: "/assets/display button badminton.jpg" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/212ae4d1dc7965358e210224646204f9765ad646d788900f0be378ff76552dce?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Pickle Ball icon", label: "Pickle Ball", asset: "/assets/display button pickle.jpg" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea7b457fa9678747ba9115a561b0a8392eebc4ffa6d80fd26a51364c3198d3a1?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Party Hall icon", label: "Party Hall", asset: "/assets/partyhall.jpg" }
];

function AvailableSpaces() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-5 py-10 bg-white">
      <div className="flex flex-col w-full max-w-[1087px] text-center">
        <h1 className="text-6xl font-extrabold font-montserrat text-black max-md:text-3xl">
          Available Spaces:
        </h1>
        <section className="flex flex-wrap gap-10 justify-center mt-10">
          {spaceData.map((space, index) => (
            <SpaceButton 
              key={index} 
              icon={space.icon} 
              alt={space.alt} 
              label={space.label}
              onClick={() => setSelectedImage(space.asset)}
            />
          ))}
        </section>
        
        {/* Display the selected image if any button is clicked */}
        {selectedImage && (
          <div className="mt-10">
          <img src={selectedImage} alt="Selected space" className="w-80 h-50 max-w-[600px] rounded-lg shadow-md" />
          <button 
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded" 
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <BookingButton />
        </div>
      </div>
    </main>
  );
}

export default AvailableSpaces;
