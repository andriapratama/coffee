import Image from "next/image";
import React from "react";

import PoliceLine from "@/components/police-line";
import { menus } from "@/constants";
import { Coffee1 } from "@/constants/images";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <PoliceLine position="back" direction="right" />
      <PoliceLine position="front" direction="left" />

      <h2 className="w-full text-center font-archivo text-[250px] text-wrap leading-[200px] font-bold text-amber-50 pt-[300px]">
        ORDER NOW
      </h2>

      <div className="w-full flex justify-center h-[400px] overflow-hidden -mt-[120px]">
        <Image
          src={Coffee1}
          alt="Coffee"
          width={1200}
          height={1000}
          className="object-contain w-[800px] h-[1000px]"
        />
      </div>

      <div className="absolute w-full flex justify-between bottom-14 px-10">
        <div className="font-bold text-lg text-amber-50 cursor-pointer font-archivo">
          LOCO
        </div>
        <div className="flex gap-16">
          {menus.map((menu, index) => (
            <div
              className="capitalize text-amber-50 text-base font-normal cursor-pointer font-archivo"
              key={index}
            >
              {menu}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
