import React from 'react';
import Sidebar from './SideBar';
import UserInfo from './Display';
import UserEditForm from './IditInfo';
import PurchaseHistory from './PurshaseHistory';
import { useState } from 'react';
export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('userInfo');

  const user = {
    name: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
  };

  const history = [
    { date: '2024-01-01', type: 'Purchase', details: 'Car Insurance Plan A' },
    { date: '2024-02-15', type: 'Claim', details: 'Accident on 2024-02-14' },
  ];

  const handleUpdate = (updatedData) => {
    console.log('Updated User Data:', updatedData);
  };

  return (
    <div className="flex items-center">
      <Sidebar onSelect={setSelectedView} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 md:ml-2">
        {selectedView === 'userInfo' && <UserInfo user={user} />}
        {selectedView === 'updateInfo' && (
          <UserEditForm user={user} onUpdate={handleUpdate} />
        )}
        {selectedView === 'purchaseHistory' && (
          <PurchaseHistory history={history} />
        )}
      </div>
    </div>
  );
}
