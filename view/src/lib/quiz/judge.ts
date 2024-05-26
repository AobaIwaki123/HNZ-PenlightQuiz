import { QUIZ_DATA, COLOR } from "@/lib/const";
import { useQuizMemberStore } from "@/zustand/memberStore";

export const judgeColorMatch = (colorIdLeft: number, colorIdRight: number): string => {
  const quizMember = useQuizMemberStore((state) => state);
  let correctColorList = [quizMember.penlightLeft, quizMember.penlightLeft];

  let correctCount = 0;

  [colorIdLeft, colorIdRight].forEach((color, index) => {
    if (correctColorList.includes(color)) {
      correctColorList[index] = -1;
      correctCount++;
    }
  });

  switch (correctCount) {
    case 0:
      return "不正解！";
    case 2:
      return "正解！";
    case 1:
      return "惜しい！";
    default:
      return "***";
  }
}
