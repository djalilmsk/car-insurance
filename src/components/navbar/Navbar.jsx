import Logo from '../Logo';
import NavLinks from './NavLinks';

function NavBar() {
  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start md:hidden">
          <label
            htmlFor="my-drawer"
            className="drawer-button cursor-pointer p-0 hover:bg-none"
          >
            drawer
          </label>
        </div>

        <div className="max-md:navbar-center md:navbar-start">
          <Logo />
        </div>

        <div className="navbar-center max-md:hidden">
          <NavLinks listClasses={'menu-horizontal gap-x-10 text-xl'} />
        </div>

        <div className="navbar-end gap-4">
          <button className='btn'>register</button> / login
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
