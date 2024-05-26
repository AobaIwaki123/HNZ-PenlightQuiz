"use server";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getQuiz = async () =>{
  // Get 1 Member Randomly
  const memberCount = await prisma.member.count();

  const randomMemberId = Math.floor(Math.random() * memberCount) + 1;

  const member = await prisma.member.findUnique({
    where: {
      id: randomMemberId, // Convert randomMemberId to a string
    },
  });

  console.log(member);
}
