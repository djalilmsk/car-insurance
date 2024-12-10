import { FaUsers } from 'react-icons/fa';
import { PricingCard } from '../components';
import { SiTheboringcompany } from 'react-icons/si';
import { GoPlusCircle } from 'react-icons/go';
import { Button } from '../ui';

const INFOS = [
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
    name: 'Fire & Theft Plan',
    description: 'Coverage for fire and theft incidents only.',
    coverage: ['fire', 'theft'],
    price: 150,
    deductible: 300,
    terms: 'Terms specific to fire and theft claims.',
    isActive: false,
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
];

function InsurerPage() {
  return (
    <div className="p-4">
      <div className="mb-10 flex flex-wrap justify-between gap-6">
        <div className="flex items-center gap-4">
          <SiTheboringcompany className="h-16 w-16 rounded" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold md:text-2xl">
              name company
            </span>
            <span className="text-sm text-[#787878]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-xl bg-[#e8e8e8] px-4 py-2">
            <div className='flex items-center gap-3 pr-4 border-r-2 border-[#787878]'>
              <FaUsers className="h-6 w-6 text-[#787878]" />
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">174</span>
                <span className="text-sm text-[#787878]">Subscription</span>
              </div>
            </div>
            {/* <span className='text-4xl text-[#787878] pb-2'>|</span> */}
            <button className='flex items-center gap-3 py-5 pl-3 hover:text-[#787878] transition-all duration-300 max-sm:px-4'>
              <GoPlusCircle className="h-6 w-6 text-[#787878] " />
              <span className='max-sm:hidden'>Add New Plan</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INFOS.map(
          (
            { name, description, coverage, price, deductible, terms, isActive },
            i,
          ) => {
            if (!isActive) return null;
            return (
              <PricingCard
                key={i}
                title={name}
                plans={coverage}
                price={price}
                buttonText="Get the Plan Now"
                status={name.split(' ')[0]}
                deductible={deductible}
                description={description}
              />
            );
          },
        )}
      </div>
    </div>
  );
}

export default InsurerPage;
