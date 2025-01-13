import React from "react";
import { cn } from "@/lib/utils";
import MainSidebar from "./main-sidebar";

type Props = {
  slug: string;
  children: React.ReactNode;
};

const DashboradLayout = ({ slug, children }: Props) => {
  return (
    <div className="w-full h-svh flex flex-col ">
      <MainSidebar slug={slug} />
      <main
        className={cn(
          "bg-[#1c1b1b] rounded-md h-full transition-[margin-left] ease-in-out duration-300",
          "lg:ml-[250px] lg:pl-10 lg:py-5"
        )}
      >
        {/*<div>
                <Navbar title={title} />
                <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
            </div> */}
        hello
      </main>
    </div>
  );
};

export default DashboradLayout;
