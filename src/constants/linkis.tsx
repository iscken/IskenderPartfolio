import { TiContacts } from "react-icons/ti";

const ScrollOptions = {
  spy: "true",
  smooth: "true",
  offset: -90,
  duration: 300,
  activeClass: "active",
};
export const linkis = [
  {
    name: "Contacts",
    href: "/Contacts",
    to: "Contacts",
    icon: <TiContacts />,
    spy: ScrollOptions.spy,
    smooth: ScrollOptions.smooth,
    offset: ScrollOptions.offset,
    duration: ScrollOptions.duration,
  },
];
