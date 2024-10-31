import React from 'react';

const About = () => {
  return (
    <section
      data-layername="deskAbout"
      className="flex overflow-hidden overflow-x-auto flex-col text-black bg-white text-7xl font-extrabold max-md:text-4xl"
    >
      <div className="flex z-10 flex-col items-start px-20 pt-48 w-full bg-white bg-opacity-80 pb-[501px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <header className="flex flex-col mb-0 w-[466px] max-md:mb-2.5 max-md:text-4xl">
          <h1
            data-layername="aBoutUs"
            className="font-montserrat text-center max-md:text-4xl"
          >
            About Us:
          </h1>
        </header>
        <p className="mt-[50px] font-normal font-montserrat text-6xl">
          We provide a multilevel space for various sports to practise and achieve your goals. We offer coaching and slot-based space for the sport of your choice. We assure you a quality and valuable space for your practice and provide offers on special occasions.
        </p>
      </div>
    </section>
  );
};

export default About;
