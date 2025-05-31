import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserInfo from './Display';
import UserEditForm from './IditInfo';

function PlanDetails({ plans }) {
  return (
    <div className="rounded-md bg-white p-6 shadow-md sm:w-[800px]">
      <h2 className="mb-4 text-2xl font-semibold">Plan Details</h2>
      {plans.length > 0 ? (
        plans.map((plan, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-bold">{plan.title}</h3>
            <p>Price: ${plan.price}/month</p>
            <p>Deductible: ${plan.deductible}</p>
            <p>Description: {plan.description}</p>
            <p>Status: {plan.status}</p>
          </div>
        ))
      ) : (
        <p>No plans available.</p>
      )}
    </div>
  );
}

function Sidebar({ onSelect, className }) {
  return (
    <div className={className}>
      <ul className="space-y-4 p-4">
        <li>
          <button
            onClick={() => onSelect('userInfo')}
            className="w-full text-left"
          >
            User Info
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('updateInfo')}
            className="w-full text-left"
          >
            Update Info
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect('planDetails')}
            className="w-full text-left"
          >
            Plan Details
          </button>
        </li>
      </ul>
    </div>
  );
}


export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('userInfo');

  // Access user data and history from Redux state
  const user = useSelector((state) =>( state.userReducer.user.data));
  const plans = useSelector((state) =>  state.userReducer.user.plans || []);

  const handleUpdate = (updatedData) => {
    console.log('Updated User Data:', updatedData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar 
        onSelect={setSelectedView} 
        className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-md md:h-full" 
      />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 md:p-6">
        {selectedView === 'userInfo' && <UserInfo user={user} />}
        {selectedView === 'updateInfo' && (
          <UserEditForm user={user} onUpdate={handleUpdate} />
        )}
        {selectedView === 'planDetails' && <PlanDetails plans={plans} />}
      </div>
    </div>
  );
}
