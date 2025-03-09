import { NextPage } from "next";
import IntegrationCard from "./_components/integration-card";
import { INTEGRATION_CARDS_DATA } from "@/config/integration-card";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="flex flex-col w-full lg:w-3/4 gap-y-5">
        {INTEGRATION_CARDS_DATA.map((card, key) => (
          <IntegrationCard key={key} {...card} />
        ))}
      </div>

      <div className="bg-[#18181b] border-l-4 border-[#3352CC] p-4 rounded-2xl flex flex-col w-full lg:w-3/4 ">
        <h3 className="text-base font-semibold text-white mb-2">
          Note :
        </h3>
        <p className="text-neutral-500">
        For Instagram integrations,  <span className="text-red-500">we require Instagram advance permissions </span>, which can only be obtained through a complete app review by meta.
        </p>
      </div>
    </div>
  );
};

export default Page;
