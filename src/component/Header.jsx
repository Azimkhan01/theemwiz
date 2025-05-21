import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Pricing", link: "pricing" },
    { name: "Blog", link: "blog" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="p-4 w-full flex justify-between items-center bg-[#28293E] font-sans relative ">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/Logo/polygon.svg" alt="polygon"  />
            <img
              src="/Logo/polygon-1.svg"
              alt="polygon 2"
              className="absolute inset-0 m-auto"
            />
          </div>
          <h1 className="text-2xl text-white font-semibold tracking-wide">Agency</h1>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex md:gap-10 text-gray-50 font-semibold tracking-widest">
          {pages.map((page, i) => (
            <li key={i}>
              <Link
                to={`/${page.link}`}
                className="hover:text-white transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact button desktop */}
        <div className="hidden md:block tracking-wider text-sm px-6 py-2 border border-white/30 text-white font-bold rounded-md hover:border-white/40 transition duration-200">
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            CONTACT
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 border border-white/30 rounded text-white z-60 relative"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>

        {/* Mobile menu sliding from right */}
        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-[#28293E] shadow-lg
            transform transition-transform duration-300 ease-in-out
            md:hidden z-50
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col p-6 gap-6 text-gray-50 font-semibold tracking-widest mt-16">
            {pages.map((page, i) => (
              <li key={i}>
                <Link
                  to={`/${page.link}`}
                  className="block py-2 hover:text-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="block py-2 border border-white/30 px-6 rounded font-bold text-white hover:border-white/40 transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
