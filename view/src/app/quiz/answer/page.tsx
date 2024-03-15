"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const moveToQuiz = () => {
    router.push("/quiz");
  };

  return (
    <main>
      <div className="flex h-screen bg-basecolor" id="main">
        <div className="flex-col w-1/2 bg-primarycolor" id="left">
          <div className="flex h-1/4 justify-center items-center bg-accentcolor " id="">
            <Card className="text-basecolor 
              border-4 border-basecolor
              text-4xl md:text-8xl" id="answer">
              <div className="m-3 object-center object-cover">
                正解!
              </div>
            </Card>
          </div>
          <div className="flex h-1/4 justify-center items-center 
            text-4xl md:text-8xl bg-basecolor " id="memberName">
            <Card className=" text-accentcolor 
              border-4 border-accentcolor
              bg-transparent" id="">
              <div className="m-5">
                きょんこ
              </div>
            </Card>
          </div>
          <div className="flex flex-col h-1/2
            text-4xl md:text-6xl 
            bg-accentcolor" id="penlightColor">
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">
                  ホワイト(左7)
                </div>
              </Card>
            </div>
            <div className="flex justify-center items-center h-1/2 w-full">
              <Card className="border-4 text-basecolor border-basecolor">
                <div className="m-5">
                  ホワイト(左7)
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-auto flex-col bg-secondarycolor" id="right">
          <div className="h-3/4  bg-secondarycolor" id="blank"></div>
          <div className="flex h-1/4  bg-primarycolor" id="">
            <div className="w-1/2 bg-primarycolor" id="blank"></div>
            <div className="flex flex-auto justify-center items-center bg-basecolor" id="">
              <Button className="h-1/2
                bg-transparent text-xl md:text-2xl
                border-4 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
                id="nextButton" onClick={moveToQuiz}>
                Next Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
