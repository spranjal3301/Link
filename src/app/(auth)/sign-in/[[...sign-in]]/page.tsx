import { SignIn } from "@clerk/nextjs";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="grid place-content-center h-screen w-full bg-[#131316]">
      <SignIn />
    </div>
  );
};

export default Page;
