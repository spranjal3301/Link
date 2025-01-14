import { Button } from "@/components/ui/button";
import { ActiveAutomation } from "@/icons/active-automation";
import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const ActivateAutomationButton = (props: Props) => {
  //- WIP: setup or automation go live
  return (
    <Button
      // disabled={isPending}
      // onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
      {false ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}
      <p className="lg:inline hidden">
        {/* {data?.data?.active ? 'Disable' : 'Activate'} */}
        Activate
      </p>
    </Button>
  );
};

export default ActivateAutomationButton;
