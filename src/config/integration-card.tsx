import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"
import { TintegrationStrategy } from "@/types"

export type TintegrationCard = {
  title: string
  icon: React.ReactNode
  description: string
  strategy:TintegrationStrategy
}



export const INTEGRATION_CARDS_DATA:TintegrationCard[] = [
  {
    title: "Connect Instagram",
    description:
      "Deliver fast responses to Comments, DMs,  Story Reply and Mention .",
    icon: <InstagramDuoToneBlue />,
    strategy: 'INSTAGRAM',
  },
  // {
  //   title: "Connect Salesforce",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices",
  //   icon: <SalesForceDuoToneBlue />,
  //   strategy: 'CRM',
  // },
];
