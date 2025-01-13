"use client";
import { SidebarProvider } from "@/hooks/use-sidebar";
import React, { useState } from "react";
import DesktopSidebar from "./desktop-sidebar";
import { MobileNav } from "./mobile-nav";
import usePaths from "@/hooks/use-nav";
import { SidebarMenu } from "./sidebar-itmes";

type Props = {
  slug: string;
};

export const navigationSections = [
    {
        title: "Getting Started",
        items: [
            {
                id: "intro",
                title: "Installation",
                href: "/docs",
                description: "Introduction and usage guidelines",
            },
        ],
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title: "AI-Input",
                href: "/docs/components/ai-input",
                description: "Modern AI chat interface components",
                count: 16,
            },
            {
                id: 2,
                title: "Alerts",
                href: "/docs/components/alert",
                description: "Alert components and layouts",
                count: 7,
            },
            {
                id: 3,
                title: "Button",
                href: "/docs/components/button",
                description: "Interactive button components with animations",
                count: 10,
            },
            {
                id: 4,
                title: "Card",
                href: "/docs/components/card",
                description: "Versatile card components and layouts",
                count: 7,
            },
            {
                id: 5,
                title: "Faq",
                href: "/docs/components/faq",
                description: "Frequently asked questions",
                count: 4,
            },
            {
                id: 6,
                title: "Input",
                href: "/docs/components/input",
                description: "More components coming soon",
                count: "10",
            },
            {
                id: 7,
                title: "List",
                href: "/docs/components/list",
                description: "List components and layouts",
                count: 6,
            },
            {
                id: 8,
                title: "Pricing",
                href: "/docs/components/pricing",
                description: "Pricing components and layouts",
                count: 4,
                isNew: true,
            },
            {
                id: 9,
                title: "Profile",
                href: "/docs/components/profile",
                description: "Profile components and layouts",
                count: 5,
                isNew: true,
            },
            {
                id: 10,
                title: "Text",
                href: "/docs/components/text",
                description: "Typography and text animation components",
                count: 6,
            },
        ],
    },
    {
        title: "Hooks",
        items: [
            {
                id: 1,
                title: "Custom Hooks",
                href: "/docs/hooks",
            },
        ],
    },
    {
        title: "Blocks",
        items: [
            {
                id: 1,
                title: "Block - 01",
                href: "/docs/components/block",
                isLab: true,
            },
        ],
    },
];

const MainSidebar = ({ slug }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {page} = usePaths();
  const handleExpandToggle = () => setIsExpanded(!isExpanded);
  const handleItemClick = () => setIsExpanded(false);
  const totalItems = 6;
  const currentPage = page===slug ? 'home': page;

  const icon = SidebarMenu.find(({label})=>{
    return label == currentPage;
  })?.icon;

  return (
    <>
      <SidebarProvider>
        <DesktopSidebar slug={slug} />
      <MobileNav
        sections={navigationSections}
        icon={icon}
        pathname={'/'}
        currentPage={currentPage}
        totalItems={totalItems}
        isExpanded={isExpanded}
        onExpandToggle={handleExpandToggle}
        onItemClick={handleItemClick}
        page ={page}
        slug ={slug}
        />
        </SidebarProvider>
    </>
  );
};

export default MainSidebar;
