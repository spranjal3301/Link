"use client";
import { NextPage } from "next";
import usePaths from "@/hooks/use-nav";
import { SidebarClose } from "lucide-react";
import SidebarContent from "./sidebar-content";
import { cn } from "@/lib/utils";
import useSidebar from "@/hooks/use-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";


interface Props {
  slug: string;
}

const DesktopSidebar: NextPage<Props> = ({ slug }) => {
  const { page } = usePaths();
  const {isSidebarOpen} = useSidebar();
  
  return (
    <TooltipProvider>
      <div className={cn("fixed left-0 top-0 radial hidden lg:inline-block m-3 overflow-hidden ",
        "border-[1px] border-[#545454] bg-gradient-to-b from-main1 via-[#171717] to-main1 ",
        "-translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        isSidebarOpen ? "w-[250px] rounded-3xl bottom-0 ":"w-[60px] rounded-xl ",
        ""
      )}>
        <SidebarContent slug={slug} page={page} />
      </div>
    </TooltipProvider>
  );
};

export default DesktopSidebar;
