"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap justify-around items-center h-screen bg-base">
        <div className="flex flex-col justify-around items-center h-full w-1/2 p-4">
          <div className="flex w-full items-center">
            <Card className="flex flex-col justify-around text-8xl text-center w-full h-40">
              <p>
                齊藤京子
              </p>
            </Card>
          </div>
          <Card className="">
            <Image
              src="/img/member/saitou.jpg"
              width={400}
              height={400}
              alt="saitou"
              className="object-center object-cover"
            />
          </Card>
          <Card className="flex flex-col justify-around text-3xl text-center w-full h-40">
            <p>
              好きなラーメン：日高屋のチゲ味噌ラーメン
            </p>
          </Card>
        </div>
        <div className="flex flex-col h-full w-1/2 p-4 justify-around items-center">
          <Button>Submit Answer</Button>
        </div>
      </div>
    </main>
  );
}
