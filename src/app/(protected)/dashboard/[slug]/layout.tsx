import DashboradLayout from "@/components/global/dashboard-layout";
import { getQueryClient } from "@/lib/query-client";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/tanstack-query/prefetch";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { NextPage } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  params: { slug: string };
}

const Layout: NextPage<Props> = async ({ children, params }) => {
  //-Done:React Query feach data
  const queryClient = getQueryClient();
  await PrefetchUserProfile(queryClient);
  await PrefetchUserAutomations(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboradLayout slug={params.slug}>{children}</DashboradLayout>
    </HydrationBoundary>
  );
};

export default Layout;
