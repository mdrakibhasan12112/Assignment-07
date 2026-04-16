import React from 'react';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content justify-center p-10 mt-12">
      <aside>
        <h2 className="text-5xl font-bold">KeenKeeper</h2>
        <p className="">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>
      </aside>
      <nav>
        <p className="font-semibold">Socal Link</p>

        <div className="grid grid-flow-col gap-4">
          <a href="">
            <FaSquareInstagram />
          </a>

          <a href="">
            <FaFacebook />
          </a>

          <a href="">
            <FaXTwitter />
          </a>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-6 text-sm">
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
