import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        if (menuOpen) {
          setMenuOpen(false); // Close menu when scrolling
        }
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]); // Add menuOpen as a dependency to close the menu on scroll

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close state
  };

  return (
    <>
      <div className="text-white">
        <div className={`z-10 navbar md:px-8 py-2 md:py-4 ${scroll ? "fixed bg-base-100" : "bg-transparent"}`}>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu} // Toggle menu on click
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {menuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a>About Us</a></li>
                  <li><a>Services</a></li>
                  <li><a>Use Cases</a></li>
                </ul>
              )}
            </div>
            <a className="btn btn-ghost text-3xl md:text-5xl font-normal">Edibite</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 md:text-lg">
              <li><a>About Us</a></li>
              <li><a>Services</a></li>
              <li><a>Use Cases</a></li>
            </ul>
          </div>
          <div className="navbar-end flex gap-6 mr-6 md:mr-3 md:text-lg">
            <a className='hidden md:block'>My Orders</a>
            <a className='block md:hidden'><BsCart3 className='h-7 w-7'/></a>
            <a className='hidden md:block'>My Profile</a>
            <a className='block md:hidden'><CgProfile className='h-7 w-7'/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
