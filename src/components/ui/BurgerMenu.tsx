import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constants/links";
import { Link as ScrolLink } from "react-scroll";

const BurgerMenu = () => {
  const { isOpen, fixScroll } = useHeaderStore();
  return (
    <div
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className="container">
        <div className={scss.content}>
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <ScrolLink
                    onClick={fixScroll}
                    className={scss.link}
                    activeClass={scss.active}
                    to={item.to}
                    spy={item.spy}
                    smooth={item.smooth}
                    offset={item.offset}
                    duration={item.duration}
                  >
                    {item.icon} {item.name}
                  </ScrolLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
