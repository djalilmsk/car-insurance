import { useState } from 'react';

export default function UserEditForm({ user, onUpdate }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-4 shadow-md sm:w-[800px] md:p-6"
    >
      <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">
        Update User Information
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-primary" htmlFor="name">
            First Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-medium text-primary"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
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
            onChange={handleChange}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-600 md:w-auto"
      >
        Update Information
      </button>
    </form>
  );
}
