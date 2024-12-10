import React from 'react';
import Image from '../assets/About.jpg';
import { Logo } from '../components';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { SlPeople } from 'react-icons/sl';
import { FaFileAlt } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
const About = () => {
  return (
    <>
      <div className="mb-[50px] flex flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <h1 className="text-extrabold text-6xl max-lg:text-center">
          About <span className="text-primary">US</span>
        </h1>
        <p className="text-justify text-sm sm:text-lg">
          Our platform is designed to simplify car insurance for everyone.
          Whether you need to find the right insurance policy, file a claim for
          an accident, or connect with an expert to resolve issues, we bring all
          the solutions to your fingertips. With a focus on convenience,
          transparency, and trust, we ensure a smooth and hassle-free experience
          for all users.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <FaRegCalendarCheck className="h-[45px] w-[45px] text-primary" />
          <h3 className="mb-2 mt-3 text-lg font-semibold">
            Simplified Insurance
          </h3>
          <p className="text-sm text-gray-600">
            Find the best car insurance policies tailored to your needs with
            ease and confidence.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <FaFileAlt className="h-[45px] w-[45px] text-primary" />

          <h3 className="mb-2 mt-3 text-lg font-semibold">
            Hassle-Free Claims
          </h3>
          <p className="text-sm text-gray-600">
            File accident claims quickly and efficiently with our streamlined
            process.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <SlPeople className="h-[45px] w-[45px] text-primary" />

          <h3 className="mb-2 mt-3 text-lg font-semibold">Expert Assistance</h3>
          <p className="text-sm text-gray-600">
            Connect with knowledgeable experts to resolve your insurance-related
            concerns.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <FaMoneyCheckAlt className="h-[45px] w-[45px] text-primary" />

          <h3 className="mb-2 mt-3 text-lg font-semibold">
            Transparent Pricing
          </h3>
          <p className="text-sm text-gray-600">
            Get clear and competitive pricing to make informed decisions without
            hidden fees.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
