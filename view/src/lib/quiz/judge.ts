import { QUIZ_DATA, COLOR } from "@/lib/const";


export const isCorrectColor = (colorIdLeft: number, colorIdRight: number): boolean => {
  const correctColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const correctColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);
  if (correctColorLeft === null || correctColorRight === null) return false;
  const constColorIdLeft: number = JSON.parse(correctColorLeft)[COLOR.ID];
  const constColorIdRight: number = JSON.parse(correctColorRight)[COLOR.ID];
  // ここで、colorIdLeftとcolorIdRightの組み合わせが正解かどうかを判定する
  if(colorIdLeft === constColorIdLeft && colorIdRight === constColorIdRight) return true;
  if(colorIdLeft === constColorIdRight && colorIdRight === constColorIdLeft) return true;
  return false;
}
