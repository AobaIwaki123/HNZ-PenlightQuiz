import { QUIZ_DATA, COLOR } from "@/lib/const";


export const judgeColorMatch = (colorIdLeft: number, colorIdRight: number): string => {
  const correctColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const correctColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);
  if (correctColorLeft === null || correctColorRight === null) return "***";
  const constColorIdLeft: number = JSON.parse(correctColorLeft)[COLOR.ID];
  const constColorIdRight: number = JSON.parse(correctColorRight)[COLOR.ID];

  const submitColorSet = new Set([colorIdLeft, colorIdRight]);
  const correctColorSet = new Set([constColorIdLeft, constColorIdRight]);
  const intersection = new Set([...submitColorSet].filter(x => correctColorSet.has(x)));
  switch (intersection.size) {
    case 0:
      return "不正解！";
    case 2:
      return "正解！";
    case 1:
      switch (correctColorSet.size){
        case 1:
          return "正解！";
        case 2:
          return "惜しい！";
        default:
          return "***";
      }
    default:
      return "***";
  }
}
