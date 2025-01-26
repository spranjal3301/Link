"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import Loader from "../loader";
import { cn } from "@/lib/utils";

type Props = {};

function PaymentButton({}: Props) {
  //?WIP: get their subscription detail
  const { isProcessing, onSubscribe } = useSubscription();

  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className={cn("text-white rounded-full font-bold bg-gradient-to-br from-main2 to-main1")}
    >
      <Loader state={isProcessing}>
        {isProcessing ? "Subscribing" : "Upgrade"}
      </Loader>
    </Button>
  );
}

export default PaymentButton;
