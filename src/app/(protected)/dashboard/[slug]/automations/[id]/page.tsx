import { NextPage } from "next";
import AutomationBreadCrumb from "../_components/automation-bread-crumb";
import { Warning } from "@/icons";
import Trigger from "../_components/trigger";

interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  //-WIP: fetch user automation data
  return (
    <div className=" flex flex-col items-center gap-y-20">
        <AutomationBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
        {/* <ThenNode id={params.id} /> */}
        {/* <PostNode id={params.id} /> */}
      </div>
  );
};

export default Page;
