import React from 'react';
import Navber from '../components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
 return (
  <div>
   <Navber></Navber>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default RootLayout;