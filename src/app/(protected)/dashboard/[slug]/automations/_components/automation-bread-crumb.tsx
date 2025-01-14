import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "./activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  //-WIP: get automation data and create editable bread crumb
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
      </div>
      <span className="flex gap-x-3 justify-center items-center min-w-0">
        Untitle
        <PencilDuoToneBlack/>
      </span>
      <ActivateAutomationButton/>
    </div>  
  );
};

export default AutomationBreadCrumb;
