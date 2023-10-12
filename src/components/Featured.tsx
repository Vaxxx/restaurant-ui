import Image from "next/image";
import React from "react";
import {TbCurrencyNaira} from "react-icons/tb";
import {getAllProducts} from "@/app/actions/product";

const FeaturedPage = async() => {
    const featuredProducts = await getAllProducts();
  return (
    <div className={"w-screen  overflow-x-scroll text-slate-950"}>
        {/*wrapper  */}
      <div className={"w-max flex"}>
          {/*single item */}
          {featuredProducts.map((item) => (
              <div key={item.id} className={"w-screen h-[60vh] mt-5 flex flex-col items-center justify-around p-4 hover:bg-slate-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] "}>
                  {/*image container*/}
                  {item.img &&(
                      <div className="relative flex-1 w-full h-[30vh] hover:rotate-[60deg] transition-all duration-500">
                          <Image src={item.img} alt={item.title} fill className={"object-contain"}/>
                      </div>
                  )}
                  {/*text container*/}
                  <div className={"flex-1 flex flex-col gap-4 items-center text-center mb-5"}>
                      <h1 className={"text-xl font-bold uppercase"}>{item.title}</h1>
                      <p className="p-4 2xl p-8">{item.desc}</p>
                      <span className={"flex flex-row text-xl font-bold"}><TbCurrencyNaira size={25}/> {item.price}</span>
                      <button className={"bg-slate-950 rounded-md text-white p-2 mb-5"}>Add to Cart</button>
                      <p className={"mt-4"}></p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
