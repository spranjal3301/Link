import React from "react";
import PaymentButton from "../payments/payment-button";
import { useQueryUser } from "@/hooks/use-query";
import Loader from "../loader";

type Props = {
  children: React.ReactNode;
  type?: "FREE" | "PRO";
};

const SubscriptionPlan = ({ children, type = "FREE" }: Props) => {
  //-Done: query DB for user subsciption     if Pro return '' : children
  const { data, isLoading } = useQueryUser();

  return <Loader state={isLoading}>{data?.data?.subscription?.plan === type && children}</Loader>;
};

export const UpgradeCard = ({}) => (
  <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
    <span className="text-sm">
      Upgrade to {""}
      <span className="theme-gradient">Smart AI</span>
    </span>
    <p className="text-[#9B9CA0] font-light text-sm">
      Unlock all features <br /> including AI and more
    </p>
    <PaymentButton />
  </div>
);

export default SubscriptionPlan;
