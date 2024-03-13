"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div>
        <Button
        onClick={() => {
            router.push("/quiz");
        }}
        >Click to start</Button>
      </div>
    </main>
  )
}
