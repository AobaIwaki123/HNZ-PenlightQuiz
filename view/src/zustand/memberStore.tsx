import { create } from "zustand"

export type quizMemberInfoType = {
  name: string;
  nickname: string;
  penlightLeft: number;
  penlightRight: number;
  memberInfo: string;
  memberImage: string;
}

type QuizMemberStore = quizMemberInfoType & {
  setQuizMemberInfo: (info: quizMemberInfoType) => void;
};

const useQuizMemberStore = create<QuizMemberStore>((set) => ({
  name: " ",
  nickname: " ",
  penlightLeft: 0,
  penlightRight: 0,
  memberInfo: " ",
  memberImage: " ",
  setQuizMemberInfo: (info) => set(() => info),
}));

export { useQuizMemberStore };
