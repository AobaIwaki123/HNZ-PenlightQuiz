"use server";

// import { sql } from "@vercel/postgres";
import { PenlightProps, PenlightColor } from "@/lib/type";

// export const getRandomMember = async () => {
//   const { rows } = await sql`SELECT * from penlight_quiz ORDER BY RANDOM() LIMIT 1`;
//   const quizData = rows[0];
// 
//   const memberName: string = quizData.member_name;
//   const nickname: string = quizData.nickname;
//   const memberImage: string = quizData.member_image;
//   const memberColorIdLeft: number = quizData.member_color_id_left;
//   const memberColorIdRight: number = quizData.member_color_id_right;
//   const memberInfo: string = quizData.member_info;
// 
//   const memberColorLeft: PenlightColor = await getColorName(String(memberColorIdLeft));
//   const memberColorRight: PenlightColor = await getColorName(String(memberColorIdRight));
// 
//   const penlightProps: PenlightProps = {
//     memberName,
//     memberImage,
//     memberInfo,
//     nickname,
//     colorLeft: memberColorLeft,
//     colorRight: memberColorRight,
//   };
// 
//   return penlightProps;
// };

// export const getColorName = async (colorId: string) => {
//   const { rows } = await sql`SELECT color_name_jn, color_name_en from penlight WHERE penlight_id = ${colorId}`;
//   let colorNameJn: string = rows[0].color_name_jn;
//   const colorNameEn: string = rows[0].color_name_en;
//   if(Number(colorId) > 7) {
//     colorNameJn += `左(${-colorId+15})`;
//   } else {
//     colorNameJn += `右(${colorId})`;
//   }
//   const colorName: PenlightColor = {
//     id: Number(colorId),
//     nameJn: colorNameJn,
//     nameEn: colorNameEn,
//   };
// 
//   return colorName;
// };
