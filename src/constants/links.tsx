import { BiNetworkChart } from "react-icons/bi";
import { FaHome, FaMeetup } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

export const links = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <FaMeetup />,
  },
  {
    name: "Work",
    href: "/work",
    icon: <BiNetworkChart />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <TiContacts />,
  },
];
