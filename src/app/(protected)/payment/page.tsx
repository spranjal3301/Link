import { NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    session_id?: string;
    cancel?: boolean;
  };
}

//` This is Server Component and its necessary because 
//` if some one close its frontend after payment it should update in DB (its work as webhook)
const Page: NextPage<Props> = async ({
  searchParams: { cancel, session_id },
}) => {
  //- UI update:alert payment 
//   if (session_id) {
//     const customer = await onSubscribe(session_id);

//     if (customer.status === 200) {
//       return redirect("/dashboard");
//     }
//   }

  return (
    <div className='"flex flex-col justify-center items-center h-screen w-full"'>
      <h4 className="text-5xl font-bold">404</h4>
      <p className="text-xl font-bold">Oppse! Something went wrong</p>
    </div>
  );
};

export default Page;

/*
export const onSubscribe = async (session_id: string) => {
  const user = await onCurrentUser()
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    if (session) {
      const subscribed = await updateSubscription(user.id, {
        customerId: session.customer as string,
        plan: 'PRO',
      })

      if (subscribed) return { status: 200 }
      return { status: 401 }
    }
    return { status: 404 }
  } catch (error) {
    return { status: 500 }
  }
}
*/
