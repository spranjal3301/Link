import DashboradLayout from '@/components/global/dashboard-layout';
import { NextPage } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Props {
    children:React.ReactNode;
    params:{slug:string}
}

const Layout: NextPage<Props> = ({children,params}) => {
  //?React Query feach data
  return (
    <DashboradLayout slug={params.slug}>{children}</DashboradLayout>
  )
}

export default Layout;