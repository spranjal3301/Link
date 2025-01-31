"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import Loader from "../loader";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { useQueryUser } from "@/hooks/use-query";

type Props = {};

function PaymentButton({}: Props) {
  //-DOne: get their subscription detail
  const { data } = useQueryUser();
  const { isProcessing, onSubscribe } = useSubscription(data?.data?.clerkId!,'MONTHLY');

  return (
    <>
    {/* <Script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className={cn("text-white rounded-full font-bold bg-gradient-to-br from-main2 to-main1")}
      >
      <Loader state={isProcessing}>
        {isProcessing ? "Subscribing" : "Upgrade"}
      </Loader>
    </Button>
    </>
  );
}

export default PaymentButton;
