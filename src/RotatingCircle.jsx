import React, { useEffect } from 'react';
import howwework from './assets/howwework-dot.svg';

const RotatingCircle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const circle = document.getElementById('circle');
      const rotation = window.scrollY / 2; // Adjust the divisor to control speed
      circle.style.transform = `rotate(${rotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-[#F7F7F7] p-6 md:p-12 flex items-center justify-end">
      <div
        className="relative w-72 h-72 md:w-96 md:h-96 border-[5px] md:border-[7px] border-black rounded-full flex items-center justify-center"
        id="circle"
      >
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full top-0 left-1/2 transform -translate-x-1/2"
        />
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        />
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        />
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        />
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full top-1/4 right-1/4"
        />
        <img
          src={howwework} alt=""
          className="absolute w-13 h-13 md:w-15 md:h-15 rounded-full bottom-1/4 left-1/4"
        />
      </div>
      <div className="absolute left-6 md:left-12 bottom-6 md:bottom-12 text-left max-w-md ml-10 md:ml-20">
        <h2 className="text-[#888888] font-medium text-xs md:text-sm lg:text-lg">ABOUT US</h2>
        <br/>
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-tight">
          We work <span className="text-[#0DC9C5]">with you,</span><br />
          not for you.
        </h1>
        <br/>
        <p className="font-medium text-xs md:text-sm lg:text-lg text-[#212529] leading-relaxed">
          When you partner with us, we become an extension of your team. We adopt a collaborative process throughout the development journey, working closely with you to deliver the best solutions for your business.
        </p>
        <br/>
        <a
          href="#"
          className="text-black hover:border-b-2 border-black font-medium transition-all text-xs md:text-sm lg:text-lg"
        >
          More about us
        </a>
      </div>
    </div>
  );
};

export default RotatingCircle;