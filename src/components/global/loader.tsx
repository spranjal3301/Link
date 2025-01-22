import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { Loader as LRLoader } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  children?: React.ReactNode;
  className?: string;
  state?: boolean;
  color?: string;
}

const Loader: NextPage<Props> = ({
  className,
  children = "",
  color,
  state = true,
}) => {
  if (state)
    return (
      <div className={cn(className)}>
        <Spinner />
      </div>
    );

  return children;
};

export default Loader;



interface SpinnerProps {
  size?: string;
  color?: string;
}

interface SizeProps {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface FillProps {
  slate: string;
  blue: string;
  red: string;
  green: string;
  white: string;
}

interface StrokeProps {
  slate: string;
  blue: string;
  red: string;
  green: string;
  white: string;
}

const sizesClasses: SizeProps = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

const fillClasses = {
  slate: "fill-foreground",
  blue: "fill-blue-500",
  red: "fill-red-500",
  green: "fill-emerald-500",
  white: "fill-background",
} as FillProps;

const strokeClasses = {
  slate: "stroke-foreground",
  blue: "stroke-blue-500",
  red: "stroke-red-500",
  green: "stroke-emerald-500",
  white: "stroke-background",
} as StrokeProps;

export const Spinner = ({ size = "md", color = "slate" }: SpinnerProps) => {
  return (
    <div aria-label="Loading..." role="status">
      <LRLoader
        className={cn(
          "animate-spin",
          sizesClasses[size as keyof SizeProps],
          strokeClasses[color as keyof StrokeProps]
        )}
      />
    </div>
  );
};
