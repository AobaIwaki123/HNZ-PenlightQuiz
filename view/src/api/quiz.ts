"use server";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getQuiz = async () => {
  // Get Random Member
  const randomMember = await getRandomMember();
  // Validate randomMember
  if (!randomMember) return;
  
  // Get Member Name
  const memberId = randomMember.id;
  const memberName = randomMember.name;
  const penlightColorLeft = randomMember.penlightLeft;
  const penlightColorRight = randomMember.penlightRight;

  // Get Member Image
  const memberImage = getMemberImage(memberId);
  
  // Get Member Info
  const memberInfo = getMemberInfo(memberId);


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
    memberImage: Image.url,
  };

  return quizMember;
}

const getRandomInt = (min: number, max: number): number => {
  // min と max を含むランダムな整数を返す
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomMember = async () =>{
  // Get 1 Member Randomly
  const memberCount = await prisma.member.count();

  const randomMemberId = getRandomInt(1, memberCount);

  const member = await prisma.member.findUnique({
    where: {
      id: randomMemberId, // Convert randomMemberId to a string
    },
  });

  return member;
}

const getMemberInfo = (memberId: number) => {
  const memberInfo = prisma.memberInfo.findFirst({
    where: {
      memberId: memberId,
    },
  });
  return memberInfo;
};

const getMemberImage = async (memberId: number) => {
  const memberImages = await prisma.memberImage.findMany({
    where: {
      memberId: memberId,
    },
  })

  const randomIdx = getRandomInt(0, memberImages.length - 1);

  return memberImages[randomIdx];
}

export const getPenlightName = (penlightId: number) => {
  const penlightName = prisma.penlightColor.findFirst({
    where: {
      id: penlightId,
    },
  });
  return penlightName;
}
