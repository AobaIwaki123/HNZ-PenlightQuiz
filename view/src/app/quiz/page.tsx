"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { QUIZ_DATA, COLOR } from "@/lib/const";
import { getColorName } from "@/api/quiz";
import { PenlightColor } from "@/lib/type";

type PenlightProps = {
  handleColorIdChanged: (colorId: number) => void;
};

type PenlightTopProps = {
  color: string;
};

export default function Home() {
  const router = useRouter();
  const [colorIdLeft, setColorIdLeft] = React.useState(0);
  const [colorIdRight, setColorIdRight] = React.useState(0);
  if (typeof window === "undefined") return false;

  const memberName = localStorage.getItem(QUIZ_DATA.MEMBER_NAME);
  const memberImage = localStorage.getItem(QUIZ_DATA.MEMBER_IMAGE);
  const memberInfo = localStorage.getItem(QUIZ_DATA.MEMBER_INFO);
  const penlightColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const penlightColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);

  if (
    memberName === null ||
    memberImage === null ||
    memberInfo === null ||
    penlightColorLeft === null ||
    penlightColorRight === null
  )
    return false;

  const moveToAnswer = () => {
    router.push(
      "/quiz/answer?colorIdLeft=" +
        String(colorIdLeft) +
        "&colorIdRight=" +
        String(colorIdRight)
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
            <Card className="flex border-4 border-accentcolor">
              <img
                src={memberImage}
                width={300}
                height={300}
                alt="memberImage"
                className="object-center object-cover"
              />
            </Card>
          </div>
          <div className="flex flex-1 h-1/4 p-5">
            <Card
              className="flex flex-1 justify-center p-6
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
              <Penlight handleColorIdChanged={setColorIdLeft} />
            </div>
            <div className="h-full flex-auto" id="penlightRight">
              <Penlight handleColorIdChanged={setColorIdRight} />
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

const Penlight: React.FC<PenlightProps> = ({ handleColorIdChanged }) => {
  const [penlightId, setPenlightId] = React.useState(0);
  const [penlightColorJn, setPenlightColorJn] = React.useState(String);
  const [penlightColorEn, setPenlightColorEn] = React.useState(String);

  const incrementPenlightId = () => {
    setPenlightId((prev) => (prev + 1) % 15);
  };

  const decrementPenlightId = () => {
    setPenlightId((prev) => (prev - 1 + 15) % 15);
  };

  useEffect(() => {
    const fetchColor = async () => {
      const color: PenlightColor = await getColorName(String(penlightId));
      setPenlightColorJn(color.nameJn);
      const penlightColorEn = "bg-penlight_" + color.nameEn;
      console.log(penlightColorEn);
      setPenlightColorEn(penlightColorEn);
    };
    handleColorIdChanged(penlightId);
    fetchColor();
  }, [penlightId]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col items-center w-1/4 h-4/5 border-2 rounded-md overflow-hidden">
        <PenlightTop color={penlightColorEn} />
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
          onClick={decrementPenlightId}
        >
          Left
        </Button>
        <Button
          className="lg:text-xl bg-transparent 
                border-2 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={incrementPenlightId}
        >
          Right
        </Button>
      </div>
    </div>
  );
};

const PenlightTop: React.FC<PenlightTopProps> = ({ color }) => {
  const memberName = localStorage.getItem(QUIZ_DATA.MEMBER_NAME);
  return (
    <div className="flex flex-col w-full h-2/3 object-center object-cover">
      {/* <div className="h-5 w-full bg-basecolor"></div> */}
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
