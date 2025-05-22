import React from "react";
import { ShoppingCart, CircleUser, Search } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-screen pt-4 px-15 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <a className="w-13 h-13" href="/">
          <img src="./drona-logo.png" alt="Logo" />
        </a>
        <div className="flex gap-7 text-sm font-semibold">
          <a href="#">OVERVIEW</a>
          <a href="#">SETUP</a>
          <a href="#">CONTROLS</a>
          <a href="#">SAFETY</a>
        </div>
      </div>

      <div className="flex items-center gap-5 text-sm font-light">
        <a
          href="https://drive.google.com/drive/folders/1v9xRTmWtKBi38H7kSFp_ElkOElfsb12n"
          target="_blank"
        >
          PRESS KIT
        </a>
        <a href="">
          <ShoppingCart size={20} strokeWidth={2}/>
        </a>
        <a href="">
          <CircleUser size={20} strokeWidth={2}/>
        </a>
        <a href="">
          <Search size={20} strokeWidth={2}/>
        </a>
      </div>
    </div>
  );
};
