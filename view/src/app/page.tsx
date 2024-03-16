"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  getNextQuiz
} from "@/lib/quiz/quiz";

export default function Home() {
  const router = useRouter();

  const moveToQuiz = async () => {
    // localStorage.clear();
    await getNextQuiz();
    router.push("/quiz");
  };

  return (
    <main>
      <div className="flex-col h-screen bg-basecolor">
        <div className="flex flex-col h-1/2  w-full">
          <div className="flex flex-auto">
            <div className="flex-auto bg-penlight_pastelblue"></div>
            <div className="flex-auto bg-penlight_emeraldgreen"></div>
            <div className="flex-auto bg-penlight_green"></div>
            <div className="flex-auto bg-penlight_pearlgreen"></div>
          </div>
          <div className="flex flex-auto">
            <div className="flex-auto bg-penlight_lightgreen"></div>
            <div className="flex-auto bg-penlight_yellow"></div>
            <div className="flex-auto bg-penlight_orange"></div>
            <div className="flex-auto bg-penlight_red"></div>
          </div>
        </div>
        <div className="flex flex-auto justify-center items-center">
          <Button className="text-xl
                  bg-transparent border-4 border-accentcolor
                  hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
            onClick={moveToQuiz}>
            Click to start
          </Button>
        </div>
        <div className="flex flex-col h-1/2  w-full">
          <div className="flex flex-auto">
            <div className="flex-auto bg-penlight_white"></div>
            <div className="flex-auto bg-penlight_sakurapink"></div>
            <div className="flex-auto bg-penlight_pink"></div>
            <div className="flex-auto bg-penlight_passionpink"></div>
          </div>
          <div className="flex flex-auto">
            <div className="flex-auto bg-penlight_violet"></div>
            <div className="flex-auto bg-penlight_purple"></div>
            <div className="flex-auto bg-penlight_blue"></div>
            <div className="flex flex-auto bg-basecolor"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
