import React from 'react';

const About = () => {
  return (
    <section
      data-layername="deskAbout"
      className="flex items-center justify-center text-black bg-white text-7xl font-extrabold h-screen max-md:text-4xl"
    >
      <div className="flex flex-col items-center text-center px-5 py-10 w-full max-w-4xl bg-white bg-opacity-80 rounded-lg max-md:text-4xl">
        <header className="mb-5">
          <h1
            data-layername="aBoutUs"
            className="font-montserrat text-center max-md:text-xl"
          >
            About Us:
          </h1>
        </header>
        <p className="mt-0 font-normal font-montserrat text-4xl max-md:text-4xl">
          We provide a multilevel space for various sports to practise and achieve your goals. We offer coaching and slot-based space for the sport of your choice. We assure you a quality and valuable space for your practice and provide offers on special occasions.
        </p>
      </div>
    </section>
  );
};

export default About;
