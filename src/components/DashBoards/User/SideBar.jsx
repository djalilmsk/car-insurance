export default function Sidebar({ onSelect }) {
  const menuItems = [
    { id: 'userInfo', label: 'User Information' },
    { id: 'updateInfo', label: 'Update User Information' },
    { id: 'purchaseHistory', label: 'Purchase History' },
    { id: 'ClaimsHistory', label: 'Claims History' },
  ];

  const handleItemClick = (id) => {
    if (onSelect) onSelect(id);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-blue-500 text-white">
      <div className="border-b border-blue-700 p-4 text-lg font-bold">
        Dashboard
      </div>
      <ul className="mt-4 space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer p-4 hover:bg-blue-600"
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
