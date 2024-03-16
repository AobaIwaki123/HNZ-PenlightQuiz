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
      <div>
        <Button
        onClick={moveToQuiz}
        >Click to start</Button>
      </div>
    </main>
  )
}
