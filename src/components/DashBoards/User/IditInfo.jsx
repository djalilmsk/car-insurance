import { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import customFetch from '../../../utils'; // Import your fetch utility
import { useSelector } from 'react-redux';
import { SubmitButton } from '../../../ui';

export default function UserEditForm({ onUpdate }) {
  const user = useSelector((state) => state.userReducer.user?.data || {});
  const token = useSelector((state) => state.userReducer.user?.token || '');

  const [formData, setFormData] = useState({
    fullName: user.fullName || '',
    phone: user.phone || '',
    email: user.email || '',
    address: user.address || '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await customFetch.get('/users/updateme', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData((prev) => ({
          ...prev,
          ...response.data,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) fetchUserData();
  }, [token]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Exclude empty password field
    const submissionData = { ...formData };
    if (!submissionData.password) {
      delete submissionData.password;
    }

    try {
      const response = await customFetch.patch('/users/updateme', submissionData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('User updated successfully:', response.data);
      if (onUpdate) onUpdate(response.data);
    } catch (error) {
      console.error('Error updating user data:', error.message);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-4 shadow-md sm:w-[800px] md:p-6"
    >
      <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">
        Update User Information
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block font-medium text-primary"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-primary"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-primary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-primary"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              className="mb-2 block font-medium text-primary"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      )}
      <SubmitButton className="mt-6 w-full">Update Information</SubmitButton>
    </Form>
  );
}
