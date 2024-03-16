"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
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
  if (typeof window === 'undefined') return false;

  const memberName = localStorage.getItem(QUIZ_DATA.MEMBER_NAME);
  const memberImage = localStorage.getItem(QUIZ_DATA.MEMBER_IMAGE);
  const memberInfo = localStorage.getItem(QUIZ_DATA.MEMBER_INFO);
  const penlightColorLeft = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_LEFT);
  const penlightColorRight = localStorage.getItem(QUIZ_DATA.MEMBER_COLOR_RIGHT);

  if (memberName === null || memberImage === null || memberInfo === null || penlightColorLeft === null || penlightColorRight === null) return false;

  const leftColorNameEn: string = JSON.parse(penlightColorLeft)[COLOR.NAME_EN];
  const rightColorNameEn: string = JSON.parse(penlightColorRight)[COLOR.NAME_EN];


  const moveToAnswer = () => {
    router.push("/quiz/answer?colorIdLeft=" + String(colorIdLeft) + "&colorIdRight=" + String(colorIdRight));
  };

  return (
    <main>
      <div className="flex flex-wrap justify-around items-center h-screen bg-basecolor">
        <div className="flex flex-col justify-around items-center h-full w-1/2 p-4">
          <div className="flex flex-col justify-around w-4/5 h-full items-center">
            <Card className="flex flex-col justify-around m-3 text-6xl text-center w-full h-30 bg-primarycolor border-accentcolor border-4">
              <div className="m-4">
                <p>
                  {memberName}
                </p>
              </div>
            </Card>
            <Card className="flex m-3 border-accentcolor border-4">
              <img
                src={memberImage}
                width={300}
                height={300}
                alt="memberImage"
                className="flex object-center object-cover"
              />
            </Card>
            <Card className="text-2xl text-center w-full bg-primarycolor border-accentcolor border-4">
              <div className="m-3">
                <p>
                  {memberInfo}
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 p-4 justify-around items-center">
          <div className="flex h-3/4 w-full">
            <div className="h-full w-1/2 border-accentcolor border-4" id="penlightLeft">
              <Penlight handleColorIdChanged={setColorIdLeft}/>
            </div>
            <div className="h-full flex-auto border-accentcolor border-4" id="penlightRight">
              <Penlight handleColorIdChanged={setColorIdRight}/>
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

const Penlight: React.FC<PenlightProps> = ({ handleColorIdChanged }) => {
  const [penlightId, setPenlightId] = React.useState(0);
  const [penlightColorJn, setPenlightColorJn] = React.useState(String);
  const [penlightColorEn, setPenlightColorEn] = React.useState(String);

  const incrementPenlightId = () => {
    setPenlightId((prev) => (prev + 1) % 15);
  }

  const decrementPenlightId = () => {
    setPenlightId((prev) => (prev - 1 + 15) % 15);
  }

  useEffect(() => {
    const fetchColor = async () => {
      const color: PenlightColor = await getColorName(String(penlightId));
      setPenlightColorJn(color.nameJn);
      const penlightColorEn = "bg-penlight_" + color.nameEn;
      console.log(penlightColorEn);
      setPenlightColorEn(penlightColorEn);
    }
    handleColorIdChanged(penlightId);
    fetchColor();
  }, [penlightId]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col items-center w-1/2 h-4/5 bg-secondarycolor">
        <PenlightTop color={penlightColorEn} />
        <PenlightBottom />
      </div>
      <div className="flex justify-center w-full">
        <Card className="w-1/2 text-center border-4 border-basecolor">
          {penlightColorJn}
        </Card>
      </div>
      <div className="flex justify-evenly w-full">
        <Button className=" bg-transparent text-lg
                border-2 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={decrementPenlightId}>
          Left
        </Button>
        <Button className=" bg-transparent text-lg
                border-2 border-accentcolor
                hover:bg-accentcolor hover:text-basecolor hover:border-transparent"
          onClick={incrementPenlightId}>
          Right
        </Button>
      </div>
    </div>
  );
};

const PenlightTop: React.FC<PenlightTopProps> = ({ color }) => {
  const memberName = localStorage.getItem(QUIZ_DATA.MEMBER_NAME);
  return (
    <div className="flex-col h-2/3 w-1/2 
      border-4 border-basecolor bg-accentcolor">
      <div className="h-5 w-full bg-basecolor"></div>
      <div className={`flex h-full justify-center items-center ${color}`}>
        <div className="text-center text-accentcolor tracking-widest text-3xl vertical">
          <p>{memberName}</p>
        </div>
      </div>
    </div>
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
