import React from 'react';
import prof from '../assets/professional-success.png';
import carCrash from '../assets/bump.png';
import bye from '../assets/car-insurance.png';
import serviceimg from '../assets/serviceimage.webp';
const SERVICES = [
  {
    id: 1,
    title: 'Buy an Insurance Offer',
    content:
      'Compare policies from trusted companies and choose the best car insurance tailored to your needs. Get the coverage you deserve at competitive prices',
    img: bye,
  },
  {
    id: 2,
    title: 'File a Claim for Accidents',
    content:
      'Quickly file claims for any car-related incident, including accidents, natural disasters, or fire. We simplify the process to get you back on track',
    img: carCrash,
  },
  {
    id: 3,
    title: 'Expert Assistance',
    content:
      'Connect with experienced professionals to resolve car accident issues and manage your claims efficiently, ensuring a hassle-free experience',
    img: prof,
  },
];

function SectionTitle({ className, img }) {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-6 sm:gap-8 lg:w-1/2 lg:items-start ${className}`}
    >
      <div className="item-center flex flex-col gap-[15px]">
        <h1 className="text-extrabold text-6xl max-lg:text-center">
          <span className="text-primary">Our</span> Services
        </h1>
      </div>
      <p className="max-w-[40rem] text-center text-sm sm:text-lg lg:text-left">
        Our platform is designed to simplify car insurance for everyone. We
        offer a range of services to help you find the right policy for your
        needs.
      </p>
      <img
        src={serviceimg}
        className="w[500px] hidden h-[300px] rounded-[20px] border-2 border-primary md:block"
      />
    </div>
  );
}

const Services = () => {
  return (
    <div className="mb-28 mt-[70px] flex flex-wrap justify-center gap-14 lg:flex-nowrap">
      <SectionTitle className="lg:hidden" img={bye} />
      <div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        {SERVICES.map(({ id, title, content, img }) => {
          return (
            <div
              key={id}
              className="transform items-center rounded-[20px] border-b-2 p-5 transition-all duration-300 last:border-b-0 hover:scale-105 hover:bg-gray-100 md:flex"
            >
              {/* Icon */}
              <img
                className="mr-4 h-[40px] w-[40px]"
                src={img}
                alt="service icon"
              />

              {/* Service Title and Content */}
              <div>
                <h4 className="mb-5 text-nowrap font-semibold text-primary">
                  {title}
                </h4>
                <p className="max-w-80 text-wrap">{content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <SectionTitle className="max-lg:hidden" img={bye} />
    </div>
  );
};
export default Services;
