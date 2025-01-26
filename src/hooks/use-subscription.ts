import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const onSubscribe = async () => {
    try {
      setIsProcessing(true);
      const response = await axios.get("/api/payment");
      if (response.data.status === 200) {
        return (window.location.href = `${response.data.session_url}`);
      }
    } catch (error) {
        toast("Server Down",{
            description:'try after Sometime'
        })
    }
    finally{
        setIsProcessing(false);
    }

  };
  return { isProcessing, onSubscribe };
};
