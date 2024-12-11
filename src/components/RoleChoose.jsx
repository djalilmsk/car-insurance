import { useState } from 'react';
import { Button, DeleteButton } from '../ui';
import { FaUser } from 'react-icons/fa';
import { RiBuilding2Fill } from 'react-icons/ri';
import { GrUserWorker } from 'react-icons/gr';
import { Form, Link, Links } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function RoleChoose({ className, onClick }) {
  const [selectedRole, setSelectedRole] = useState('users');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value); 
  };

  return (
    <div className={`${className} rounded-xl bg-white p-6 shadow-lg`}>
      <h3 className="mb-6 text-left text-lg font-semibold text-gray-600">
        Register as:
      </h3>
      <Form className="grid grid-cols-3 gap-4">
        <span className="flex h-20 cursor-pointer items-center justify-center">
          <input
            type="radio"
            id="role-user"
            name="role"
            value="users"
            checked={selectedRole === 'users'}
            onChange={handleRoleChange} // Handle role change
            className="peer hidden"
          />
          <label
            htmlFor="role-user"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:border-gray-400 hover:shadow-sm peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600"
          >
            <span className="text-2xl">
              <FaUser />
            </span>
            <span>User</span>
          </label>
        </span>
        <span className="flex h-20 cursor-pointer items-center justify-center">
          <input
            type="radio"
            id="role-company"
            name="role"
            value="insurer"
            checked={selectedRole === 'insurer'}
            onChange={handleRoleChange} // Handle role change
            className="peer hidden"
          />
          <label
            htmlFor="role-company"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:border-gray-400 hover:shadow-sm peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600"
          >
            <span className="text-2xl">
              <RiBuilding2Fill />
            </span>
            <span>Company</span>
          </label>
        </span>
        <span className="flex h-20 cursor-pointer items-center justify-center">
          <input
            type="radio"
            id="role-expert"
            name="role"
            value="experts"
            checked={selectedRole === 'experts'}
            onChange={handleRoleChange} // Handle role change
            className="peer hidden"
          />
          <label
            htmlFor="role-expert"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:border-gray-400 hover:shadow-sm peer-checked:border-purple-500 peer-checked:bg-purple-50 peer-checked:text-purple-600"
          >
            <span className="text-2xl">
              <GrUserWorker />
            </span>
            <span>Expert</span>
          </label>
        </span>

        <span></span>

        <DeleteButton
          clickHandle={onClick}
          className="flex w-32 justify-center rounded-lg py-2 transition-all duration-200"
        >
          Cancel
        </DeleteButton>
        <Link to={`/register?role=${selectedRole}`}>
          <Button
            type="button"
            className="flex w-32 justify-center rounded-lg py-2 transition-all duration-200"
          >
            Continue
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default RoleChoose;
