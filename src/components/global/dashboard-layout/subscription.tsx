import React from "react";
import PaymentButton from "../payment-button";

type Props = {
  children: React.ReactNode;
  type?: "FREE" | "PRO";
};

const SubscriptionPlane = ({ children, type = "FREE" }: Props) => {
  //? query DB for user subsciption     if Pro return '' : children
  return children;
};

export const UpgradeCard = ({}) => (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to {''}
        <span
          className="theme-gradient"
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
);

export default SubscriptionPlane;
