import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <nav className="relative pb-10">
      <Navbar />
      <section className="align-element py-10">
        <Outlet />
      </section>
      {/* <Footer /> */}
    </nav>
  );
};

export default HomeLayout;
