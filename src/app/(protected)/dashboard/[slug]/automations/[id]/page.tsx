import { NextPage } from "next";
import AutomationBreadCrumb from "../_components/automation-bread-crumb";
import { getAutomationInfo } from "@/actions/automations/automations";
import { getQueryClient } from "@/lib/query-client";
import { prefetchAutomationInfo } from "@/tanstack-query/prefetch";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ThenNode from "../_components/then-node";
import PostNode from "../_components/post-node";
import WhenNode from "../_components/when-node";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return {
    title: `${info.data?.name} | Automation`,
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  //-Done: fetch user automation data
  const queryClient = getQueryClient();
  await prefetchAutomationInfo(queryClient, params.id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" flex flex-col items-center ">
        <AutomationBreadCrumb id={params.id} />
        <div className="flex flex-col items-center w-full p-2 mb-10 gap-7">
        <WhenNode id={params.id} />
        <ThenNode id={params.id} />
        <PostNode id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
