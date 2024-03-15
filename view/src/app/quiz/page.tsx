"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import React from "react";

type PenlightProps = {
  color: string;
};

export default function Home() {
  const router = useRouter();

  const moveToAnswer = () => {
    router.push("/quiz/answer");
  };

  return (
    <main>
      <div className="flex flex-wrap justify-around items-center h-screen bg-basecolor">
        <div className="flex flex-col justify-around items-center h-full w-1/2 p-4">
          <div className="flex flex-col justify-around w-4/5 h-full items-center">
            <Card className="flex flex-col justify-around m-3 text-6xl text-center w-full h-30 bg-primarycolor border-accentcolor border-4">
              <div className="m-4">
                <p>
                  齊藤京子
                </p>
              </div>
            </Card>
            <Card className="flex m-3 border-accentcolor border-4">
              <Image
                src="/img/member/saitou.jpg"
                width={300}
                height={300}
                alt="saitou"
                className="flex object-center object-cover"
                priority
              />
            </Card>
            <Card className="text-2xl text-center w-full bg-primarycolor border-accentcolor border-4">
              <div className="m-3">
                <p>
                  好きなラーメン：日高屋のチゲ味噌ラーメン
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 p-4 justify-around items-center">
          <div className="flex h-3/4 w-full">
            <div className="h-full w-1/2 border-accentcolor border-4" id="penlightLeft">
              <Penlight color="red" />
            </div>
            <div className="h-full flex-auto border-accentcolor border-4" id="penlightRight">
              <Penlight color="red" />
            </div>
          </div>
          <div className="flex flex-auto w-full justify-center items-center bg-basecolor">
            <Button className="h-1/2
                bg-transparent text-xl md:text-2xl
                border-4 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
              onClick={moveToAnswer}>
              Submit Answer
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

const Penlight: React.FC<PenlightProps> = ({ color }) => {
  return (
    <div className="flex h-full w-full justify-center items-center bg-primarycolor">
      <div className="flex flex-col items-center w-1/2 h-4/5 bg-secondarycolor">
        <PenlightTop />
        <PenlightBottom />
      </div>
    </div>
  );
};

const PenlightTop: React.FC = () => {
  return (
    <div className="h-2/3 w-1/2 
      border-4 border-basecolor bg-accentcolor"></div>
  );
};

const PenlightBottom: React.FC = () => {
  return (
    <div className="flex-col h-1/2 w-1/2 bg-accentcolor">
      <div className="h-1/4 w-full 
        border-4 border-basecolor bg-accentcolor"></div>
      <div className="h-1/4 w-full bg-accentcolor 
        border-4 border-basecolor"></div>
      <div className="flex justify-center items-center h-1/2 bg-basecolor">
        <div className="text-accentcolor transform -rotate-90">
          日向坂46
        </div>
      </div>
    </div>
  );
};  
