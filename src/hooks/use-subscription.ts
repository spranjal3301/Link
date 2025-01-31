import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";


export const useSubscription = (clerkId:string,planType: "YEARLY" | "MONTHLY") => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  //- UI update:alert payment 

  const onSubscribe = async () => {
    
    try {
      setIsProcessing(true);
      const response = await axios.post("/api/payment", { planType });
      if (response.data.status === 200) {
        const { id: subscriptionId, notes } = response.data.data;

        const options = {
          subscription_id: subscriptionId,
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          name: "LINK ?",
          description:
            planType == "MONTHLY"
              ? "Monthly Subscription"
              : "Yearly Subscription",
          prefill: { email: notes.email },
          notes: {
            clerkId,
          },
          handler: async () => {
            toast("Payment Successful", {
              description: "Now your are PRO your status changed within Hour",
            });
          },
        };

        //@ts-ignore
        const rzp = new window.Razorpay(options);
        return rzp.open();
      }
      // redirct use to payment page
    } catch (error) {
      return window.location.href = `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`
    } finally {
      setIsProcessing(false);
    }
  };
  return { isProcessing, onSubscribe };
};
