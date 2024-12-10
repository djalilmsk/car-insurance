// import { IoCartOutline } from "react-icons/io5";
// import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Image from '../assets/hero.jpg';
import Logo from './Logo';

function Hero() {
  return (
    <div className="flex flex-wrap justify-center gap-16 lg:flex-nowrap">
      {/* Text Content */}
      <div className=" flex flex-col items-center justify-center gap-6 sm:gap-8 lg:w-1/2 lg:items-start">
        <h1 className='text-6xl text-extrabold'>Ride with Confidence</h1>
        <p className="text-center text-sm sm:text-lg lg:w-[75%] lg:text-left">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <div className="flex gap-4">
          <Link
            to="/companies"
            className="hover:bg-secondary rounded-full btn flex items-center gap-2 bg-primary text-white hover:text-primary"
          >
            {/* <IoCartOutline className="h-6 w-6" /> */}
            check companies
          </Link>
          <Link to="/about" className="btn hover:text-[#e8e8e8] hover:bg-[#000] rounded-full">
            {/* <RiArrowDownSLine className="h-6 w-6" /> */}
            Learn More
          </Link>
        </div>
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
}

export default Hero;
