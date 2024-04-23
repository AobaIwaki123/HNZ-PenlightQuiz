"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getNextQuiz } from "@/lib/quiz/quiz";
import { initMemberTables } from "@/api/initDb";

export default function Home() {
  const router = useRouter();

  const moveToQuiz = async () => {
    // console.log("initMemberTables");
    initMemberTables();
    // await getNextQuiz();
    // router.push("/quiz");
    // alert("Sorry, this feature is not available yet.");
    // alert("Please wait for the next update.")
    // alert("Thank you for your understanding.")
    // alert("Have a nice day!")
    // alert("Bye!")
    // alert("Bye!")
    // alert("Bye!")
  };

  return (
    <main>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Button
          className="
                  text-xl sm:text-3xl lg:text-4xl
                  border-4 border-accentcolor bg-penlight_white text-penlight_sakurapink
                  hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={moveToQuiz}
        >
          Click to start
        </Button>
      </div>
      <div className="flex-col h-screen">
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
  );
}
