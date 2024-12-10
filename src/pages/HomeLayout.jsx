import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <section className="align-element py-10">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
