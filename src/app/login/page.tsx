"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {signIn, useSession} from "next-auth/react";
import {AiFillGithub} from "react-icons/ai";
import {useRouter} from "next/navigation";

const LoginPage = () => {
  const {data, status} = useSession();
  const router = useRouter()
  console.log("DATA:", data);
  console.log("STATUS: ",status);

  if(status === "loading")
  {
    return <h2>Loading...</h2>
  }else if(status === "authenticated"){
    router.push("/");
  }
  return (
      <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
        {/* BOX */}
        <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[110%] md:w-full lg:w-[60%] 2xl:w-1/2">
          {/* IMAGE CONTAINER */}
          <div className="relative h-1/3 w-full md:h-full md:w-1/2">
            <Image src="/loginBg.png" alt="login" fill className="object-cover"/>
          </div>
          {/* FORM CONTAINER */}
          <div className="p-10 flex flex-col gap-8 md:w-1/2">
            <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
            <p>Log into your account or create a new one using social buttons</p>
            <button
                onClick={() => signIn("google")}
                className="flex gap-4 p-4 ring-1 ring-red-200 rounded-md">
              <Image
                  src="/google.png"
                  alt="google"
                  width={20}
                  height={20}
                  className="object-contain"
              />
              <span>Sign in with Google</span>
            </button>
            <button
                onClick={() => signIn("github")}
                className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
               <AiFillGithub size={20}/>
              <span>Sign in with Github </span>
            </button>
            <p className="text-sm">
              Have a problem?<Link className="underline" href="/"> Contact us</Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
