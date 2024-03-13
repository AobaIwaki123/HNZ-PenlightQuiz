"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
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
          <div className="flex items-center h-full w-full text-center">
            <div className="h-full w-full border-accentcolor border-4">
              {/* TODO: Penlight Component */}
              <Card>Penlight1</Card>
            </div>
            <div className="h-full w-full border-accentcolor border-4">
              {/* TODO: Penlight Component */}
              <Card>Penlight2</Card>
            </div>
          </div>
          <Button>Submit Answer</Button>
        </div>
      </div>
    </main>
  );
}
