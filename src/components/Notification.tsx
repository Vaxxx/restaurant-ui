import React from 'react'
import {TbCurrencyNaira} from "react-icons/tb";

const Notification = () => {
  return (
      <div className={"h-12 bg-blue-950 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer"}>
          Food delivered on your door step. Order a complete diet for as low as <TbCurrencyNaira size={22}/>1,200
      </div>
  )
}

export default Notification