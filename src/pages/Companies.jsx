import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { companies } from '../Services/companies';

function InsurerCard(props) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
      <img
        src={props.company.image}
        alt={props.company.name}
        className="mb-4 h-16 w-16"
      />
      <h2 className="mb-2 text-lg font-semibold text-primary">
        {props.company.name}
      </h2>
      <p className="mb-1 text-sm text-gray-600">
        <strong>Email:</strong> {props.company.email}
      </p>
      <p className="mb-1 text-sm text-gray-600">
        <strong>Address:</strong> {props.company.address}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Phone:</strong> {props.company.phone}
      </p>
      <div className="p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-300 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-secondary">
          <span className="text-primary">Our Plans</span>
        </button>
      </div>
    </div>
  );
}

const Companies = () => {
  return (
    <>
      <div className="mb-[20px] text-center">
        <h1 className="text-[38px] text-primary">Our Companies</h1>
      </div>
      <div className="bg-secondary p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {companies.map((company) => (
              <InsurerCard key={company.id} company={company}></InsurerCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
