import React from 'react';
import { Hero, PricingCard } from '../components';
import About from './About';
import Services from './Services';

const Landing = () => {
  return (
    <div className="flex gap-4">
      <PricingCard title='Starter' status='Basic' price='200' buttonClasses='btn-outline' buttonText='Start with Basics' plans={['we have this', 'same this', 'limited something']}></PricingCard>
      <PricingCard title='Pro' status='Pro' price='600' buttonClasses='btn-outline' buttonText='Upgrade to Pro' plans={['we have a lot of this', 'not same this', 'no limited something']}></PricingCard>
    </div>
  );
};

export default Landing;
