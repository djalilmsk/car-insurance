import React from 'react';

const SERVICES = [
  {
    id: 1,
    title: 'Buy an Insurance Offer',
    content:
      'Compare policies from trusted companies and choose the best car insurance tailored to your needs. Get the coverage you deserve at competitive prices',
  },
  {
    id: 2,
    title: 'File a Claim for Accidents',
    content:
      'Quickly file claims for any car-related incident, including accidents, natural disasters, or fire. We simplify the process to get you back on track',
  },
  {
    id: 3,
    title: 'Expert Assistance',
    content:
      'Connect with experienced professionals to resolve car accident issues and manage your claims efficiently, ensuring a hassle-free experience',
  },
];

function SectionTitle({className}) {
  return (
    <div className={`flex flex-col items-center justify-start gap-6 sm:gap-8 lg:w-1/2 lg:items-start ${className}`}>
      <h1 className="text-extrabold text-6xl max-lg:text-center">
        Our Services
      </h1>
      <p className="text-center text-sm sm:text-lg lg:text-left max-w-[40rem]">
        Our platform is designed to simplify car insurance for everyone. We
        offer a range of services to help you find the right policy for your
        needs.
      </p>
    </div>
  );
}

const Services = () => {
  return (
    <div className="mb-28 flex flex-wrap justify-center gap-14 lg:flex-nowrap">
      <SectionTitle className='lg:hidden'/>
      <div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        {SERVICES.map(({ id, title, content }) => {
          return (
            <div key={id} className='md:flex border-b-2 py-5 last:border-b-0'>
              <h4 className='mr-4 w-48 text-nowrap font-semibold mb-5 text-primary'>{title}</h4>
              <p className='max-w-80 text-wrap'>{content}</p>
            </div>
          );
        })}
      </div>

      <SectionTitle className='max-lg:hidden'/>
    </div>
  );
};

export default Services;
