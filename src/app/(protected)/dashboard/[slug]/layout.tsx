import DashboradLayout from '@/components/global/dashboard-layout';
import Sidebar from '@/components/global/dashboard-layout/desktop-sidebar';
import { NextPage } from 'next'

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