"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { judgeColorMatch } from "@/lib/quiz/judge";
import { Suspense } from "react";
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
        <div className="flex h-2/3 bg-primarycolor">
          <div className="flex flex-col w-1/2 bg-basecolor">
            <div className="flex h-1/2 bg-secondarycolor">
              <div className="flex flex-auto items-center justify-center">
                <p>正解</p>
              </div>
            </div>
            <div className="flex flex-auto bg-accentcolor">
              <div className="flex flex-auto items-center justify-center">
                <p>あだ名</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto bg-primarycolor">
            <div className="flex h-1/2 bg-accentcolor">
              <div className="flex flex-auto items-center justify-center">
                <p>カラー1</p>
              </div>
            </div>
            <div className="flex flex-auto bg-secondarycolor">
              <div className="flex flex-auto items-center justify-center">
                <p>カラー2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto bg-penlight_pastelblue">
          <div className="flex w-1/2 bg-primarycolor">
            <div className="flex flex-auto items-center justify-center">
              <Button>Top Page</Button>
            </div>
          </div>
          <div className="flex flex-auto bg-basecolor">
            <div className="flex flex-auto items-center justify-center">
              <Button>Next Quiz</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
