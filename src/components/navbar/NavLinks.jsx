import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { id: 1, to: '/companies', label: 'Companies' },
  { id: 2, to: '/about', label: 'About' },
  { id: 3, to: '/services', label: 'Services' },
  { id: 4, to: '/helpPage', label: 'Help' },
  { id: 5, to: '/insurerPage', label: 'insurerPage' },
];

function NavLinks({ listClasses = '', oneClasses = '', children }) {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('my-drawer');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <ul className={listClasses}>
      {children}
      {NAV_LINKS.map(({ id, to, label }) => (
        <li key={id} className={oneClasses}>
          <NavLink
            to={to}
            className="transition-all hover:text-primary"
            onClick={closeDrawer}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
