import { create } from "zustand"
import { QuizMemberInfoType } from "@/lib/type";

type QuizMemberStore = QuizMemberInfoType & {
  setQuizMemberInfo: (info: QuizMemberInfoType) => void;
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
