import Image from "next/image";
import React, { createRef, useEffect, useRef, useState } from "react";

import { SpacesImage } from "@/constants/spaces";

const text: string =
  "USE PREMIUM ARABICA BEANS AND FRESHLY GROUND SPICES TO ACHIEVE AN UNDENIABLY RICH, FLAFOUR COFFEES";

const Quotes = () => {
  const [data, setData] = useState<any[]>([]);

  const ref = useRef<any>([]);
  ref.current = data.map((element, i) => ref.current[i] ?? createRef());

  const handleShowText = () => {
    try {
      const windowWidth = window.innerWidth;
      const newWindowWidth = windowWidth - 128;

      const textArray = text.split(" ");

      let newArray: any = [];

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) return null;

      context.font = "bold 250px Calibri";

      textArray.map((text) => {
        const res = context.measureText(text).width;

        newArray.push(res);
      });

      let sum = 0;

      let layoutArray: any[] = [];

      let imageIndex: number = 0;

      for (let i = 0; i < textArray.length; i++) {
        sum += newArray[i];

        if (sum < newWindowWidth) {
          layoutArray.push({ type: "text", value: textArray[i], status: true });
        } else if (sum > newWindowWidth) {
          const image = SpacesImage.filter((e, index) => index === imageIndex);
          layoutArray.push({
            type: "image",
            value: image[0].src,
            status: true,
          });
          layoutArray.push({ type: "text", value: textArray[i], status: true });
          sum = 0;

          imageIndex += 1;
        }
      }

      setData(layoutArray);

      handleRemove(layoutArray);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowText();
  }, []);

  const handleRemove = (layoutArray: any[]) => {
    setTimeout(() => {
      let newData = [...layoutArray];

      ref.current.map((item: any, i: number) => {
        if (!item.current) return null;
        if (item.current.offsetWidth < 150) {
          newData[i].status = false;
        }
      });

      setData(newData);
    }, 1000);
  };
  return (
    <section className="w-full px-16 py-[200px]">
      <div className="w-full font-archivo font-bold text-[120px] uppercase text-amber-50 leading-[80px] flex flex-wrap justify-between gap-6 items-center">
        {!data
          ? null
          : data.map((item, index) => {
              if (item.type === "text") {
                return <p key={index}>{item.value as string}</p>;
              } else {
                return (
                  <div
                    className={`flex-1 h-[90px] rounded-full overflow-hidden flex justify-center items-center ${
                      item.status === false && "hidden"
                    }`}
                    key={index}
                    ref={ref.current[index]}
                  >
                    <Image
                      src={item.value}
                      alt={`Product ${index}`}
                      width={800}
                      height={1000}
                      className="object-contain w-full"
                    />
                  </div>
                );
              }
            })}
      </div>
    </section>
  );
};

export default Quotes;
