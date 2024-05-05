import { useState } from "react";

import { RoastingDatas } from "@/constants/roasting";
import { RoastingType } from "@/types/roasting-type";

import RoastingContent from "./content";

const Roasting = () => {
  const [data, setData] = useState<RoastingType[]>(RoastingDatas);

  const handleMouse = (index: number, status: "enter" | "leave") => {
    const newData: RoastingType[] = [...data];

    if (status === "enter") newData[index].isActive = true;
    if (status === "leave") newData[index].isActive = false;

    setData(newData);
  };
  return (
    <section className="w-full px-16 font-archivo mb-[200px]">
      <div className="w-full flex justify-between items-center font-archivo mb-20">
        <h2 className="text-amber-50 font-bold text-[100px] uppercase">
          OUR ROASTING
        </h2>

        <p className="text-amber-50 font-medium w-[320px] text-lg text-right">
          A cup of coffee on a warm summer day reminds you there's a bright side
          to every day. There's a great big coffee world waiting for you. And it
          tastes great!
        </p>
      </div>

      {data.map((item, index) => (
        <RoastingContent
          roastingData={item}
          key={item.id}
          handleMouseEnter={() => handleMouse(index, "enter")}
          handleMouseLeave={() => handleMouse(index, "leave")}
        />
      ))}
    </section>
  );
};

export default Roasting;
