import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

export type TintegrationCard = {
  title: string
  icon: React.ReactNode
  description: string
  strategy:TintegrationStrategy
}

export enum TintegrationStrategy {
  'INSTAGRAM',
  'CRM'
}

export const INTEGRATION_CARDS_DATA:TintegrationCard[] = [
  {
    title: "Connect Instagram",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices",
    icon: <InstagramDuoToneBlue />,
    strategy: TintegrationStrategy.INSTAGRAM,
  },
  {
    title: "Connect Salesforce",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices",
    icon: <SalesForceDuoToneBlue />,
    strategy: TintegrationStrategy.CRM,
  },
];
