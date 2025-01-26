import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BlueAddIcon } from "@/icons";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  label: string;
};

const TriggerButton = ({ label, children }: Props) => {
  return (
    <PopOver
      className="w-[350px]"
      trigger={
        <div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-3 ">
          <BlueAddIcon />
          <p className="text-[#768BDD] font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};



const PopOver = ({
  children,
  trigger,
  className,
}: {
  trigger: JSX.Element;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("bg-[#1D1D1D] shadow-lg rounded-xl", className)}
        align="end"
        side="bottom"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default TriggerButton;
