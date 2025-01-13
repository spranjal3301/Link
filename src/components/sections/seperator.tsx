import { cn } from "@/lib/utils";
import { NextPage } from "next";

interface Props {
  reverse?: boolean;
  color?:string;
}

const SphereMask: NextPage<Props> = ({ color,reverse = false }) => {
  return (
    <div className="w-full ">
      <div
        className={cn(
          // color
          color?.length ?`[--color:${color}]`:"[--color:#72C6EF]",
          "pointer-events-none relative  mx-auto  h-[50rem] overflow-hidden",

          // sphere mask
          "[mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)]",

          // reverse
          reverse ? "my-[-22rem] rotate-180 md:mt-[-18.8rem]" : "my-[-18.8rem]",

          // before
          "before:absolute before:inset-0 before:size-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]",

          // after
          "after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background"
        )}
      ></div>
    </div>
  );
};



export { SphereMask };
