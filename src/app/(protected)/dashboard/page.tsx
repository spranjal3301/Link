import { onBoardUser } from '@/actions/user/user';
import { NextPage } from 'next'
import { redirect } from 'next/navigation';

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  //-Done: Onboard User
  const user = await onBoardUser();
  
  if(user.status===200 || user.status===201){
    const url = `dashboard/${user.data?.firstname}${user.data?.lastname}`;
    return redirect(url);
  }
 
  return redirect(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? '/sign-in');
}

export default Page

