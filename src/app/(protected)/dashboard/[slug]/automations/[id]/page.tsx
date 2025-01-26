import { NextPage } from "next";
import AutomationBreadCrumb from "../_components/automation-bread-crumb";
import { Warning } from "@/icons";
import Trigger from "../_components/trigger";
import { getAutomationInfo } from "@/actions/automations/automations";
import { getQueryClient } from "@/lib/query-client";
import { prefetchAutomationInfo } from "@/tanstack-query/prefetch";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ThenNode from "../_components/then-node";
import PostNode from "../_components/post-node";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return {
    title: `${info.data?.name} | Automation` ,
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
        {/*//~ WhenNode  */}
        <div className="w-full lg:w-10/12 xl:w-5/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
        <ThenNode id={params.id} />
        <PostNode id={params.id} />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
