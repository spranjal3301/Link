"use client";
import React from "react";
import { cn } from "@/lib/utils";
import MainSidebar from "./main-sidebar";
import useSidebar, { SidebarProvider } from "@/hooks/use-sidebar";
import InfoBar from "../info-bar";

type Props = {
  slug: string;
  children: React.ReactNode;
};

const DashboradLayout = ({ slug, children }: Props) => {
  return (
    <div className="w-full h-svh flex flex-col ">
      <SidebarProvider>
        <MainSidebar slug={slug} />
        <MainLayout slug={slug}>{children}</MainLayout>
      </SidebarProvider>
    </div>
  );
};


const MainLayout = ({ children,slug }: { children: React.ReactNode,slug:string }) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <main
      className={cn(
        "rounded-md h-full transition-[margin-left] ease-in-out duration-300",
        " lg:pl-10 py-5 px-2",
        isSidebarOpen ? "lg:ml-[215px]" : "lg:ml-[52px]"
      )}
    >
      <div>
        <InfoBar slug={slug} />
        {/* <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div> */}
        {children}
      </div>
    </main>
  );
};

export default DashboradLayout;
