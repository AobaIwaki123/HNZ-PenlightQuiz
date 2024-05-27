"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuizMemberStore } from "@/zustand/memberStore";
import { createPenlightStore } from "@/zustand/penlightStore";
import { PenlightIdStore } from "@/zustand/penlightStore";
import { StoreApi, UseBoundStore } from "zustand";
import { getPenlightName } from "@/api/quiz";

type PenlightTopProps = {
  color: string;
};

export default function Home() {
  const router = useRouter();
  const quizMember = useQuizMemberStore((state) => state);
  
  if (typeof window === "undefined") return false;

  const memberName = quizMember.name;
  const memberImage = quizMember.memberImage;
  const memberInfo = quizMember.memberInfo;
  const leftPenlightStore = createPenlightStore();
  const rightPenlightStore = createPenlightStore();
  const leftPenlightId = leftPenlightStore((state) => state.id);
  const rightPenlightId = rightPenlightStore((state) => state.id);

  const moveToAnswer = () => {
    router.push(
      "/quiz/answer?colorIdLeft=" +
        String(leftPenlightId) +
        "&colorIdRight=" +
        String(rightPenlightId)
    );
  };

  return (
    <main>
      <div className="flex flex-wrap h-screen">
        <div className="flex flex-col h-1/2 sm:h-full w-full sm:w-1/2 bg-basecolor">
          <div className="flex flex-1 justify-center items-center h-1/4 p-5">
            <Card
              className="flex flex-1 justify-center p-4
              text-2xl sm:text-5xl lg:text-7xl
              bg-primarycolor border-4 border-accentcolor"
            >
              <p>{memberName}</p>
            </Card>
          </div>
          <div className="flex flex-auto h-1/2 justify-center p-4">
            <Card className="flex bg-transparent border-none">
              <img
                src={memberImage}
                width={300}
                height={300}
                alt="memberImage"
                className="w-full h-full object-contain"
              />
            </Card>
          </div>
          <div className="flex flex-1 h-1/4 p-5">
            <Card
              className="flex-auto justify-center p-2
              text-base sm:text-xl lg:text-2xl
              bg-primarycolor border-4 border-accentcolor"
            >
              <p>{memberInfo}</p>
            </Card>
          </div>
        </div>
        <div className="flex flex-col h-1/2 sm:h-full w-full sm:w-1/2 p-4 justify-around items-center bg-basecolor">
          <div className="flex h-3/4 w-full">
            <div className="h-full w-1/2" id="penlightLeft">
              <Penlight usePenlightStore={leftPenlightStore} />
            </div>
            <div className="h-full flex-auto" id="penlightRight">
              <Penlight usePenlightStore={rightPenlightStore} />
            </div>
          </div>
          <div className="flex flex-auto w-full justify-center items-center bg-basecolor">
            <Button
              className="sm:text-xl lg:text-3xl
                h-1/2
                bg-transparent
                border-4 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
              onClick={moveToAnswer}
            >
              Submit Answer
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

type penlightProps = {
  usePenlightStore: UseBoundStore<StoreApi<PenlightIdStore>>;
};

function Penlight({ usePenlightStore }: penlightProps) {
  const [penlightColorJn, setPenlightColorJn] = React.useState(String);
  const [penlightColorEn, setPenlightColorEn] = React.useState(String);

  const penlightId = usePenlightStore((state) => state.id);
  const increaseId = usePenlightStore((state) => state.increaseId);
  const decreaseId = usePenlightStore((state) => state.decreaseId);

  useEffect(() => {
    const penlightName = getPenlightName(penlightId);
    penlightName.then((data)=>{
      if(!data) return;
      setPenlightColorEn(data.nameEn);
      setPenlightColorJn(data.nameJa);
    });
  }, [penlightId]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col items-center w-1/4 h-4/5 border-2 rounded-md overflow-hidden">
        <PenlightTop color={"bg-penlight_"+penlightColorEn} />
        <PenlightBottom />
      </div>
      <div
        className="flex justify-center w-2/3 p-1
        sm:text-base lg:text-lg"
      >
        <Card
          className="flex-auto border-2 border-accentcolor bg-basecolor
        text-accentcolor w-1/2 text-center"
        >
          <p>{penlightColorJn}</p>
        </Card>
      </div>
      <div className="flex justify-evenly w-full">
        <Button
          className="lg:text-xl
                bg-transparent 
                border-2 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={decreaseId}
        >
          Left
        </Button>
        <Button
          className="lg:text-xl bg-transparent 
                border-2 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={increaseId}
        >
          Right
        </Button>
      </div>
    </div>
  );
}

const PenlightTop: React.FC<PenlightTopProps> = ({ color }) => {
  const memberName = useQuizMemberStore((state) => state.name);
  return (
    <div className="flex flex-col w-full h-2/3 object-center object-cover">
      <div className={`flex flex-auto justify-center items-center ${color}`}>
        <div
          className="text-lg sm:text-2xl lg:text-4xl
          text-shadow-md text-center text-accentcolor tracking-widest vertical"
        >
          {memberName}
        </div>
      </div>
    </div>
  );
};

const PenlightBottom: React.FC = () => {
  return (
    <div className="flex-col w-full h-1/2 border-t-2">
      <div className="flex flex-col h-1/2  w-full">
        <div className="flex flex-auto">
          <div className="flex-auto bg-penlight_pastelblue"></div>
          <div className="flex-auto bg-penlight_emeraldgreen"></div>
        </div>
        <div className="flex flex-auto">
          <div className="flex-auto bg-penlight_lightgreen"></div>
          <div className="flex-auto bg-penlight_yellow"></div>
        </div>
      </div>
      <div className="flex flex-col h-1/2  w-full">
        <div className="flex flex-auto">
          <div className="flex-auto bg-penlight_white"></div>
          <div className="flex-auto bg-penlight_sakurapink"></div>
        </div>
        <div className="flex flex-auto">
          <div className="flex-auto bg-penlight_violet"></div>
          <div className="flex-auto bg-penlight_purple"></div>
        </div>
      </div>
    </div>
  );
};
