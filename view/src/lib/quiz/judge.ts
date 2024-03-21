import { QUIZ_DATA, COLOR } from "@/lib/const";


export const judgeColorMatch = (colorIdLeft: number, colorIdRight: number): string => {
  const correctColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const correctColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);
  if (correctColorLeft === null || correctColorRight === null) return "***";
  const constColorIdLeft: number = JSON.parse(correctColorLeft)[COLOR.ID];
  const constColorIdRight: number = JSON.parse(correctColorRight)[COLOR.ID];

  // Replace Methods with List
  const submitColorList = [colorIdLeft, colorIdRight];
  let correctColorList = [constColorIdLeft, constColorIdRight];
  
  let correctCount = 0;
  submitColorList.forEach((color, index) => {
    if (correctColorList.includes(color)) {
      correctColorList[index] = -1;
      correctCount++;
    }
  });
  console.log("correctCount", correctCount);

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
