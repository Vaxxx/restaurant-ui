import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";
import {getAuthSession} from "@/lib/auth";

//fetch all orders
export const GET = async (request: NextRequest) => {

   const session = await getAuthSession();
   if(session) {
       try {
            if(session.user.isAdmin) {
                const orders = await prisma.order.findMany()
                return new NextResponse(JSON.stringify(orders), {status: 200});
            }
           const orders = await prisma.order.findMany({
               where: {
                   userEmail: session.user.email!
               }
           })
           return new NextResponse(JSON.stringify(orders), {status: 200});
       } catch (error) {
           console.log("ERROR: " + error);
           return new NextResponse(JSON.stringify({message: "Something went wrong!"}), {status: 500});
       }
   }else{
       return new NextResponse(JSON.stringify({message: "You are not authenticated!"}), {status: 401});
   }
}


//add a category
export const POST = () => {
    return new NextResponse("Hello", {status: 200});
}