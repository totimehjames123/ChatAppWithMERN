import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function HomePageNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <>
    <nav className="flex sticky top-0 items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img className="mr-2" src="logo.jpeg" width={80} height={80} alt="Logo"/>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
          type="button"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 2.5A2.5 2.5 0 012.5 0h15A2.5 2.5 0 0120 2.5v15A2.5 2.5 0 0117.5 20h-15A2.5 2.5 0 010 17.5v-15zM2.5 1A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0017.5 1h-15z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow lg:text-right">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block text-lg lg:mt-0 lg:ml-4 text-black hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ease-in-out mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block text-lg lg:mt-0 lg:ml-4 text-black hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ease-in-out mr-4"
          >
            Events
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block text-lg lg:mt-0 lg:ml-4 text-black hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ease-in-out mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 lg:ml-4 lg:mr-4 text-black hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
          >
            Help
          </a>
        </div>
        <div className="lg:hidden w-full mt-4">
          <Link to='/login' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </Link>
          <Link to='/signup' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="hidden lg:block ml-4">
        <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
      </div>
      <div className="hidden lg:block ml-4">
        <Link to='/signup' className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </div>
    </nav>
    
    </>
  );
}

export default HomePageNavBar;