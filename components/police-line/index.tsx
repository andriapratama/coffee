import React from "react";
import Marquee from "react-fast-marquee";

interface Props {
  position: "front" | "back";
  className?: string;
  direction: "right" | "left";
}

const PoliceLine: React.FC<Props> = ({ position, className, direction }) => {
  return (
    <div
      className={`absolute w-[calc(100%+300px)] h-[120px] -ml-10 flex items-center uppercase font-archivo font-bold text-6xl text-amber-900 ${
        position === "front"
          ? "z-10 bg-yellow-600 -rotate-[4deg]"
          : "bg-yellow-500 rotate-[5deg] z-30"
      } ${className}`}
    >
      <Marquee className="w-full" direction={direction}>
        <div className="mx-12">Cappuccino</div>
        <div className="mx-12">Doppio</div>
        <div className="mx-12">Mocha</div>
        <div className="mx-12">Galao</div>
        <div className="mx-12">Latte</div>
        <div className="mx-12">Cortado</div>
        <div className="mx-12">Lungo</div>
      </Marquee>
    </div>
  );
};

export default PoliceLine;
