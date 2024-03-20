"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import {
  getNextQuiz
} from "@/lib/quiz/quiz";
import { QUIZ_DATA } from "@/lib/const";
import { useSearchParams } from "next/navigation";
import { judgeColorMatch } from "@/lib/quiz/judge";
import { Suspense } from 'react'

export default function Home() {
  const router = useRouter();

  if (typeof window === 'undefined') return false;

  const nickname = localStorage.getItem(QUIZ_DATA.NICKNAME);
  const penlightColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const penlightColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);

  if (nickname === null || penlightColorLeft === null || penlightColorRight === null) return false;

  const leftColorNameJn: string = JSON.parse(penlightColorLeft).nameJn;
  const rightColorNameEn: string = JSON.parse(penlightColorRight).nameJn;


  const IsCorrectAnswer = () => {
    const searchParams = useSearchParams();
    const colorIdLeft: number = Number(searchParams.get("colorIdLeft"));
    const colorIdRight: number = Number(searchParams.get("colorIdRight"));
    switch (judgeColorMatch(colorIdLeft, colorIdRight)) {
      case 0:
        return "不正解！";
      case 1:
        return "惜しい！";
      case 2:
        return "正解！";
      default:
        return "***";
    }
  };

  const moveToQuiz = async () => {
    await getNextQuiz();
    router.push("/quiz");
  };

  const moveToTop = () => {
    router.push("/");
  }

  return (
    <main>
      <div className="flex h-screen bg-basecolor" id="main">
        <div className="flex-col w-1/2" id="left">
          <div className="flex h-1/4 justify-center items-center text-2xl sm:text-5xl lg:text-7xl bg-accentcolor " id="">
            <Card className="text-basecolor 
              border-4 border-basecolor
              " id="answer">
              <div className="m-3 object-center object-cover">
                <Suspense>
                  {IsCorrectAnswer()}
                </Suspense>
              </div>
            </Card>
          </div>
          <div className="flex h-1/4 justify-center items-center 
          text-2xl sm:text-5xl lg:text-7xl
          bg-basecolor " id="memberName">
            <Card className=" text-accentcolor 
              border-4 border-accentcolor
              bg-transparent" id="">
              <div className="m-5">
                {nickname}
              </div>
            </Card>
          </div>
          <div className="flex flex-col h-1/2
            text-xl sm:text-3xl lg:text-5xl
            bg-accentcolor" id="penlightColor">
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">
                  {leftColorNameJn}
                </div>
              </Card>
            </div>
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">
                  {rightColorNameEn}
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-auto flex-col" id="right">
          <div className="h-3/4  bg-secondarycolor" id="blank"></div>
          <div className="flex h-1/4  bg-primarycolor" id="">
            <div className="flex justify-center items-center w-1/2 bg-primarycolor" id="blank">
              <Button className="h-1/2
                text-lg sm:text-xl lg:text-3xl
                bg-secondarycolor  text-primarycolor
                border-4 border-secondarycolor
                hover:bg-primarycolor hover:text-secondarycolor hover:border-secondarycolor"
                onClick={moveToTop}
                id="nextButton">
                Top Page
              </Button>
            </div>
            <div className="flex flex-auto justify-center items-center bg-basecolor" id="">
              <Button className="h-1/2
                text-lg sm:text-xl lg:text-3xl
                bg-transparent 
                border-4 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
                onClick={moveToQuiz}
                id="nextButton">
                Next Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
