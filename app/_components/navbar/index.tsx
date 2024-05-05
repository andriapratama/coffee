import React from "react";

import { menus } from "@/constants";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-7 font-archivo ">
      <div className="font-bold text-lg text-amber-50 cursor-pointer">LOCO</div>
      <div className="flex gap-16">
        {menus.map((menu, index) => (
          <div
            className="capitalize text-amber-50 text-base font-normal cursor-pointer"
            key={index}
          >
            {menu}
          </div>
        ))}
      </div>
      <div className="px-7 py-2 font-bold rounded-full text-sm bg-amber-50 text-emerald-900 cursor-pointer hover:opacity-90 duration-100">
        Oder now
      </div>
    </nav>
  );
};

export default Navbar;
