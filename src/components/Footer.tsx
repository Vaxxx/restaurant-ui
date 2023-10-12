import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 h-30 md:h-30 p-4 lg:px-20 mt-5 xl:px-40 text-blue-950 flex items-center justify-between flex-col md:flex-row">
     <div className={"bottom-0 flex flex-col gap-3 items-center"}>
         <Link
             href="/" className="flex items-center justify-items-center text-center p-1"><Image src={"/logo.png"} alt={"CSI"} width={50} height={50}/></Link>
         <p className={"text-sm break-words"}>Vax Eatery is both an online and offline eatery that can serve you meal at any place within a short time</p>
     </div>
        <p className={"mt-4 text-center"}>© ALL RIGHTS RESERVED, 2023. Designed by VAX</p>
    </div>
  );
};

export default Footer;
