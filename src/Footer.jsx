import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-white flex flex-col space-y-8 px-8 py-10 sm:px-36 sm:py-28">
          <div className="text-3xl sm:text-4xl font-bold">
            <h1>Ready when you are</h1>
          </div>
          <div className="flex items-center sm:hidden">
            <button className="bg-[#0DC9C5] text-white text-base px-6 py-2 rounded-full text-sm font-medium">
              Get in touch
            </button>
          </div>
          <div className="hidden sm:flex items-center">
            <button className="bg-[#0DC9C5] text-white text-base px-10 py-4 rounded-full text-sm font-medium">
              Get in touch
            </button>
          </div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 pt-10 justify-between">
            <div className="explore flex flex-col space-y-5">
              <h2 className="text-lg text-white opacity-75">EXPLORE</h2>
              <ul className="flex flex-col space-y-5">
                <li>About</li>
                <li>Projects</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="follow-us flex flex-col space-y-5">
              <h2 className="text-lg text-white opacity-75">FOLLOW US</h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex items-center space-x-2">
                  <i className="fa-brands fa-instagram fa-lg"></i>
                  <span>sprintdigitalua</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fab fa-linkedin fa-lg"></i>
                  <span>sprintdigitalua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 py-10 sm:px-36 sm:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="review self-end">
              <div className="text-xs text-white opacity-75">
                <p>REVIEWED ON</p>
                <div className="flex items-center">
                  <span className="text-white text-3xl font-bold">Clutch</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-1">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                </svg>
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                </svg>
              </div>
              <div className="text-sm text-gray-400">
                <p>7 REVIEWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="terms-and-conditions flex flex-col sm:flex-row px-8 sm:px-36 pt-0 pb-8 sm:pb-36 sm:pt-0 justify-between">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 pt-14 text-sm text-white opacity-75">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="flex space-x-10 pt-14 text-sm text-white opacity-75">
          <a href="#">All rights reserved Sprint Digital 2024.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
