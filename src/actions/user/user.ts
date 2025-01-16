"use server";

import prisma from "@/lib/prisma";
import { refreshToken } from "@/lib/refresh-token";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
};

export const findUser = async (clerkId:string) => {
  return await prisma.user.findUnique({
    where:{
      clerkId
    },
    include:{
      subscription:true,
      integrations:{
        select:{
          id:true,
          token:true,
          expiresAt:true,
          name:true
        }
      }
    }
  })
}


export const onBoardUser = async () => {
  const clerkUser = await getUser();
  try {
    const user = await findUser(clerkUser.id);
    if(user){
      if(user.integrations.length > 0){ 
        //- assumption : Only Instagram integrations is there (integrations[0].name = Instagram)
        const today = new Date();
        const time_left = user.integrations[0]?.expiresAt?.getTime()! - today.getTime();
        const days = Math.round(time_left/(1000*3600*24)); //? milliSec to Days

        if(days < 5){
          console.log('refresh');

          const refresh = refreshToken(user.integrations[0].token);
          
        }
      }
    }
  } catch (error) {
    
  }
};
