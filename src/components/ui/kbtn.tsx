"use client"
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
  }: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
  }) => {
    const router = useRouter();
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (
          (e.key.toLowerCase() === 'l') && 
          !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)
        ) {
          router.push('/login');
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [router]);


    return (
      <div 
        className={cn(
          "p-[0.5px] rounded-[4px]",
          backlit && "bg-white/[0.2] shadow-sm shadow-gray-200",
          className
        )}
      >
        <div
          className={cn(
            "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
          )}
          style={{
            boxShadow:
              "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
          }}
        >
          <div
            className={cn(
              "text-neutral-200 h-9 px-4 py-2 w-full flex justify-center items-center flex-col",
              childrenClassName,
              backlit && "text-white"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };