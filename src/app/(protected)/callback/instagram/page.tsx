import { onInstaIntegrate } from "@/actions/integrations";
import { NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    code: string;
  };
} 

const Page: NextPage<Props> = async ({ searchParams: { code } }) => {
  if (code) {
    console.log("code",code);
    const user = await onInstaIntegrate(code.split("#_")[0]);
    if (user.status === 200) {
      return redirect(
        `/dashboard/${
          user.data?.firstname ? user.data?.firstname : user.data?.lastname
        }/integrations`
      );
    }
  }
  return redirect("/error");
};

export default Page;
