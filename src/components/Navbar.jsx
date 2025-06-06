import React, { useState } from "react";
import { Link } from 'react-scroll';
import { ShoppingCart, CircleUser, Search, Menu, X } from "lucide-react";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white sticky">
      <div className="flex items-center gap-6">
        <a className="w-12 h-12" href="/">
          <img src="./drona-logo.png" alt="Logo" className="w-full h-full" />
        </a>
        <div className="hidden md:flex gap-6 text-sm font-bold">
          <Link to="overview" smooth={true} duration={500}>OVERVIEW</Link>
          <Link to="setup" smooth={true} duration={500}>SETUP</Link>
          <Link to="controls" smooth={true} duration={500}>CONTROLS</Link>
          <Link to="safety" smooth={true} duration={500}>SAFETY</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 text-sm font-light">
        <a
          href="https://drive.google.com/drive/folders/1v9xRTmWtKBi38H7kSFp_ElkOElfsb12n"
          target="_blank"
        >
          PRESS KIT
        </a>
        <a href=""><ShoppingCart size={20} strokeWidth={1.5} /></a>
        <a href=""><CircleUser size={20} strokeWidth={1.5} /></a>
        <a href=""><Search size={20} strokeWidth={1.5} /></a>
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-start gap-4 p-6 shadow-md md:hidden z-10">
          <Link to="overview" smooth={true} duration={500}>OVERVIEW</Link>
          <Link to="setup" smooth={true} duration={500}>SETUP</Link>
          <Link to="controls" smooth={true} duration={500}>CONTROLS</Link>
          <Link to="safety" smooth={true} duration={500}>SAFETY</Link>
          <a
            href="https://drive.google.com/drive/folders/1v9xRTmWtKBi38H7kSFp_ElkOElfsb12n"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRESS KIT
          </a>
          <div className="flex gap-4">
            <a href=""><ShoppingCart size={20} strokeWidth={1.5} /></a>
            <a href=""><CircleUser size={20} strokeWidth={1.5} /></a>
            <a href=""><Search size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
      )}
    </div>
  );
};
