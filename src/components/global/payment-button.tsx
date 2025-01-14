import React from "react";
import { Button } from "../ui/button";

type Props = {};

function PaymentButton({}: Props) {
  //?WIP: get their subscription detail
  return (
    <Button className="text-white rounded-full font-bold bg-gradient-to-br from-main2 to-main1">
      Upgrade
    </Button>
  );
}

export default PaymentButton;
