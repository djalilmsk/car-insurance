import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { PricingCard } from '../components';
import { SiTheboringcompany } from 'react-icons/si';
import { GoPlusCircle } from 'react-icons/go';
import { Button } from '../ui';

const INITIAL_INFOS = [
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

function Field(props) {
  return (
    <form onSubmit={props.handleFormSubmit} className="mb-6 rounded-2xl border p-4 shadow">
      <div className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Plan Name"
          value={props.newPlan.name}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={props.newPlan.description}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        <input
          type="text"
          name="coverage"
          placeholder="Coverage (comma-separated)"
          value={props.newPlan.coverage}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={props.newPlan.price}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        <input
          type="number"
          name="deductible"
          placeholder="Deductible"
          value={props.newPlan.deductible}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
        <textarea
          name="terms"
          placeholder="Terms"
          value={props.newPlan.terms}
          onChange={props.handleFormChange}
          className="rounded-lg border p-2 focus:ring-1 focus:ring-primary focus:outline-none"
          required
        />

        <Button
          type="submit"
          className={'flex justify-center items-center'}
        >
          Add Plan
        </Button>
      </div>
    </form>
  );
}

function InsurerPage() {
  const [infos, setInfos] = useState(INITIAL_INFOS);
  const [showForm, setShowForm] = useState(false);
  const [newPlan, setNewPlan] = useState({
    name: '',
    description: '',
    coverage: '',
    price: '',
    deductible: '',
    terms: '',
    isActive: true,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPlan({ ...newPlan, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Convert coverage to an array (split by commas)
    const updatedPlan = {
      ...newPlan,
      coverage: newPlan.coverage.split(',').map((item) => item.trim()),
      price: parseFloat(newPlan.price),
      deductible: parseFloat(newPlan.deductible),
    };
    setInfos([...infos, updatedPlan]);
    setShowForm(false);
    setNewPlan({
      name: '',
      description: '',
      coverage: '',
      price: '',
      deductible: '',
      terms: '',
      isActive: true,
    });
  };

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
            <div className="flex items-center gap-3 border-r-2 border-[#787878] pr-4">
              <FaUsers className="h-6 w-6 text-[#787878]" />
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">174</span>
                <span className="text-sm text-[#787878]">Subscription</span>
              </div>
            </div>
            <button
              className="flex items-center gap-3 py-5 pl-3 transition-all duration-300 hover:text-[#787878] max-sm:px-4"
              onClick={() => setShowForm(!showForm)}
            >
              <GoPlusCircle className={`h-6 w-6 text-[#787878] ${showForm ? 'rotate-45 transition-all duration-300': ''}`} />
              <span className="max-sm:hidden">
                {showForm ? 'Close Form' : 'Add New Plan'}
              </span>
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <Field
          newPlan={newPlan}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        ></Field>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {infos.map(
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
