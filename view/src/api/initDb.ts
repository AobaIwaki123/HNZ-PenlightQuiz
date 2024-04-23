"use server";

import { PrismaClient, Prisma } from "@prisma/client";
import memberJson from "./template/member.json";
import memberInfoJson from "./template/memberInfo.json";
import memberImageJson from "./template/memberImage.json";
import colorJson from "./template/color.json";
import legacyPenlightQuizJson from "./template/legacy_penlight_quiz.json";
import legacyPenlight from "./template/legacy_penlight.json";

const prisma = new PrismaClient();

export const initMemberTables = async () => {
  console.log("Initializing Member Tables")
  // Initialize Member Table
  // await prisma.member.deleteMany();
  await prisma.member.createMany({ data: memberJson.data });

  // Initialize MemberImage Table
  // await prisma.memberImage.deleteMany();
  await prisma.memberImage.createMany({ data: memberImageJson.data });

  // Initialize MemberInfo Table
  // await prisma.memberInfo.deleteMany();
  await prisma.memberInfo.createMany({ data: memberInfoJson.data });

  // Initialize Color Table
  // await prisma.color.deleteMany();
  await prisma.color.createMany({ data: colorJson.data });

  // FIXME: Delete below later
  // Initialize LegacyPenlight Table
  // await prisma.penlight.deleteMany();
  await prisma.penlight.createMany({ data: legacyPenlight.data });

  // Initialize LegacyPenlightQuiz Table
  // await prisma.penlight_quiz.deleteMany();
  await prisma.penlight_quiz.createMany({ data: legacyPenlightQuizJson.data });

  console.log("Finish Initialize Member Tables")
};
