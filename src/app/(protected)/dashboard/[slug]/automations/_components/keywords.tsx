"use client";

import Loader from "@/components/global/loader";
import { Input } from "@/components/ui/input";
import { useKeywords, useMutationDataState } from "@/hooks/use-mutation";
import { useQueryAutomationInfo } from "@/hooks/use-query";
import { addKeywordKey, deleteKeywordKey } from "@/tanstack-query/query-keys";
import { X } from "lucide-react";
import React from "react";

type Props = {
  id: string; //-automationId
};

const Keywords = ({ id }: Props) => {
  const { keyword, onValueChange, onKeyPress, onDeletekeyword, isDeleted } =
    useKeywords(id);
  const { data: automationInfo } = useQueryAutomationInfo(id);
  const { latestData: optimisticKeyword }: any =
    useMutationDataState(addKeywordKey);

  const { latestData: deletedData }: any =
  useMutationDataState(deleteKeywordKey);//?add by me

  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <p className="text-sm text-text-secondary">
        Add words that trigger automations
      </p>
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {automationInfo?.data?.keywords &&
          automationInfo?.data?.keywords.length > 0 &&
          automationInfo?.data?.keywords.map(
            (word) =>
             ( word.id !== optimisticKeyword?.variables.id  || deletedData?.variables?.id !==word.id ) && (
                <div
                  className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full"
                  key={word.id}
                >
                  <p>{word.word}</p>
                  <Loader state={isDeleted}>
                    <X
                      className="cursor-pointer hover:scale-125 transition-all duration-300 ease-out"
                      size={12}
                      onClick={() => onDeletekeyword(word.id)}
                    />
                  </Loader>
                </div>
              )
          )}
        {optimisticKeyword && optimisticKeyword.status === "pending" && (
          <div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full">
            {optimisticKeyword.variables.keyword}
          </div>
        )}
        <Input
          placeholder="Add keyword..."
          //   style={{
          //     width: Math.min(Math.max(keyword.length || 10, 2), 50) + "ch",
          //   }}
          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none "
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keywords;
