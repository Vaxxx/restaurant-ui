"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        title: "Chicken & Rice ready in few minutes",
        image: "/slides/slide1.jpg",
        alt: "Slide: Chicken and Fried Rice"
    }, {
        id: 2,
        title: "Monchuttus, our own special recipe... Just for you",
        image: "/slides/slide2.jpg",
        alt: "Slide: Monchuttus"
    }, {
        id: 3,
        title: "Peri bologone soup - our foreign delicacy",
        image: "/slides/slide3.jpg",
        alt: "Slide: Peri bologone soup"
    },
    {
        id: 4,
        title: "Varieties of different dessert to cool off",
        image: "/slides/slide4.jpg",
        alt: "Slide: Varieties of dessert"
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
         const interval = setInterval(() =>{
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1 ))
         }, 5000);
         return () => clearInterval(interval);
    }, []);

  return (
    <div className={"flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row"}>
        {/*text container*/}
      <div className={"flex-1 flex items-center justify-center flex-col gap-8 text-slate-950 font-bold"}>
          <h1 className={"text-3xl text-center uppercase p-4 md:text-4xl xl:text-5xl"}>
              {data[currentSlide].title}
          </h1>
          <button className="btn bg-slate-950 text-white py-4 px-8">
            Order Now
          </button>
      </div>
      {/*image container*/}
      <div className={"w-full flex-1 relative"}>
         <Image src={data[currentSlide].image} alt={data[currentSlide].alt} fill className={"object-cover"}/>
      </div>
    </div>
  );
};

export default Slider;
