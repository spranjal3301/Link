"use client";
import { onIntegrationOauth } from "@/actions/integrations";
import { Button } from "@/components/ui/button";
import { TintegrationCard } from "@/config/integration-card";
import { useQueryUser } from "@/hooks/use-query";
import React from "react";

const IntegrationCard = ({
  description,
  icon,
  strategy,
  title,
}: TintegrationCard) => {
  //-Done
  
  const onOauth = () => onIntegrationOauth(strategy);
  const { data: userInfo } = useQueryUser();

  const integrated = userInfo?.data?.integrations.find(
    ({ name }) => name == strategy
  );

  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center justify-between">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-base"> {title}</h3>
        <p className="text-[#9D9D9D] hidden md:block text-sm ">{description}</p>
      </div>
      <Button
        onClick={onOauth}
        disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
      >
        {integrated ? "Connected" : "Connect"}
      </Button>
    </div>
  );
};

export default IntegrationCard;
