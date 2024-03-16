"use server";

import { sql } from "@vercel/postgres";
import { QUIZ_DATA } from "@/lib/const";

export const getRandomMember = async () => {
  const { rows } = await sql`SELECT * from penlight_quiz ORDER BY RANDOM() LIMIT 1`;
  const quizData = rows[0];

  const memberName: string = quizData.member_name;
  const nickname: string = quizData.nickname;
  const memberImage: string = quizData.member_image;
  const memberColorIdLeft: number = quizData.member_color_id_left;
  const memberColorIdRight: number = quizData.member_color_id_right;
  const memberInfo: string = quizData.member_info;

  const memberColorLeft: string = await getColorName(String(memberColorIdLeft));
  const memberColorRight: string = await getColorName(String(memberColorIdRight));

  return {
    [QUIZ_DATA.MEMBER_NAME]: memberName,
    [QUIZ_DATA.NICKNAME]: nickname,
    [QUIZ_DATA.MEMBER_IMAGE]: memberImage,
    [QUIZ_DATA.MEMBER_COLOR_LEFT]: memberColorLeft,
    [QUIZ_DATA.MEMBER_COLOR_RIGHT]: memberColorRight,
    [QUIZ_DATA.MEMBER_INFO]: memberInfo,
  };
};

export const getColorName = async (colorId: string) => {
  const { rows } = await sql`SELECT color_name from penlight WHERE penlight_id = ${colorId}`;
  return rows[0].color_name;
};
