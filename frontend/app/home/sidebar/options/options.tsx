import { ReactNode } from "react"
import HeroIcon from "./icon/icon"
interface SidebarItems {
    id: number,
    title: string,
    url: string,
    icon: ReactNode,
}

export const options: SidebarItems[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: <HeroIcon src={"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"} />,
  },
  {
    id: 2,
    title: 'DeFi',
    url: '/defi',
    icon: <HeroIcon src={"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"} />,
  },
];
