import React from 'react';
import { Hero } from '../components';
import About from './About';
import Services from './Services';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Landing;
