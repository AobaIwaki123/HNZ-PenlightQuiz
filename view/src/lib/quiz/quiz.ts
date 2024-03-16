"use client";
import { getRandomMember, getColorName } from "@/api/quiz";
import { QUIZ_DATA } from "@/lib/const";

export const getNextQuiz = async () => {
  console.log("getNextQuiz");
  const quizData = await getRandomMember();
  localStorage.setItem(QUIZ_DATA.MEMBER_NAME, quizData[QUIZ_DATA.MEMBER_NAME]);
  localStorage.setItem(QUIZ_DATA.NICKNAME, quizData[QUIZ_DATA.NICKNAME]);
  localStorage.setItem(QUIZ_DATA.MEMBER_IMAGE, quizData[QUIZ_DATA.MEMBER_IMAGE]);
  localStorage.setItem(QUIZ_DATA.MEMBER_COLOR_LEFT, quizData[QUIZ_DATA.MEMBER_COLOR_LEFT]);
  localStorage.setItem(QUIZ_DATA.MEMBER_COLOR_RIGHT, quizData[QUIZ_DATA.MEMBER_COLOR_RIGHT]);
  localStorage.setItem(QUIZ_DATA.MEMBER_INFO, quizData[QUIZ_DATA.MEMBER_INFO]);
};

