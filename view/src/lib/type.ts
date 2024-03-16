import { QUIZ_DATA } from "./const";

export type PenlightProps = {
  memberName: string;
  memberImage: string;
  memberInfo: string;
  nickname: string;
  colorLeft: PenlightColor;
  colorRight: PenlightColor;
};

export type PenlightColor = {
  id: number;
  nameJn: string;
  nameEn: string;
};

