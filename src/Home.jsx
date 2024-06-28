import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import RotatingCircle from './RotatingCircle';

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <RotatingCircle />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default Home;