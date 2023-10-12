import {NextResponse} from "next/server";
import prisma from "@/lib/db";

//fetch all categories
export const GET = async () => {
   try{
       const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), {status: 200});
     }catch(error){
       console.log("ERROR: " + error);
       return new NextResponse(JSON.stringify({message: "Something went wrong!"}), {status: 50});
     }
}


//add a category
export const POST = () => {
    return new NextResponse("Hello", {status: 200});
}