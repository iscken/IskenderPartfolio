import { BiNetworkChart } from "react-icons/bi";
import { FaHome, FaMeetup } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const ScrollOptions = {
  spy: "true",
  smooth: "true",
  offset: -90,
  duration: 300,
  activeClass: "active",
};
export const links = [
  {
    name: "Welcome",
    href: "/welcome",
    to: "welcome",
    icon: <FaHome />,
    spy: ScrollOptions.spy,
    smooth: ScrollOptions.smooth,
    offset: ScrollOptions.offset,
    duration: ScrollOptions.duration,
  },
  {
    name: "About",
    href: "/about",
    to: "about",
    icon: <FaMeetup />,
    spy: ScrollOptions.spy,
    smooth: ScrollOptions.smooth,
    offset: ScrollOptions.offset,
    duration: ScrollOptions.duration,
  },
  {
    name: "Work",
    href: "/Work",
    to: "work",
    icon: <BiNetworkChart />,
    spy: ScrollOptions.spy,
    smooth: ScrollOptions.smooth,
    offset: ScrollOptions.offset,
    duration: ScrollOptions.duration,
  },
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
