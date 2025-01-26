'use client'

import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { useActivateAutomation } from "@/hooks/use-mutation";
import { useQueryAutomationInfo } from "@/hooks/use-query";
import { ActiveAutomation } from "@/icons/active-automation";
import { Loader2 } from "lucide-react";
import React from "react";

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  //- Done: setup or automation go live
  const { data: automationInfo } = useQueryAutomationInfo(id);
  const { isPending, mutate } = useActivateAutomation(id);

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !automationInfo?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
      <Loader state={isPending}>
        <ActiveAutomation />
      </Loader>
      <p className="lg:inline hidden">
        {automationInfo?.data?.active ? "Disable" : "Activate"}
      </p>
    </Button>
  );
};

export default ActivateAutomationButton;
