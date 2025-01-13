import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  //- Onboard User
 
 
  return new Promise((res)=>{
    setTimeout(()=>{
      res(0);
    },5000)
  }).then(()=>{
    return <div>dash</div>;
  });
  return <div>dash</div>;
}

export default Page

