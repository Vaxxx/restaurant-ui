"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import {ImMenu} from "react-icons/im";
import {AiFillCloseCircle} from "react-icons/ai";

const links = [
  {id: 1, title: "Home Page", url: "/"},
  {id: 2, title: "Menu", url: "/menu"},
  {id: 3, title: "Office Hours", url: "/"},
  {id: 4, title: "Contact Us", url: "/"},
]

const Menu = () => {
  const [open, setOpen] = useState(false);

const user = false;
  return (
    <div>
      {/* LONG WAY */}
      {!open ? (
         <button onClick={()=> setOpen(true)}>
           <ImMenu size={25}/>
         </button>
      ) : (
          <button onClick={()=> setOpen(false)}>
            <AiFillCloseCircle size={25}/>
          </button>
      )}
        {open &&
          <div className="bg-blue-950 text-white absolute left-0 top-15 w-full h-[calc(100vh-7rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
            {!user ? (
                <Link href={"/login"} onClick={() => setOpen(false)}>Login</Link>
            ):(
                <Link href={"/orders"} onClick={() => setOpen(false)} >Orders</Link>
            )}
            <Link href={"/cart"} onClick={() => setOpen(false)}>
                <CartIcon/>
            </Link>
        </div>
        }
    </div>
  );
};

export default Menu;
