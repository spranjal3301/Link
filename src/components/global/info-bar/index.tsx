"use client";

import React from "react";
import CreateAutomation from "../create-automation";
import { PAGE_BREAD_CRUMBS, PAGE_ICON } from "@/config/sidebar";
import usePaths from "@/hooks/use-nav";
import Search from "./search";
import { Notifications } from "./notification";

type Props = {
  slug: string;
};

function InfoBar({ slug }: Props) {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  if (!currentPage) return;

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-3 lg:gap-x-5 justify-end">
        <Search />
        <CreateAutomation />
        <Notifications />
      </div>
      <MainBreadCrumb
      page={page === slug ? 'Home' : page}
      slug={slug}
    />
    </div>
  );
}

type MBC_Props = {
  page: string;
  slug?: string;
};


const MainBreadCrumb = ({ page, slug }: MBC_Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="radial--gradient lg:w-4/12 py-5 flex flex-col items-center">
            <p className="text-text-secondary text-lg">Welcome back</p>
            <h2 className="capitalize text-4xl font-medium">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex py-5 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default InfoBar;
