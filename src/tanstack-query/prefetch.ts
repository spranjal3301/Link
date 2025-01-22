import {
  getAllAutomations,
  getAutomationInfo,
} from "@/actions/automations/automations";
import { getUserInfo } from "@/actions/user/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";
import {
  getAllAutomationsKey,
  getAutomationInfoKey,
  getUserInfoKey,
} from "./query-keys";

export const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 1000 * 60, //- 60sec
  });
};

export const PrefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, getUserInfo, getUserInfoKey);
};

export const PrefetchUserAutomations = async (client: QueryClient) => {
  return await prefetch(client, getAllAutomations, getAllAutomationsKey);
};

export const prefetchAutomationInfo = async (
  client: QueryClient,
  automationId: string
) => {
  return await prefetch(
    client,
    () => getAutomationInfo(automationId),
    getAutomationInfoKey
  );
};
