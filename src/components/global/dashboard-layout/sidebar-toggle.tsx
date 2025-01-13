"use client";
import { Button } from "@/components/ui/button";
import useSidebar from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};

function SidebarToggle({}: Props) {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  // console.log(isSidebarOpen);

  return (
    <Button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="rounded-md w-8 h-8 hover:bg-transparent hidden md:flex "
      variant="ghost"
      size="icon"
    >
      <HamburgerMenuIcon
        className={cn(
          "h-4 w-4 transition-transform ease-in-out duration-700 text-[##9B9CA0]",
          !isSidebarOpen ? "rotate-180" : "rotate-0"
        )}
      />
    </Button>
  );
}

const SidebartoggleIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-menu-2 ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-menu-deep ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h16" />
      <path d="M7 12h13" />
      <path d="M10 18h10" />
    </svg>
  );
};

export default SidebarToggle;
