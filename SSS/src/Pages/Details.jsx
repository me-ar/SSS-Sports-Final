import React from 'react';

const Details = () => {
  const images = [
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 1', caption: 'Detail 1' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 2', caption: 'Detail 2' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 3', caption: 'Detail 3' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 4', caption: 'Detail 4' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 5', caption: 'Detail 5' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 6', caption: 'Detail 6' },
    { src: 'https://via.placeholder.com/300', alt: 'Detail Image 7', caption: 'Detail 7' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;