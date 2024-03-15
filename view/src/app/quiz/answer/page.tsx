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
        <div className="flex-col flex-auto bg-primarycolor" id="left">
          <div className="h-1/4 items-center bg-accentcolor " id="answer">answer</div>
          <div className="h-1/4 items-center bg-basecolor " id="memberName">Member name</div>
          <div className="h-1/2 items-center bg-accentcolor" id="penlightColor">Penlight Color</div>
        </div>
        <div className="flex-auto flex-col bg-secondarycolor" id="right">
          <div className="h-3/4  bg-secondarycolor" id="blank">Blank</div>
          <div className="flex h-1/4  bg-primarycolor" id="">
            <div className="w-1/2 bg-primarycolor" id="blank"></div>
            <div className="flex flex-auto justify-center items-center bg-basecolor" id="">
              <Button className="h-1/2
                bg-transparent text-2xl
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
