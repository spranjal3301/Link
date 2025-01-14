import { NextPage } from 'next'
import IntegrationCard from './_components/integration-card'
import { INTEGRATION_CARDS_DATA } from '@/config/integration-card'

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <div className="flex justify-center">
          <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
            {INTEGRATION_CARDS_DATA.map((card, key) => (
              <IntegrationCard
                key={key}
                {...card}
              />
            ))}
          </div>
        </div>
      )
}

export default Page