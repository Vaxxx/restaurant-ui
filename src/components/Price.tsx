"use client";

import React, { useEffect, useState } from "react";
import {FaGreaterThan, FaLessThan} from "react-icons/fa";

type Props = {
    price: number;
    id: number;
    options?: {title: string; additionalPrice: number}[];
};

const Price = ({price, id, options}: Props) => {
const [total, setTotal] = useState(price)
const [quantity, setQuantity] = useState(1)
const [selected, setSelected] = useState(0);

    useEffect(() => {
         setTotal(quantity * (options ? price + options[selected].additionalPrice : price ));
    }, [quantity, selected, options, price]);


  return (
     <div className={"flex flex-col gap-4"}>
         <h2 className={"text- xl font-bold"}>${total.toFixed(2)}</h2>
         {/*options container*/}
         <div className={""}>
             {options?.map((option, index)=>(
                 <button
                      className={"min-w-[5rem] p-2 ring-1 ring-slate-900 rounded-md"}
                     key={option.title}
                 style={{
                     background: selected=== index ? "#112222" : "white",
                     color: selected === index ? "white" : "#112222"
                 }}
                      onClick={()=> setSelected(index)}
                 >{option.title}</button>
             ))}
         </div>
         {/*quantity and add button container*/}
         <div className={"flex justify-between items-center"}>
             {/*quantity*/}
             <div className="flex justify-between w-full p-3 ring-1 ring-slate-900">
                 <span>Quantity</span>
                 <div className={"flex gap-4 items-center"}>
                    <button onClick={()=>setQuantity(prev=>(prev <= 1 ? 1 : prev - 1))}><FaLessThan size={20}/> </button>
                     <span>{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>(prev >= 10 ? 10 : prev + 1))}><FaGreaterThan size={20}/> </button>
                 </div>
             </div>
              {/*cart button*/}
             <button className={"uppercase bg-slate-950 text-white  ring-1 ring-slate-900 "}>
                 Add to Cart
             </button>
         </div>
     </div>
  );
};

export default Price;
