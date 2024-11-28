import React from "react";
import { Button } from "@/components/ui/button";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // 追加のクラス名を渡すオプション
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <div className="flex flex-auto items-center justify-center">
      <Button
        className={`flex flex-auto h-4/5 m-5 
          text-2xl sm:text-5xl lg:text-7xl
          border-4 border-accentcolor bg-penlight_pastelblue
          ${className}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
