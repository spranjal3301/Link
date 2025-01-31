"use client";
import CreateAutomation from "@/components/global/create-automation";
import GradientButton from "@/components/global/gradiant-button";
import { Button } from "@/components/ui/button";
import { useMutationDataState } from "@/hooks/use-mutation";
import usePaths from "@/hooks/use-nav";
import { useQueryAutomations } from "@/hooks/use-query";
import { cn, getMonth } from "@/lib/utils";
import { createAutomationKey } from "@/tanstack-query/query-keys";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import React, { useMemo } from "react";

type Props = {};

const AutomationList = (props: Props) => {
  //-Done : get atomation from db and verify
  //-Done : add optimistic data
  //- UI update
  const { pathNames } = usePaths();
  const { data: AllAutomation } = useQueryAutomations();
  const { latestData } = useMutationDataState(createAutomationKey);
  

  const optimisticUiData = useMemo(() => {
    if (!AllAutomation?.success) {
      return { data: [] };
    }
  
    if (latestData?.variables && AllAutomation?.data) {
      return { data: [latestData.variables, ...AllAutomation.data] };
    }
  
    return AllAutomation || { data: [] };
  }, [latestData, AllAutomation]);
  

  if (optimisticUiData?.data?.length === 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        {/* <CreateAutomation /> */}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimisticUiData.data!.map(
        ({ id, name, keywords, createdAt, listener }: any) => (
          <Link
            href={`${pathNames}/${id}`}
            key={id}
            className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
          >
            <div className="flex flex-col flex-1 items-start">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-[#9B9CA0] text-sm font-light mb-2">
                This is from the comment
              </p>

              {keywords.length > 0 ? (
                <div className="flex gap-x-2 flex-wrap mt-3">
                  {
                    //@ts-ignore
                    keywords.map((keyword, idx) => (
                      <div
                        key={keyword.id}
                        className={cn(
                          "rounded-full px-4 py-1 capitalize border-2",
                          idx % 4 == 0 &&
                            "bg-keyword-green/15  border-keyword-green",
                          idx % 4 == 1 &&
                            "bg-keyword-purple/15  border-keyword-purple",
                          idx % 4 == 2 &&
                            "bg-keyword-yellow/15  border-keyword-yellow",
                          idx % 4 == 3 &&
                            "bg-keyword-red/15  border-keyword-red"
                        )}
                      >
                        {keyword.word}
                      </div>
                    ))
                  }
                </div>
              ) : (
                <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                  <p className="text-sm text-[#bfc0c3]">No Keywords</p>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <p className="capitalize text-sm font-light text-[#9B9CA0]">
                {getMonth(createdAt.getUTCMonth() + 1)}{" "}
                {createdAt.getUTCDate() === 1
                  ? `${createdAt.getUTCDate()}st`
                  : `${createdAt.getUTCDate()}th`}{" "}
                {createdAt.getUTCFullYear()}
              </p>

              {listener?.listener === "SMARTAI" ? (
                <GradientButton
                  type="BUTTON"
                  className="w-full bg-background-80 text-white hover:bg-background-80"
                >
                  Smart AI
                </GradientButton>
              ) : (
                <Button className="bg-background-80 hover:bg-background-80 text-white">
                  Standard
                </Button>
              )}
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default AutomationList;
