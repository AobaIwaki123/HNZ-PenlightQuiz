"use server";

import { PrismaClient, Prisma } from "@prisma/client";
import memberJson from "./template/member.json";
import memberInfoJson from "./template/memberInfo.json";
import memberImageJson from "./template/memberImage.json";
import colorJson from "./template/color.json";

const prisma = new PrismaClient();

export async function initMemberTables() {
  // Initialize Member Table
  await prisma.member.deleteMany();
  await prisma.member.createMany({ data: memberJson.data });

  // Initialize MemberImage Table
  await prisma.memberImage.deleteMany();
  await prisma.memberImage.createMany({ data: memberImageJson.data });

  // Initialize MemberInfo Table
  await prisma.memberInfo.deleteMany();
  await prisma.memberInfo.createMany({ data: memberInfoJson.data });

  // Initialize Color Table
  await prisma.color.deleteMany();
  await prisma.color.createMany({ data: colorJson.data });
}
