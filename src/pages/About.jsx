import React from 'react';
import Image from '../assets/About.jpg';
import { Logo } from '../components';

const About = () => {
  return (
    <div className="mb-28 flex flex-wrap justify-center gap-16 lg:flex-nowrap">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        <h1 className="text-extrabold text-6xl max-lg:text-center">About us</h1>
        <p className="text-justify text-sm sm:text-lg">
          Our platform is designed to simplify car insurance for everyone.
          Whether you need to find the right insurance policy, file a claim for
          an accident, or connect with an expert to resolve issues, we bring all
          the solutions to your fingertips. With a focus on convenience,
          transparency, and trust, we ensure a smooth and hassle-free experience
          for all users
        </p>
      </div>
    </div>
  );
};

export default About;
