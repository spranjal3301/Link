import { NextPage } from "next";
import AutomationBreadCrumb from "../_components/automation-bread-crumb";

interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  //-WIP: fetch user automation data
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={params.id} />
    </div>
  );
};

export default Page;
