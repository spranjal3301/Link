"use client";
import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "./activate-automation-button";
import { useQueryAutomationInfo } from "@/hooks/use-query";
import { useEditAutomation, useMutationDataState } from "@/hooks/use-mutation";
import { Input } from "@/components/ui/input";
import { updateAutomationKey } from "@/tanstack-query/query-keys";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  //-Done: get automation data and create editable bread crumb
  const router = useRouter();
  const { data } = useQueryAutomationInfo(id);
  const { edit, enableEdit, inputRef, isPending, OnblurUpdateAutomationName } =
    useEditAutomation(id);

  const { latestData }: any = useMutationDataState(updateAutomationKey);

  return (
    <div className="rounded-full w-full p-2 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink  onClick={()=>router.back()}>
                Automation
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex gap-x-3 items-center min-w-0 cursor-pointer" 
               onClick={enableEdit}
               >
                  {edit ? (
                    <Input
                      ref={inputRef}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                        OnblurUpdateAutomationName(e)
                      }
                      autoFocus
                      placeholder={
                        isPending ? latestData.variables : "Add a new name"
                      }
                      className="bg-transparent h-auto outline-none text-base border-none p-0"
                    />
                  ) : (
                    <p className="truncate">
                      {latestData?.variables
                        ? latestData?.variables?.name
                        : data?.data?.name}
                    </p>
                  )}
                  {edit ? (
                    <></>
                  ) : (
                    <span
                      className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
                    >
                      <PencilIcon size={14} />
                    </span>
                  )}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          {edit ? "Click outside for Save" : "All states are automatically saved"}
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton id={id} />
    </div>
  );
};

export default AutomationBreadCrumb;
