"use client";

import AnswerCard from "@/components/ui/answerCard";
import NickNameCard from "@/components/ui/nicknameCard";
import PenlightCard from "@/components/ui/penlightCard";
import CustomButton from "@/components/ui/custmoButton";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { judgeColorMatch } from "@/lib/quiz/judge";
import { getQuiz } from "@/api/quiz";
import { useQuizMemberStore } from "@/zustand/memberStore";

export default function Home() {
  const router = useRouter();

  const setMemberInfo = useQuizMemberStore((state) => state.setQuizMemberInfo);

  const quizMember = useQuizMemberStore((state) => state);

  if (typeof window === "undefined") return false;

  const nickname = quizMember.nickname;
  const colorNameLeft = quizMember.penlightLeftName;
  const colorNameRight = quizMember.penlightRightName;

  const IsCorrectAnswer = () => {
    const searchParams = useSearchParams();
    const colorIdLeft: number = Number(searchParams.get("colorIdLeft"));
    const colorIdRight: number = Number(searchParams.get("colorIdRight"));
    return judgeColorMatch(
      colorIdLeft,
      colorIdRight,
      quizMember.penlightLeft,
      quizMember.penlightRight
    );
  };

  const moveToQuiz = () => {
    const quizMember = getQuiz();

    // If member comes, log it
    quizMember.then((quizMemberInfo) => {
      // Validate quizMemberInfo
      if (!quizMemberInfo) return;
      setMemberInfo(quizMemberInfo);
    });
    router.push("/quiz");
  };

  const moveToTop = () => {
    router.push("/");
  };

  return (
    <main>
      <div
        className="flex flex-col h-screen bg-basecolor text-2xl sm:text-5xl lg:text-7xl"
        id="main"
      >
        <div className="flex h-2/3">
          <div className="flex flex-col w-1/2 bg-basecolor">
            <div className="flex h-1/2">
              <AnswerCard>{IsCorrectAnswer()}</AnswerCard>
            </div>
            <div className="flex flex-auto bg-basecolor">
              <NickNameCard>{nickname}</NickNameCard>
            </div>
          </div>
          <div className="flex flex-col flex-auto bg-primarycolor">
            <div className="flex h-1/2 bg-basecolor">
              <PenlightCard>{colorNameLeft}</PenlightCard>
            </div>
            <div className="flex flex-auto bg-basecolor">
              <PenlightCard>{colorNameRight}</PenlightCard>
            </div>
          </div>
        </div>
        <div className="flex flex-auto bg-basecolor ">
          <div className="flex w-1/2">
            <CustomButton
              onClick={moveToTop}
              >Top Page</CustomButton>
          </div>
          <div className="flex flex-auto">
            <CustomButton
              onClick={moveToQuiz}
              >Next Quiz</CustomButton>
          </div>
        </div>
      </div>
    </main>
  );
}

