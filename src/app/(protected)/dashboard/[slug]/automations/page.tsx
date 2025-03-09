import CreateAutomation from '@/components/global/create-automation'
// import { Check } from '@/icons'
import { NextPage } from 'next'
import AutomationList from './_components/automation-list'
import { Check } from 'lucide-react'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  //-Done: connect automations

  return (
    <div className="flex flex-col w-full gap-5 md:pr-10">
      <AutomationList />
    </div>
  )
}

export default Page