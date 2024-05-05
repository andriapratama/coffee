import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { RoastingType } from "@/types/roasting-type";

interface Props {
  roastingData: RoastingType;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const RoastingContent: React.FC<Props> = ({
  roastingData,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`w-full h-[20vh] rounded-full flex pr-7 pl-16 mb-10 items-center justify-between relative ${
        roastingData.isActive ? "bg-yellow-600" : "bg-emerald-950"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`font-archivo text-[50px] font-bold ${
          roastingData.isActive ? "text-emerald-950" : "text-amber-50"
        }`}
      >
        {roastingData.title}
      </div>

      <div
        className={`absolute right-[200px] w-[350px] h-[350px] rounded-full overflow-hidden flex items-center justify-center z-20 duration-200 ease-in-out ${
          roastingData.isActive ? "scale-100" : "scale-0"
        }`}
      >
        <Image
          src={roastingData.image}
          alt={roastingData.title}
          width={350}
          height={350}
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`w-[13vh] h-[13vh] rounded-full flex items-center justify-center ${
          roastingData.isActive ? "bg-emerald-950" : "bg-yellow-600"
        }`}
      >
        <ArrowUpRight
          className={`w-[70px] h-[70px] ${
            roastingData.isActive ? "text-yellow-600" : "text-emerald-950"
          }`}
        />
      </div>
    </div>
  );
};

export default RoastingContent;
