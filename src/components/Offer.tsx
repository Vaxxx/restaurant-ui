import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className={"bg-slate-800 h-screen flex flex-col md:flex-row mt-5 md:justify-between md:bg-[url('/offerBg.png')]"}>
       {/*text container */}
        <div className={"flex-1 flex flex-col justify-center items-center text-center gap-8 p-6"}>
           <h1 className="text-white text-4xl font-bold xl:text-5xl">
               Delicious Burger and French Fries
           </h1>
            <p className="text-white xl:text-xl">
                Our delicacies are special, our staff are top-notch. Together we tend to provide you with the best
                and ignite your taste buds and give you a home away from home.
            </p>
            <CountDown/>
            <button className="bg-slate-950 ring-gray-200 text-white ring-4 rounded-md py-3 px-6">Order Now</button>
        </div>
         {/*Image container */}
        <div className="flex-1 w-full relative md:h-full">
            <Image src={"/offerProduct.png"} alt={"featured product"} className={"object-contain"} fill />
        </div>
    </div>
  );
};

export default Offer;
