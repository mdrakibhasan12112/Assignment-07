import React from 'react';
import Navber from '../components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
 return (
   <div>
     <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>

     <ToastContainer />
   </div>
 );
};

export default RootLayout;