import {
  AutomationDuoToneBlue,
  AutomationDuoToneWhite,
  ContactsDuoToneBlue,
  HomeDuoToneBlue,
  HomeDuoToneWhite,
  RocketDuoToneBlue,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";
import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

type SidebarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SidebarMenu: SidebarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite />,
  },
];

export const PAGE_BREAD_CRUMBS: string[] = [
  'contacts',
  'automations',
  'integrations',
  'settings',
]

type Props = {
  [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />,
}
