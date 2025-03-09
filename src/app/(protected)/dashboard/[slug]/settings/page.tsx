import Billing from "@/components/global/payments/billing";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <div className="w-full h-screen md:h-[70vh] px-2 mb-12">
      <Billing />
    </div>
  );
};

export default Page;
