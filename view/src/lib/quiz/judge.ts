import { QUIZ_DATA, COLOR } from "@/lib/const";


export const judgeColorMatch = (colorIdLeft: number, colorIdRight: number): number => {
  const correctColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const correctColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);
  if (correctColorLeft === null || correctColorRight === null) return -1;
  const constColorIdLeft: number = JSON.parse(correctColorLeft)[COLOR.ID];
  const constColorIdRight: number = JSON.parse(correctColorRight)[COLOR.ID];

  const submitColorSet = new Set([colorIdLeft, colorIdRight]);
  const correctColorSet = new Set([constColorIdLeft, constColorIdRight]);
  const intersection = new Set([...submitColorSet].filter(x => correctColorSet.has(x)));
  return intersection.size;
}
