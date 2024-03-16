"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import {
  getNextQuiz
} from "@/lib/quiz/quiz";
import { QUIZ_DATA } from "@/lib/const";
import { useSearchParams } from "next/navigation";
import { isCorrectColor } from "@/lib/quiz/judge";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  if (typeof window === 'undefined') return false;

  const nickname = localStorage.getItem(QUIZ_DATA.NICKNAME);
  const penlightColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const penlightColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);

  if (nickname === null || penlightColorLeft === null || penlightColorRight === null) return false;

  const leftColorNameJn: string = JSON.parse(penlightColorLeft).nameJn;
  const rightColorNameEn: string = JSON.parse(penlightColorRight).nameJn;

  // const colorIdLeft: number = Number(searchParams.get("colorIdLeft"));
  // const colorIdRight: number = Number(searchParams.get("colorIdRight"));

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
        <div className="flex-col w-1/2 bg-primarycolor" id="left">
          <div className="flex h-1/4 justify-center items-center bg-accentcolor " id="">
            <Card className="text-basecolor 
              border-4 border-basecolor
              text-4xl md:text-8xl" id="answer">
              <div className="m-3 object-center object-cover">
                {/*  isCorrectColorがtrueなら正解!,falseなら不正解を表示する*/}
                {isCorrectColor(Number(searchParams.get("colorIdLeft")), Number(searchParams.get("colorIdRight"))) ? "正解!" : "不正解!"}
              </div>
            </Card>
          </div>
          <div className="flex h-1/4 justify-center items-center 
            text-4xl md:text-8xl bg-basecolor " id="memberName">
            <Card className=" text-accentcolor 
              border-4 border-accentcolor
              bg-transparent" id="">
              <div className="m-5">
                {nickname}
              </div>
            </Card>
          </div>
          <div className="flex flex-col h-1/2
            text-4xl md:text-6xl 
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
        <div className="flex-auto flex-col bg-secondarycolor" id="right">
          <div className="h-3/4  bg-secondarycolor" id="blank"></div>
          <div className="flex h-1/4  bg-primarycolor" id="">
            <div className="flex justify-center items-center w-1/2 bg-primarycolor" id="blank">
              <Button className="h-1/2
                bg-secondarycolor text-xl md:text-2xl text-primarycolor
                border-4 border-secondarycolor
                hover:bg-primarycolor hover:text-secondarycolor hover:border-secondarycolor"
                onClick={moveToTop}
                id="nextButton">
                Top Page
              </Button>
            </div>
            <div className="flex flex-auto justify-center items-center bg-basecolor" id="">
              <Button className="h-1/2
                bg-transparent text-xl md:text-2xl
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
