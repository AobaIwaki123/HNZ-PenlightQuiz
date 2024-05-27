"use server";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getQuiz = async () => {
  // Get Random Member
  const randomMember = await getRandomMember();
  // Validate randomMember
  if (!randomMember) return;
  
  // Get Member Name
  const memberName = randomMember.name;
  const penlightColorLeft = randomMember.penlightLeft;
  const penlightColorRight = randomMember.penlightRight;

  // Get Member Info
  const memberInfo = getMemberInfo(memberName);

  // Get Member Image
  const memberImage = getMemberImage(memberName);

  // Get Color
  const penlightNameLeft = getPenlightName(penlightColorLeft);
  const penlightNameRight = getPenlightName(penlightColorRight);

  // Wait All
  const [Info, Image, Left, Right] = await Promise.all([
    memberInfo,
    memberImage,
    penlightNameLeft,
    penlightNameRight,
  ]);

  // Validate 
  if (!Info || !Image || !Left || !Right) return;

  const quizMember = {
    name: memberName,
    nickname: randomMember.nickname,
    penlightLeft: randomMember.penlightLeft,
    penlightRight: randomMember.penlightRight,
    penlightLeftName: Left.nameJa,
    penlightRightName: Right.nameJa,
    memberInfo: Info.info, // Access the 'info' property using optional chaining
    memberImage: Image.official,
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

export const getPenlightName = (penlightId: number) => {
  const penlightName = prisma.color.findFirst({
    where: {
      id: penlightId,
    },
  });
  return penlightName;
}
