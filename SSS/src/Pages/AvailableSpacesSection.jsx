import React from 'react';
import SpaceButton from './SpaceButton';
import BookingButton from './BookingButton';

const spaceData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55932499eb0ee298ba31f8bf995d420c5c660e3beca109e982091389342e69b5?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Football icon", label: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5b1c5765ef65d96583a3d776e50572952ef36728a34966232ec3d3a8162fced?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Cricket icon", label: "Cricket Nets" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/273c5f62c132f3faa4ceb4f4ef4e278c9d7ad182a7d3d92e8485ab0a68f46735?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Table Tennis icon", label: "Table Tennis" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae7d48eee36d3a43dbfea0bfc4addc8cd64dbad5140dc4bd20bd7aa8d708419?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Badminton icon", label: "Badminton" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/212ae4d1dc7965358e210224646204f9765ad646d788900f0be378ff76552dce?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Pickle Ball icon", label: "Pickle Ball" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea7b457fa9678747ba9115a561b0a8392eebc4ffa6d80fd26a51364c3198d3a1?placeholderIfAbsent=true&apiKey=255c12830b254ce88f1fb2f0fec3dd68", alt: "Party Hall icon", label: "Party Hall" }
];

function AvailableSpaces() {
  return (
    <main className="flex items-center justify-center min-h-screen px-5 py-10 bg-white">
      <div className="flex flex-col w-full max-w-[1087px] text-center">
        <h1 className="text-6xl font-extrabold font-montserrat text-black max-md:text-3xl">
          Available spaces:
        </h1>
        <section className="flex flex-wrap gap-10 justify-center mt-10">
          {spaceData.map((space, index) => (
            <SpaceButton key={index} icon={space.icon} alt={space.alt} label={space.label} />
          ))}
        </section>
        <div className="mt-10 flex flex-col">
          <BookingButton />
        </div>
      </div>
    </main>
  );
}

export default AvailableSpaces;
