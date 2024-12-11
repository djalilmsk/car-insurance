import { useState } from 'react';

export default function CompSidebar({ onSelect }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'Compony information', label: 'Company Information' },
    { id: 'Plans', label: 'Company Plans' },
    { id: 'Manage client claims', label: 'Send a Client Claim to an Expert' },
  ];

  const handleItemClick = (id) => {
    if (onSelect) onSelect(id);
    setIsSidebarOpen(false); // Close the sidebar after an item is clicked (on small screens)
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <>
      {/* Hamburger Button for Small Screens */}
      <button
        className="top-13 fixed left-4 z-50 rounded-md bg-primary p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-[66px] z-10 h-screen w-64 transform rounded-[10px] bg-secondary text-black transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block md:translate-x-0`}
      >
        <div className="border-b border-primary p-4 text-lg font-bold">
          Dashboard
        </div>
        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer p-4 hover:bg-primary"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
