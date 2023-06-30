/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/images/paw-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white">
            
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <ul>
                <li>
                  <a href="" className="hover:text-primary">About Us</a>
                </li>
                <li>
                  <a href="" className="hover:text-primary">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul>
                <li>
                  <a href="" className="hover:text-primary">Pet Adoption</a>
                </li>
                <li>
                  <a href="" className="hover:text-primary">Training Programs</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <ul>
                <li>
                  <a href="" className="hover:text-primary">FAQs</a>
                </li>
                <li>
                  <a href="" className="hover:text-primary">Pet Care Tips</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Mission</h2>
              <p className="text-gray-700">
                At Pawsitive Pairings, our mission is to connect loving families with
                their perfect furry companions. We believe that every pet deserves a
                safe and caring home, and we strive to make the adoption process
                seamless and enjoyable for both the humans and the pets.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mr-1">
              <img src={logo} alt="Pawsitive Pairings Logo" className="w-24 h-24" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-gray-500 text-sm font-normal">
              &copy; {new Date().getFullYear()} Pawsitive Pairings. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
