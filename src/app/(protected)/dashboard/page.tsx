import { onBoardUser } from '@/actions/user/user';
import { NextPage } from 'next'
import { redirect } from 'next/navigation';

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  //-Done: Onboard User
  const user = await onBoardUser();
  // console.log(user);
  
  
  if(user.status===200 || user.status===201){
    const url = `dashboard/${user.data?.firstname ? user.data?.firstname : user.data?.lastname}`;
    return redirect(url);
  }
  
  //- UI update : create error page redirect with proper warning 
  return redirect('/error');
}

export default Page

