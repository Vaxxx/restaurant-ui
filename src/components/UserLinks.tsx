"use client";
import React from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

const UserLinks = () => {
    const {status } = useSession();
    return (
        <div>
            {status === 'authenticated' ? (
                    <div>
                        <Link href={"/orders"}>Orders</Link>
                        <button className={"pl-4"}  onClick={() => signOut()}>Logout </button>
                    </div>
            ):(
                <div>
                    <Link href={"/login"}>Login</Link>

                </div>
            )}
        </div>
    );
};

export default UserLinks;
