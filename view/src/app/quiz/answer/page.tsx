"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { QUIZ_DATA } from "@/lib/const";
import { useSearchParams } from "next/navigation";
import { judgeColorMatch } from "@/lib/quiz/judge";
import { Suspense } from "react";
import { getQuiz } from "@/api/quiz";
import { useQuizMemberStore } from "@/zustand/memberStore";
import { getPenlightName } from "@/api/quiz";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [leftColorNameJn, setLeftColorNameJn] = useState(String);
  const [rightColorNameJn, setRightColorNameJn] = useState(String);
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
      <div className="flex h-screen bg-basecolor" id="main">
        <div className="flex-col w-1/2" id="left">
          <div
            className="flex h-1/4 justify-center items-center text-2xl sm:text-5xl lg:text-7xl bg-accentcolor "
            id=""
          >
            <Card
              className="text-basecolor 
              border-4 border-basecolor
              "
              id="answer"
            >
              <div className="m-3 object-center object-cover">
                <Suspense>{IsCorrectAnswer()}</Suspense>
              </div>
            </Card>
          </div>
          <div
            className="flex h-1/4 justify-center items-center 
          text-2xl sm:text-5xl lg:text-7xl
          bg-basecolor "
            id="memberName"
          >
            <Card
              className=" text-accentcolor 
              border-4 border-accentcolor
              bg-transparent"
              id=""
            >
              <div className="m-5">{nickname}</div>
            </Card>
          </div>
          <div
            className="flex flex-col h-1/2
            text-xl sm:text-3xl lg:text-5xl
            bg-accentcolor"
            id="penlightColor"
          >
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">{colorNameLeft}</div>
              </Card>
            </div>
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">{colorNameRight}</div>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-auto flex-col" id="right">
          <div className="h-3/4  bg-secondarycolor" id="blank"></div>
          <div className="flex h-1/4  bg-primarycolor" id="">
            <div
              className="flex justify-center items-center w-1/2 bg-primarycolor"
              id="blank"
            >
              <Button
                className="h-1/2
                text-lg sm:text-xl lg:text-3xl
                bg-secondarycolor  text-primarycolor
                border-4 border-secondarycolor
                hover:bg-primarycolor hover:text-secondarycolor hover:border-secondarycolor"
                onClick={moveToTop}
                id="nextButton"
              >
                Top Page
              </Button>
            </div>
            <div
              className="flex flex-auto justify-center items-center bg-basecolor"
              id=""
            >
              <Button
                className="h-1/2
                text-lg sm:text-xl lg:text-3xl
                bg-transparent 
                border-4 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
                onClick={moveToQuiz}
                id="nextButton"
              >
                Next Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
