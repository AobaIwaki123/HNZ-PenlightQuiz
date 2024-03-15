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
      <Button onClick={moveToQuiz}>
        Next
      </Button>
    </main>
  );
}
