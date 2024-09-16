import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constants/links";
import Link from "next/link";

const BurgerMenu = () => {
  const { isOpen } = useHeaderStore();
  return (
    <div
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className="container">
        <div className={scss.content}>
          {links.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
