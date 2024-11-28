import React, { Suspense } from "react";
import { Card } from "@/components/ui/card";

type NickNameCardProps = {
  children: React.ReactNode;
};

const NickNameCard: React.FC<NickNameCardProps> = ({ children }) => {
  return (
    <div className="flex flex-auto items-center justify-center">
      <Card
        className="flex flex-auto h-4/5 items-center justify-center
        text-accentcolor
        bg-penlight_lightgreen border-4 border-accentcolor m-5"
      >
        <p>
          <Suspense>{children}</Suspense>
        </p>
      </Card>
    </div>
  );
};

export default NickNameCard;
