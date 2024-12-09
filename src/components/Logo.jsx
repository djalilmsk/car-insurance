import { Link } from "react-router-dom";

function Logo({ children = "", logoClass }) {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="flex items-end justify-center gap-3">
      {children === "" ? null : (
        <h1 className="text-xl uppercase leading-none tracking-tight text-primary max-sm:mb-1 sm:text-3xl">
          {children}
        </h1>
      )}
      <Link to="/" className={"text-3xl " + logoClass} onClick={closeDrawer}>
        <h1 className="transition-all hover:text-primary uppercase">DriveSure</h1>
      </Link>
    </div>
  );
}

export default Logo;
