"use client";
import { SidebarProvider } from "@/hooks/use-sidebar";
import React, { useState } from "react";
import DesktopSidebar from "./desktop-sidebar";
import { MobileNav } from "./mobile-nav";
import usePaths from "@/hooks/use-nav";
import { SidebarMenu } from "@/config/sidebar";
import { isUUID } from "@/lib/utils";


type Props = {
  slug: string;
};



const MainSidebar = ({ slug }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {page} = usePaths();
  const handleExpandToggle = () => setIsExpanded(!isExpanded);
  const handleItemClick = () => setIsExpanded(false);
  const currentPage = page===slug ? 'home': isUUID(page) ? 'automations' : page;

  const icon = SidebarMenu.find(({label})=>{
    return label == currentPage;
  })?.icon;

  return (
    <>
      {/* <SidebarProvider> */}
        <DesktopSidebar slug={slug} />
      <MobileNav
        icon={icon}
        currentPage={currentPage}
        isExpanded={isExpanded}
        onExpandToggle={handleExpandToggle}
        onItemClick={handleItemClick}
        page ={page}
        slug ={slug}
        />
        {/* </SidebarProvider> */}
    </>
  );
};

export default MainSidebar;
