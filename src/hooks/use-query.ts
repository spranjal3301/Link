import {
  getAllAutomations,
  getAutomationInfo,
} from "@/actions/automations/automations";
import { getProfilePosts } from "@/actions/instagram";
import { getUserInfo } from "@/actions/user/user";
import {
  getAllAutomationsKey,
  getAutomationInfoKey,
  getInstagramMediaKey,
  getUserInfoKey,
} from "@/tanstack-query/query-keys";
import { useQuery } from "@tanstack/react-query";

//` All Get Querys

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

export const useQueryUser = () => {
  return useQuery({
    queryKey:[getUserInfoKey],
    queryFn:getUserInfo
  })
}

export const useQueryGetProfilePosts = () => {
  const fetchPosts = async () => await getProfilePosts();
  return useQuery({
    queryKey:[getInstagramMediaKey],
    queryFn:fetchPosts 
  })
}