import { useState } from 'react';

export default function UserEditForm({ user, onUpdate }) {
  const [formData, setFormData] = useState({
    name: user.name || '',
    lastName: user.lastName || '',
    phone: user.phone || '',
    email: user.email || '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-bold">Update User Information</h2>
      <div className="mb-4">
        <label className="mb-1 block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded border p-2"
        />
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Save Changes
      </button>
    </form>
  );
}
