import React from "react";
import { Button } from "../ui/button";
import Loader from "./loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

function CreateAutomation({}: Props) {
  //?WIP:create automation in  DB
  
  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full
       from-[#3352CC] font-medium to-[#1C2D70]"
    >
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
}

export default CreateAutomation;
