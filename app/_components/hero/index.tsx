"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import PoliceLine from "@/components/police-line";
import { ArrowDown, ArrowDownGrey, ArrowUp } from "@/constants/Icons";
import { Coffee1, Coffee2, Coffee3, Coffee4 } from "@/constants/images";

interface DataType {
  coffee: StaticImageData;
  status: boolean;
}

const HeroData: DataType[] = [
  {
    coffee: Coffee1,
    status: false,
  },
  {
    coffee: Coffee2,
    status: false,
  },
  {
    coffee: Coffee3,
    status: false,
  },
  {
    coffee: Coffee4,
    status: true,
  },
];

const Hero = () => {
  const [data, setData] = useState<DataType[]>(HeroData);
  const [mainImage, setMainImage] = useState<StaticImageData>(data[3].coffee);

  const handleSetMainImage = (index: number) => {
    const newData = [...data];
    const getIdx = newData.map((e) => e.status).indexOf(true);
    newData[getIdx].status = false;
    newData[index].status = true;

    setData(newData);
    setMainImage(newData[index].coffee);
  };
  return (
    <>
      <section className="w-full relative">
        <h1 className="w-full text-center font-archivo font-extrabold text-[200px] text-amber-50 leading-[160px]">
          EXPRESSO YOURSELF
        </h1>

        <p className="text-amber-50 w-[290px] font-archivo font-medium text-lg leading-6 absolute top-[480px] left-[70px]">
          Pure coffee, pure community, pure experience, because you can never
          have too much coffee in your life.
        </p>

        <div className="absolute top-[580px] rotate-[60deg] left-[150px]">
          <Image src={ArrowUp} alt="arrow" width={120} height={120} />
        </div>

        <div className="absolute top-[380px] right-[230px] -rotate-90 -scale-y-100">
          <Image src={ArrowDown} alt="arrow" width={60} height={60} />
        </div>

        <div className="flex gap-2 absolute top-[520px] right-[80px] justify-end z-50 w-[200px] flex-wrap">
          {HeroData.map((data, index) => {
            return (
              <div
                className="w-[90px] h-[90px] flex justify-center rounded-full bg-emerald-950 overflow-hidden"
                key={index}
                onMouseEnter={() => handleSetMainImage(index)}
              >
                <Image
                  src={data.coffee}
                  alt={`coffee-` + index}
                  width={100}
                  height={150}
                  className="object-contain mt-5 w-[50px] h-[100px]"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="relative z-10 mt-10">
        <div className="w-full flex justify-center h-[400px] overflow-y-hidden relative z-0">
          <div className="w-[800px] h-[800px] rounded-full bg-emerald-950 flex justify-center items-center"></div>
        </div>
        <div className="w-full flex justify-center h-[400px] overflow-hidden relative z-0">
          <div className="w-[800px] h-[800px] rounded-full -mt-[400px] flex justify-center items-center overflow-hidden bg-gradient-to-r from-amber-50 via-neutral-700 to-amber-50"></div>
        </div>

        <div className="w-full h-[518px] -mt-[918px] overflow-y-hidden flex justify-center relative z-20">
          <div className="w-[800px] h-[800px] mt-[120px] flex justify-center items-center">
            <Image
              src={mainImage}
              alt="coffee"
              width={1200}
              height={1000}
              className="object-contain w-[800px] h-[1000px]"
            />
          </div>
        </div>

        <div className="w-full flex justify-center -mt-[1px] relative z-20">
          <div className="w-[800px] h-[800px] -mt-[399px] rounded-full flex justify-center items-center overflow-hidden">
            <Image
              src={mainImage}
              alt="coffee"
              width={1200}
              height={1000}
              className="object-contain w-[800px] h-[1000px]"
              priority
            />
          </div>
        </div>
        <PoliceLine position="back" className="-mt-[400px]" direction="right" />
        <PoliceLine position="front" className="-mt-[400px]" direction="left" />
      </section>
      <section className="w-full relative bg-amber-50 h-[450px] -mt-[400px]">
        <div className="absolute top-[210px] left-[150px] -rotate-[130deg] -scale-y-100 z-40">
          <Image src={ArrowDownGrey} alt="arrow" width={70} height={70} />
        </div>
        <p className="absolute top-[250px] right-[70px] z-40 font-archivo text-lg font-medium leading-6 text-emerald-900 w-[300px] text-right">
          Come in and see our coffee beans, trusted to deliver the world's best
          coffee in local community across the country.
        </p>
      </section>
    </>
  );
};

export default Hero;
