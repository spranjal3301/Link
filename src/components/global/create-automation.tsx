"use client";

import React, { useMemo } from "react";
import { Button } from "../ui/button";
import Loader from "./loader";
import { AutomationDuoToneWhite } from "@/icons";
import { useCreateAutomation } from "@/hooks/use-mutation";
import { v4 as uuid } from "uuid";

type Props = {};

function CreateAutomation({}: Props) {
  //-DONE:create automation in  DB
  const automationId = useMemo(() => uuid(), []);

  const { mutate, isPending } = useCreateAutomation(automationId);


  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full
       from-[#3352CC] font-medium to-[#1C2D70]"
      onClick={() =>
        mutate({
          name: "Untitled",
          id: automationId,
          createdAt: new Date(),
          keywords: [],
          listener:[],
        })
      }
      disabled={isPending}
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
}

export default CreateAutomation;
