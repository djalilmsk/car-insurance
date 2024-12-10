import React from 'react';
import { Hero, PricingCard } from '../components';
import About from './About';
import Services from './Services';

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <div className="flex gap-5">
        {/* <PricingCard title={'Basic'} status={'Free'} price={'200'} buttonText={'Join Now'} plans={['we have this', 'and this', 'also this']}  />
      <PricingCard title={'Basic'} status={'Free'} price={'200'} buttonText={'Join Now'} plans={['we have this', 'and this', 'also this','gikbi', 'nougu']}  /> */}
      </div>
    </div>
  );
};

export default Landing;
