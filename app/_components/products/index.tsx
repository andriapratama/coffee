import Image from "next/image";
import React from "react";

import { products } from "@/constants/products";

const Products = () => {
  return (
    <section className="bg-amber-50 w-full px-16 font-archivo pb-32">
      <div className="w-full flex justify-between items-center">
        <p className="text-emerald-900 font-medium w-[280px] text-lg">
          There's always room for coffee, it's not just coffee, it's an
          experience, life better with coffee
        </p>

        <h2 className="text-emerald-900 font-bold text-[100px] uppercase">
          OUR COFFEE
        </h2>
      </div>

      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-7 w-full pt-8">
        {products.map((product) => (
          <div
            className="relative w-full flex justify-center items-center"
            key={product.id}
          >
            <div className="absolute top-0 left-0 text-emerald-900 font-medium font-archivo text-2xl">
              {product.name}
            </div>

            <div className="w-full h-[400px] rounded-full overflow-hidden mt-3 flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain object-top w-full h-auto duration-500 ease-in-out hover:scale-110"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
