"use server";

import { PrismaClient, Prisma } from "@prisma/client";
import { quizMemberInfoType } from "@/zustand/memberStore";

const prisma = new PrismaClient();

export const getQuiz = async () => {
  // Get Random Member
  const randomMember = await getRandomMember();
  // Validate randomMember
  if (!randomMember) return;
  
  // Get Member Name
  const memberName = randomMember.name;

  // Get Member Info
  const memberInfo = await getMemberInfo(memberName);
  // Validate memberInfo
  if (!memberInfo) return;

  // Get Member Image
  const memberImage = await getMemberImage(memberName);
  // Validate memberImage
  if (!memberImage) return;

  const quizMember = {
    name: memberName,
    nickname: randomMember.nickname,
    penlightLeft: randomMember.penlightLeft,
    penlightRight: randomMember.penlightRight,
    memberInfo: memberInfo.info,
    memberImage: memberImage.official,
  };

  return quizMember;
}

const getRandomMember = async () =>{
  // Get 1 Member Randomly
  const memberCount = await prisma.member.count();

  const randomMemberId = Math.floor(Math.random() * memberCount) + 1;

  const member = await prisma.member.findUnique({
    where: {
      id: randomMemberId, // Convert randomMemberId to a string
    },
  });

  return member;
}

const getMemberInfo = (memberName: string) => {
  const memberInfo = prisma.memberInfo.findFirst({
    where: {
      name: memberName,
    },
  });
  return memberInfo;
}

const getMemberImage = (memberName: string) => {
  const memberImage = prisma.memberImage.findFirst({
    where: {
      name: memberName,
    },
  });
  return memberImage;
}
