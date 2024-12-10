import Logo from '../Logo';
import NavLinks from './NavLinks';
import { Button, ButtonOutline } from '../../ui';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="sm:align-element navbar">
        <div className="navbar-start">
        <label
            htmlFor="my-drawer"
            className="drawer-button cursor-pointer px-4 py-2 bg-gray-200 rounded-full flex items-center gap-2 hover:bg-gray-300"
          >
            <span>Menu =</span>
          </label>
        </div>

        <div className="md:navbar-center max-md:hidden">
          <Logo />
        </div>

        <div className="flex items-center gap-4 min-w-52 navbar-end">
          <Link to="/register">
            <ButtonOutline className="px-4 py-2">Sign up</ButtonOutline>
          </Link>
          <Link to="/login">
            <Button className="px-4 py-2">Login</Button>
          </Link>
        </div>
      </div>

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <NavLinks
          listClasses="menu h-[100dvh] w-64 bg-base-100 p-4 text-lg"
          oneClasses="my-1"
        >
          <span className="my-6">
            <Logo />
          </span>
        </NavLinks>
      </div>
    </nav>
  );
}

export default NavBar;
