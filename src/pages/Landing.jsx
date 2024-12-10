import React from 'react';
import { Hero } from '../components';
import About from './About';
import Services from './Services';

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Landing;
