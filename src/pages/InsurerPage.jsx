import { PricingCard } from '../components';

const INFOS = [
  [
    {
      name: 'Basic Plan',
      description: 'Covers basic damages and liability.',
      coverage: ['Civil', 'theft', 'collision'],
      price: 100,
      deductible: 500,
      terms: 'Basic liability terms and conditions.',
      isActive: true,
    },
    {
      name: 'Premium Plan',
      description: 'Comprehensive coverage including natural disasters.',
      coverage: [
        'Civil',
        'Broken glass',
        'natural disaster',
        'fire',
        'theft',
        'collision',
      ],
      price: 300,
      deductible: 0,
      terms: 'Premium terms with extensive protection.',
      isActive: true,
    },
    {
      name: 'Fire & Theft Plan',
      description: 'Coverage for fire and theft incidents only.',
      coverage: ['fire', 'theft'],
      price: 150,
      deductible: 300,
      terms: 'Terms specific to fire and theft claims.',
      isActive: false,
    },
  ],
];

function InsurerPage() {
  return (
    <div className="grid grid-cols-3">
      {INFOS.map(
        (
          { name, description, coverage, price, deductible, terms, isActive },
          i,
        ) => {
          return <PricingCard title={name} plans={coverage} price={price} />;
        },
      )}
    </div>
  );
}

export default InsurerPage;
