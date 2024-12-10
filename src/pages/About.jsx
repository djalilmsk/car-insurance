import React from 'react';
import Image from '../assets/About.jpg';
import { Logo } from '../components';

const About = () => {
  return (
    <div className="flex flex-wrap justify-center gap-16 lg:flex-nowrap">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:w-1/2 lg:items-start mt-[-50px]">
        <Logo logoClass="text-4xl sm:text-6xl">About</Logo>
        <p className="text-sm sm:text-lg lg:w-[75%] lg:text-left text-justify">
        Our platform is designed to simplify car insurance for everyone. Whether you need to find the right insurance policy, file a claim for an accident, or connect with an expert to resolve issues, we bring all the solutions to your fingertips. With a focus on convenience, transparency, and trust, we ensure a smooth and hassle-free experience for all users
        </p>
      </div>

      {/* Image */}
      <div className="justify-center items-center lg:w-1/2 flex">
        <img
          src={Image}
          alt="Innovative Laptop"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default About;
