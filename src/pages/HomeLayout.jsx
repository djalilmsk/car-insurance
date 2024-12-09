import { Outlet } from "react-router-dom";
import { Footer, Header, NavBar } from "../components";

function HomeLayout() {
  return (
    <nav className="relative pb-10">
      <Header />
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
      {/* <Footer /> */}
    </nav>
  );
}

export default HomeLayout;
