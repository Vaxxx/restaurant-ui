import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "@/components/UserLinks";

const Navbar = () => {
  const user = false;
  return (
      <div className={"h-12 text-blue-950 flex items-center justify-between border-b-2 border-b-blue-950 text-sm py-3 md:h-24 lg:px-20 lx:px-40"}>
          {/*Left links*/}
          <div className={"hidden md:flex gap-4"}>
              <Link href={"/"}>Home Page</Link>
              <Link href={"/menu"}>Menu</Link>
              <Link href={"/menu"}>Contact</Link>
          </div>
        {/*LOGO*/}
        <div className={"flex ml-5 mb-2 flex-row gap-3 items-center md:text-center px-1 md:justify-center bg-slate-100 hover:bg-white"}>
          <Image src={"/logo.png"} alt={"CSI"} width={50} height={50}/>
          <Link href={"/"} className={"my-auto uppercase"}>Vax Eatery</Link>
        </div>
        {/*MOBILE MENU*/}
          <div className={"bg-slate-100 hover:bg-white p-2 py-2"}>
              <Menu/>
          </div>
          {/*right links*/}
          <div className={"hidden md:flex gap-4 items-center justify-end flex-1"}>
              <div className={"md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-slate-200 px-1 rounded-md"}>
                  <Image src={"/phone.png"} alt={"09064689548"} width={20} height={20} />
                  <span className={"text-sm"}>(+234) 906 468 9548 </span>
             </div>
            <UserLinks/>
          <CartIcon/>
       </div>
      </div>
  );
};

export default Navbar;
