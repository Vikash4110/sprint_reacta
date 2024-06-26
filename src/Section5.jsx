import React from 'react';
import airplane from './assets/airplane png.png';
import './Section5.css';

const Section5 = () => {
  return (
    <div className="airplane-animation bg-[#F7F7F7]">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <img src={airplane} className="mx-auto md:col-start-2 md:col-span-2 fly" alt="Airplane" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col justify-center p-8 md:p-36 md:pt-0 space-y-9 text-center col-span-1 md:col-start-2 md:col-span-2">
            <div data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-4xl md:text-6xl font-bold slide-in-up2 opacity-0 custom_opacity_span_h1">
                <span className="text-[#212529]">Get Your Head in the </span>
                <span className="text-[#0DC9C5]">Clouds</span>
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
              <p className="font-medium">
                Day dreaming of changing the world, or maybe just your business? Whichever it may be, we're
                backing you to make it happen. The sky's the limit, so what can we help you achieve?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
