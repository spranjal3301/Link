import {
  getAllAutomations,
  getAutomationInfo,
} from "@/actions/automations/automations";
import {
  getAllAutomationsKey,
  getAutomationInfoKey,
} from "@/tanstack-query/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: [getAllAutomationsKey],
    queryFn: getAllAutomations,
  });
};

export const useQueryAutomationInfo = (automationId: string) => {
  return useQuery({
    queryKey: [getAutomationInfoKey],
    queryFn: () => getAutomationInfo(automationId),
  });
};
