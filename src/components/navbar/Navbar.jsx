import Logo from '../Logo';
import NavLinks from './NavLinks';
import { Button, ButtonOutline } from '../../ui';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/UserSlice';
import { FaUserCircle } from 'react-icons/fa';

function NavBar() {
  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.userReducer);
  console.log(userObject);
  const { data, token } = userObject.user || { data: null, token: null };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="sm:align-element navbar">
        <div className="navbar-start">
          <label
            htmlFor="my-drawer"
            className="drawer-button flex cursor-pointer items-center gap-2 rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300"
          >
            <span>Menu =</span>
          </label>
        </div>

        <div className="md:navbar-center max-md:hidden">
          <Logo />
        </div>

        <div className="navbar-end flex min-w-52 items-center gap-4">
          {token === null ? (
            <>
              <Link to="/register">
                <ButtonOutline className="px-4 py-2">Sign up</ButtonOutline>
              </Link>
              <Link to="/login">
                <Button className="px-4 py-2">Login</Button>
              </Link>
            </>
          ) : (
            <>
              <span className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#e8e8e8] p-2 pr-3 text-[#787878] transition-all duration-300 hover:bg-secondary hover:text-primary">
                <FaUserCircle className="h-5 w-5" /> {data.fullName}
              </span>
              <span
                className="mr-4 cursor-pointer text-[#787878] transition-all duration-300 hover:text-primary hover:underline"
                onClick={handleLogout}
              >
                Logout
              </span>
            </>
          )}
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
