"use client";
import React, { ReactNode, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { LogInIcon } from "lucide-react";
import { SignIn } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ModalBodyContent() {

  return (
    <div className="flex items-center justify-center">
      <ModalBody>
        <ModalContent>
          <div className="flex justify-center items-center">
              hello
          </div>
        </ModalContent>
        {/* <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter> */}
      </ModalBody>
    </div>
  );
}

// export function Loginbtn() {
//   return <ModalTrigger actionButton="L">Login</ModalTrigger>;
// }



export const Loginbtn = ({
  children,
  className,
  actionButton = 'L',
}: {
  children?: ReactNode;
  className?: string;
  actionButton?:string
}) => {
  // const {setOpen } = useModal();
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === actionButton?.toLowerCase() &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        onLogin();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [actionButton]);

  const onLogin = () => router.push("/sign-in");

  return (
    <Button variant={"secondary"} className={cn(""
      ,className)}
    onClick={onLogin}
    >
      Login
      <KBtn className="hidden md:block" backlit={true}>
          <span className="block">{actionButton}</span>
        </KBtn>
    </Button>
  );
};

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



  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px] shadow-sm ",
        backlit ? "bg-white/[0.2] shadow-gray-200" : "border border-input bg-background text-foreground",
        className
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
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

