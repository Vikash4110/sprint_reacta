import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';

import Abouts from './Abouts';
import Service from './Service';
import Project from './Project';
import SavingsCalculator from './SavingsCalculator';
import Articles from './Articles'
import Footer from './Footer';
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <>
      <Nav />
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/service" element={<Service />} />
        <Route path="/savingscalculator" element={<SavingsCalculator />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
